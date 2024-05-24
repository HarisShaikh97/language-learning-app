import Classroom from "@/app/models/classroom.model";
import User from "@/app/models/user.model";
import connect from "@/app/db/connect";
import { NextResponse } from "next/server";



export async function POST(req) {

    try {
        connect()
        const reqBody = await req.json()
        const { name, description, teacher, students, assignments } = reqBody

        const isTeacher = await User.findOne({ _id: teacher, role: "teacher" })
        const isStudents = await User.find({ _id: { $in: students }, role: "student" })

        if (!isTeacher) {
            return NextResponse.json({ error: "Invalid teacher" }, { status: 400 })
        }

        if (isStudents.length !== students.length) {
            return NextResponse.json({ error: 'One or more students  IDs are invalid' }, { status: 400 });

        }

        const isClass = await Classroom.find({ name })

        if (isClass.length > 0) {
            return NextResponse.json({ error: "Classroom already exists" }, { status: 400 })
        }
        const newClass = new Classroom({
            name,
            description,
            teacher: teacher,
            students: students,
            assignments: assignments
        })

        const Data = await newClass.save()
        return NextResponse.json({ message: "Classroom created successfully", data: Data, succuss: true }, { status: 201 })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}



export async function GET(req) {
    try {
        connect()

        const id = await req.nextUrl.searchParams.get("id")
        if (!id) {
            const allClassrooms = await Classroom.find()
            return NextResponse.json({ message: "All classrooms", Data: allClassrooms, success: true }, { status: 200 })
        }

        const classroom = await Classroom.findById(id).populate("teacher").populate("students").populate("assignments")
        console.log(classroom);
        if (!classroom) {
            return NextResponse.json({ message: "Classroom Not found", success: true }, { status: 404 })
        }

        return NextResponse.json({ message: "Classroom found", Data: classroom, success: true }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

