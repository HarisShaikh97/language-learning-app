import connect from "@/app/db/connect";
import Admin from "@/app/models/admin.model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

export async function POST(req) {
    try {
        connect()

        const { email, password } = await req.json()

        if (!email || !password) {
            return NextResponse.json({ message: "all fields are required" }, { status: 404 })
        }

        const admin = await Admin.findOne({ email })

        if (!admin) {
            return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
        }

        const isPasswordValid = await bcrypt.compare(password, admin.password)
        if (!isPasswordValid) {
            return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
        }
        const accessToken = jwt.sign(
            {
                id: admin._id,
                name: admin.name,
                email: admin.email
            },
            process.env.ACCESS_TOKEN_SECRET,

        );
        return NextResponse.json({ message: "login success", data: admin, accessToken: accessToken }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}