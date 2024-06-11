import connect from "@/app/db/connect";
import Assignment from "@/app/models/assignment.model";
import Classroom from "@/app/models/classroom.model";
import HandleFile from "@/utils/HandleFile";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        connect()
        const classId = await req.nextUrl.searchParams.get('classId')
        const data = await req.formData()
        const title = data.get('title')
        const description = data.get('description')
        const file = data.get('file')
        const dueDate = data.get('dueDate')

        if (!title || !description || !classId || !dueDate) {
            return NextResponse.json({ message: "All fields are required", success: false }, { status: 400 });
        }
        const classroom = await Classroom.findById(classId)

        if (!classroom) {
            return NextResponse.json({ message: "invalid class id no classRoom found", success: false }, { status: 400 });
        }

        const FileUrl = await HandleFile(file)

        const newAssignment = new Assignment({
            title: title,
            description: description,
            classroom: classId,
            file: FileUrl.url || "",
            dueDate: dueDate
        })

        const savedAssignment = await newAssignment.save()

        classroom.assignments.push(savedAssignment._id)
        await classroom.save();
        return NextResponse.json({ message: "Assignment created successfully", assignment: savedAssignment, success: true, }, { status: 200 })


    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function GET(req) {
    try {
        connect()

        const id = await req.nextUrl.searchParams.get("id")
        if (!id) {
            const allAssignments = await Assignment.find()
            return NextResponse.json({ message: "All classrooms", Data: allAssignments, success: true }, { status: 200 })
        }

        const assignment = await Assignment.findById(id)

        return NextResponse.json({ message: "Classroom found", Data: assignment, success: true }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function DELETE(req) {
    try {
        connect()
        const id = req.nextUrl.searchParams.get('id')
        if (!id) {
            return NextResponse.json({ message: "ID not found!" }, { status: 404 })
        }
        console.log(id);
        const deleted = await Assignment.findByIdAndDelete(id)

        if (!deleted) {
            return NextResponse.json({ message: "Assignment not found!" }, { status: 404 })
        }
        const classroom = await Classroom.findById(deleted.classroom)


        for (let i = 0; i < classroom.assignments.length; i++) {
            if (classroom.assignments[i] === deleted._id) {
                classroom.assignments.splice(i, 1);
                await classroom.save();
            }
        }
        console.log(classroom);
        return NextResponse.json({ message: "Assignment deleted successfully", data: deleted, success: true }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function PUT(req) {
    try {
        connect()
        const id = await req.nextUrl.searchParams.get('id')
        const reqBody = await req.json()
        const { title, description, dueDate } = reqBody
        if (!id) {
            return NextResponse.json({ message: "ID not found!" }, { status: 404 })
        }
        const assignment = await Assignment.findOneAndUpdate({ _id: id },
            {
                title: title,
                description: description,
                dueDate: dueDate

            },
            { new: true, runValidators: false }
        )
        if (!assignment) {
            return NextResponse.json({ message: "Assignment not found!" }, { status: 404 })
        }
        return NextResponse.json({ message: "Assignment updated successfully", data: assignment, success: true }, { status: 200 })




    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}