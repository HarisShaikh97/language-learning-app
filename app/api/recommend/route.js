import connect from "@/app/db/connect";
import User from "@/app/models/user.model";
import Classroom from "@/app/models/classroom.model";
import { NextResponse } from "next/server";
import Recommend from "@/app/models/recommend.model";
import mongoose from "mongoose";


export async function POST(req) {
    try {
        await connect();
        const reqBody = await req.json();
        const { students, classes } = reqBody;

        const foundStudents = await User.find({
            _id: { $in: students },
            role: "student"
        });
        console.log(foundStudents);
        const foundClasses = await Classroom.find({ _id: { $in: classes } });

        if (foundStudents.length !== students.length) {
            return NextResponse.json({ error: "One or more students not found" }, { status: 404 });
        }
        if (foundClasses.length !== classes.length) {
            return NextResponse.json({ error: "One or more classes not found" }, { status: 404 });
        }



        return NextResponse.json({ message: "Recommendation sent to student" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET(req) {
    try {
        await connect();
        const id = req.nextUrl.searchParams.get("id");

        if (!id) {
            return NextResponse.json({ error: "No id provided" }, { status: 404 });
        }

        const classes = await Recommend.find();

        const recommendations = classes.map((recommendation) => {

            return { students: recommendation.students, recommendClass: recommendation.classes };
        });

        const students = recommendations.flatMap((rec) => rec.students);
        const Classrecommend = recommendations.flatMap((rec) => rec.recommendClass);

        // Ensure id is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({ error: "Invalid id format" }, { status: 400 });
        }

        const objectId = new mongoose.Types.ObjectId(id);

        if (!students.some(studentId => studentId.equals(objectId))) {
            return NextResponse.json({ message: "No recommendations found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Recommended Classed", Class: Classrecommend, success: true }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}


