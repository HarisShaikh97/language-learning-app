import User from "@/app/models/user.model";
import bcrypt from "bcrypt"
import connect from "@/app/db/connect";
import { NextResponse } from "next/server";
import HandleFile from "@/utils/HandleFile";
import Classroom from "@/app/models/classroom.model";

export async function POST(req) {
    try {
        connect()
        const reqBody = await req.formData()
        const firstName = reqBody.get("firstName")
        const lastName = reqBody.get("lastName")
        const email = reqBody.get("email")
        const phone = reqBody.get("phone")
        const role = reqBody.get("role")
        const password = reqBody.get("password")
        const classrooms = reqBody.get("class")
        const image = reqBody.get("image")
        console.log(classrooms);
        const isStudent = await User.findOne({ email })
        if (isStudent) {
            return NextResponse.json({ error: "email already exist" }, { status: 400 })
        }
        console.log();
        const hashedPassword = await bcrypt.hash(password, 10)
        // console.log(hashedPassword);
        const imageUrl = await HandleFile(image)
        const student = new User({
            firstName,
            lastName,
            email,
            phone,
            role,
            classrooms: JSON.parse(classrooms),
            password: hashedPassword,
            image: imageUrl.url
        })

        const ClassID = JSON.parse(classrooms)
        const newStudent = await student.save()
        for (const classroomId of ClassID) {

            const data = await Classroom.findByIdAndUpdate(
                classroomId,
                { $push: { students: newStudent._id } },
                { new: true, runValidators: true }
            );

        }
        return NextResponse.json({ message: "student saved successfully", data: newStudent, success: true }, { status: 200 })



    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}



export async function GET(req) {
    try {

        connect()
        const id = await req.nextUrl.searchParams.get("id")
        if (!id) {
            const students = await User.find({ role: "student" })
            return NextResponse.json({ data: students, success: true }, { status: 200 })

        }

        const student = await User.findById(id).populate("classrooms")
        return NextResponse.json({ data: student, success: true }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}



export async function PUT(req) {
    try {
        connect()

        const id = await req.nextUrl.searchParams.get('id')
        const file = await req.formData()
        const image = file.get("image")


        if (!id) {
            return NextResponse.json({ message: "Id not found!", success: false }, { status: 404 })
        }
        if (image) {
            const imageUrl = await HandleFile(image)
            const student = await User.findOneAndUpdate({ _id: id }, {
                image: imageUrl.url
            }, { new: true, runValidators: false })
            return NextResponse.json({ message: "student Profile image updated successfully", data: student, success: true }, { status: 200 })

        }

        const reqBody = await req.json()
        const student = await User.findOneAndUpdate({ _id: id }, {
            firstName: reqBody.firstName,
            lastName: reqBody.lastName,
            email: reqBody.email,
            phone: reqBody.phone,
        }, { new: true, runValidators: false })
        console.log(student);
        return NextResponse.json({ message: "student updated successfully", data: student, success: true }, { status: 200 })



    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

}



export async function DELETE(req) {
    try {
        connect()
        const id = await req.nextUrl.searchParams.get('id')
        if (!id) {
            return NextResponse.json({ message: "Id not found!", success: false }, { status: 404 })
        }
        const student = await User.findByIdAndDelete(id)

        if (!student) {
            return NextResponse.json({ message: "student not found!", success: false }, { status: 404 })
        }
        return NextResponse.json({ message: "student deleted successfully", data: student, success: true }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}