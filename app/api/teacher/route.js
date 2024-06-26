import User from "@/app/models/user.model"
import connect from "@/app/db/connect"
import HandleFile from "@/utils/HandleFile"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"
import Classroom from "@/app/models/classroom.model"

export async function POST(req) {
    try {
        connect()
        const reqBody = await req.formData()

        const firstName = reqBody.get("firstName")
        const lastName = reqBody.get("lastName")
        const email = reqBody.get("email")
        const phone = reqBody.get("phone")
        const password = reqBody.get("password")
        const classrooms = reqBody.get("class")
        const role = reqBody.get("role")
        const image = reqBody.get("image")

        const teacherExited = await User.find({ email })

        if (teacherExited.length > 0) {
            return NextResponse.json("Teacher already exist", { status: 400 })
        }
        const imageUrl = await HandleFile(image)
        // const hashPassword = await bcrypt.hash(password, 10)

        const newTeacher = new User({
            firstName,
            lastName,
            email,
            phone,
            password,
            role: role,
            classrooms: JSON.parse(classrooms),
            image: imageUrl.url
        })

        const createdTeacher = await newTeacher.save()

        const ClassID = JSON.parse(classrooms)

        for (const classroomId of ClassID) {
            const data = await Classroom.findByIdAndUpdate(
                classroomId,
                { teacher: createdTeacher._id },
                { new: true, runValidators: true }
            )
        }
        return NextResponse.json(
            {
                success: true,
                data: newTeacher,
                message: "Teacher created successfully"
            },
            { status: 200 }
        ) // return new teacher
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function GET(req) {
    try {
        connect()
        const id = await req.nextUrl.searchParams.get("id")
        const role = await req.nextUrl.searchParams.get("role")
        if (!id) {
            const teachers = await User.find({ role }).populate("classrooms").select("-level -nickname -recommendClass")
            if (teachers.length > 0) {
                return NextResponse.json(
                    { data: teachers, success: true },
                    { status: 200 }
                )
            }
            return NextResponse.json(
                { message: " no teacher found" },
                { status: 404 }
            )
        }

        const teacher = await User.findById(id).populate("classrooms").select("-level -nickname -recommendClass")

        return NextResponse.json(
            { data: teacher, success: true },
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function DELETE(req) {
    try {
        connect()
        const id = await req.nextUrl.searchParams.get("id")
        if (!id) {
            return NextResponse.json(
                { message: "ID not found!" },
                { status: 404 }
            )
        }
        const teacher = await User.findByIdAndDelete(id)
        if (!teacher) {
            return NextResponse.json(
                { message: "Teacher not found!" },
                { status: 404 }
            )
        }

        return NextResponse.json(
            { message: "Teacher deleted successfully", data: teacher },
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}


export async function PUT(req) {
    try {
        connect()

        const id = await req.nextUrl.searchParams.get('id')
        // const file = await req.formData()
        // const image = file.get("image")


        if (!id) {
            return NextResponse.json({ message: "Id not found!", success: false }, { status: 404 })
        }
        // if (image) {
        //     const imageUrl = await HandleFile(image)
        //     const student = await User.findOneAndUpdate({ _id: id }, {
        //         image: imageUrl.url
        //     }, { new: true, runValidators: false })
        //     return NextResponse.json({ message: "Teachers Profile image updated successfully", data: student, success: true }, { status: 200 })

        // }

        const reqBody = await req.json()

        const Teacher = await User.findOneAndUpdate({ _id: id }, {
            firstName: reqBody.firstName,
            lastName: reqBody.lastName,
            email: reqBody.email,
            phone: reqBody.phone,
        }, { new: true, runValidators: false })
        if (!Teacher) {
            return NextResponse.json({ message: "student not found!", success: false }, { status: 404 })
        }
        return NextResponse.json({ message: "Teacher updated successfully", data: Teacher, success: true }, { status: 200 })



    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

}
