import Classroom from "@/app/models/classroom.model"
import User from "@/app/models/user.model"
import connect from "@/app/db/connect"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        connect()
        const reqBody = await req.json()
        const { name, description, teacher, students, assignments } = reqBody

        const isTeacher = await User.findOne({ _id: teacher, role: "teacher" })
        const isStudents = await User.find({
            _id: { $in: students },
            role: "student"
        })

        if (!isTeacher) {
            return NextResponse.json(
                { error: "Invalid teacher" },
                { status: 400 }
            )
        }

        if (isStudents.length !== students.length) {
            return NextResponse.json(
                { error: "One or more students  IDs are invalid" },
                { status: 400 }
            )
        }

        const isClass = await Classroom.find({ name })

        if (isClass.length > 0) {
            return NextResponse.json(
                { error: "Classroom already exists" },
                { status: 400 }
            )
        }
        const newClass = new Classroom({
            name,
            description,
            teacher: teacher,
            students: students,
            assignments: assignments
        })

        const Data = await newClass.save()
        return NextResponse.json(
            {
                message: "Classroom created successfully",
                data: Data,
                succuss: true
            },
            { status: 201 }
        )
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function GET(req) {
    await connect()
    try {

        const id = await req.nextUrl.searchParams.get("id")
        if (!id) {
            const allClassrooms = await Classroom.find()
                .populate("teacher")
                .populate("students")
                .populate('assignments')

            return NextResponse.json(
                {
                    message: "All classrooms",
                    Data: allClassrooms,
                    success: true
                },
                { status: 200 }
            )
        }

        const classroom = await Classroom.findById(id).populate("teacher").populate("students").populate('assignments')

        if (!classroom) {
            return NextResponse.json(
                { message: "Classroom Not found", success: true },
                { status: 404 }
            )
        }

        return NextResponse.json(
            { message: "Classroom found", Data: classroom, success: true },
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
                { error: "Invalid classroom ID" },
                { status: 400 }
            )
        }

        const DeletedClass = await Classroom.findByIdAndDelete(id)
        if (!DeletedClass) {
            return NextResponse.json(
                { error: "Classroom not found" },
                { status: 404 }
            )
        }

        return NextResponse.json(
            { message: "Classroom deleted successfully", success: true },
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function PUT(req) {
    try {
        await connect();

        const id = req.nextUrl.searchParams.get('id');
        const reqBody = await req.json();
        const { name, description, teacher, students, assignments } = reqBody;

        if (!id) {
            return NextResponse.json(
                { message: "Classroom ID not provided" },
                { status: 400 }
            );
        }

        const classroom = await Classroom.findById(id);
        if (!classroom) {
            return NextResponse.json(
                { message: "Classroom not found" },
                { status: 404 }
            );
        }

        if (teacher) {
            const isTeacher = await User.findOne({ _id: teacher, role: "teacher" });
            if (!isTeacher) {
                return NextResponse.json(
                    { error: "Invalid teacher" },
                    { status: 400 }
                );
            }
            classroom.teacher = teacher;
        }

        if (students) {
            const isStudents = await User.find({
                _id: { $in: students },
                role: "student"
            });

            if (isStudents.length !== students.length) {
                return NextResponse.json(
                    { error: "One or more student IDs are invalid" },
                    { status: 400 }
                );
            }

            // Filter out student IDs that are already in the classroom.students array
            const newStudents = students.filter(studentId => !classroom.students.includes(studentId));

            if (newStudents.length > 0) {
                classroom.students.push(...newStudents);
            }

            // Update the student documents to add the classroom ID to their classrooms array
            await User.updateMany(
                { _id: { $in: newStudents } },
                { $addToSet: { classrooms: id } }
            );
        }

        if (name) classroom.name = name;
        if (description) classroom.description = description;
        if (assignments) classroom.assignments = assignments;

        const updatedClassroom = await classroom.save();

        return NextResponse.json(
            {
                message: "Classroom updated successfully",
                data: updatedClassroom,
                success: true
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}