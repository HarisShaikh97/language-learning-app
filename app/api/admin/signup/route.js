import Admin from "../../../models/admin.model";
import connectDb from "@/app/db/connect";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectDb();

        const { name, email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const admin = await Admin.find({ email });
        console.log(admin.length);

        if (admin.length > 0) {
            return NextResponse.json({ error: "Email already exists" }, { status: 400 });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const newAdmin = await Admin.create({
            name: name,
            email: email,
            password: hashPassword
        })

        return NextResponse.json({ message: "admin created successfully", data: newAdmin }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
