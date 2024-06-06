import connect from "@/app/db/connect";
import Quiz from "@/app/models/quiz.model";
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        await connect(); // Ensure you wait for the connection to be established

        const reqBody = await req.json();
        const { title, words, quizQuestion, correctOption, falseOptions } = reqBody;


        if (!title || !words || !quizQuestion || !correctOption || !falseOptions) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        const newQuiz = new Quiz({
            title,
            words,
            quizQuestion,
            correctOption,
            falseOptions
        });

        const saveQuiz = await newQuiz.save();

        return NextResponse.json({ message: "Quiz created successfully", quiz: saveQuiz }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET(req) {

    try {
        connect()
        const id = await req.nextUrl.searchParams.get('id')

        if (!id) {
            const quizzes = await Quiz.find()
            if (quizzes.length < 0) {
                return NextResponse.json({ message: "no quiz found" }, { status: 404 })
            }
            return NextResponse.json({ message: "All quizzes", quiz: quizzes }, { status: 200 })
        }

        const quiz = await Quiz.findById(id)
        return NextResponse.json({ success: true, quiz: quiz }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}