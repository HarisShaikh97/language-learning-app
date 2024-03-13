import connect from "@/app/db/connect";
import User from "@/app/models/UserModel";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
    connect()
    try {
        const reqBody = await req.json();
        const { email, password } = reqBody
        const isUser = await User.findOne({ email })

        if (!email) {
            return NextResponse.json({ error: "email is required" }, { status: 400 });
        }
        if (!password) {
            return NextResponse.json({ error: "password is required" }, { status: 400 });
        }
        if (isUser) {
            return NextResponse.json({ error: "user already exists" }, { status: 400 })
        }

        const hashPassword = await bcrypt.hash(password, 10)
        const saveUser = new User({
            username: email,
            email,
            password: hashPassword
        })

        const saved = await saveUser.save()
        return NextResponse.json({ 'success': true, 'user': saved }, { status: 200 })


    } catch (error) {

        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}