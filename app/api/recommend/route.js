import connect from "@/app/db/connect";
import User from "@/app/models/user.model";
import Classroom from "@/app/models/classroom.model";
import { NextResponse } from "next/server";




export async function POST(req) {
    try {
        await connect();
        const reqBody = await req.json();
        const { students, classes } = reqBody;

        const foundStudents = await User.find({
            _id: { $in: students },
            role: "student"
        });

        const foundClasses = await Classroom.find({ _id: { $in: classes } });

        // if (foundStudents.length !== students.length) {
        //     return NextResponse.json({ error: "One or more students not found" }, { status: 404 });
        // }
        // if (foundClasses.length !== classes.length) {
        //     return NextResponse.json({ error: "One or more classes not found" }, { status: 404 });
        // }

        foundStudents.map(async (student) => {
            // Filter out classes that are already in the recommendClass array
            const newClasses = classes.flat().filter(classId => !student.recommendClass.includes(classId));

            // If there are new classes to add, push them to the recommendClass array
            if (newClasses.length > 0) {
                student.recommendClass.push(...newClasses);
                await student.save();
            }
        })

        return NextResponse.json({ message: "Recommendation sent to student" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}



