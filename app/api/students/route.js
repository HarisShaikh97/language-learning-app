import User from "@/app/models/user.model";
import connect from "@/app/db/connect";
import { NextResponse } from "next/server";
import HandleFile from "@/utils/HandleFile";
import Classroom from "@/app/models/classroom.model";
import { writeFile } from "fs/promises";
import fs from "fs";

import csvParser from "csv-parser";

const processCsvFile = (filePath) => {
	return new Promise((resolve, reject) => {
		const results = [];

		fs.createReadStream(filePath)
			.pipe(csvParser())
			.on("data", (data) => {
				// Check if the row is not empty
				if (Object.values(data).some(value => value.trim() !== "")) {
					results.push(data);
				}
			})
			.on("end", () => {
				fs.unlinkSync(filePath); // Clean up the uploaded file
				resolve(results);
			})
			.on("error", (error) => {
				reject(error);
			});
	});
};



const handleUser = async (userDetails) => {
	const results = [];
	const emailError = []

	for (const item of userDetails) {
		const { email } = item
		try {
			const isStudent = await User.findOne({ email });
			console.log(isStudent);
			if (isStudent) {
				emailError.push({ email: isStudent.email });
			}
		} catch (error) {
			return NextResponse.json({ error: error.message }, { status: 500 });
		}
	}

	if (emailError.length > 0) {
		return NextResponse.json(
			{ error: "Emails already exist", emails: emailError },
			{ status: 400 }
		);
	}


	for (const item of userDetails) {

		const { email, firstName, lastName, phone, role, password } = item;

		try {
			const isStudent = await User.findOne({ email });

			if (isStudent) {
				return NextResponse.json(
					{ error: "Email already exists", email: isStudent.email },
					{ status: 400 }
				);
			}

			const savedStudent = await User.create({
				firstName,
				lastName,
				email,
				password,
				role,
				phone
			});

			results.push(savedStudent);
		} catch (error) {

			return NextResponse.json({ error: error.message }, { status: 500 });
		}

	}
	return NextResponse.json(
		{
			message: "Students processed successfully",
			data: results,
			success: true
		},
		{ status: 200 }
	);

};


export async function POST(req) {
	try {
		connect();
		const reqBody = await req.formData();
		// const firstName = reqBody.get("firstName");
		// const lastName = reqBody.get("lastName");
		// const email = reqBody.get("email");
		// const phone = reqBody.get("phone");
		// const role = reqBody.get("role");
		// const password = reqBody.get("password");
		// const classrooms = reqBody.get("class");
		// const image = reqBody.get("image");
		const file = reqBody.get("file");


		const bytes = await file.arrayBuffer();
		const buffer = await Buffer.from(bytes);

		const path = `public/${Date.now() + file.name}`;
		await writeFile(path, buffer);

		const userDetails = await processCsvFile(path);

		const res = await handleUser(userDetails)


		return res
		// userDetails.map(async (item) => {
		// 	const isStudent = await User.findOne({ email });

		// 	if (isStudent) {
		// 		return NextResponse.json({ error: "email already exist" }, { status: 400 });
		// 	}

		// 	const newStudents = await User.create(item);
		// 	console.log(newStudents);
		// });

		// const isStudent = await User.findOne({ email });
		// if (isStudent) {
		// 	return NextResponse.json({ error: "email already exist" }, { status: 400 });
		// }

		// // const hashedPassword = await bcrypt.hash(password, 10)
		// // console.log(hashedPassword);
		// const imageUrl = await HandleFile(image);
		// const student = new User({
		// 	firstName,
		// 	lastName,
		// 	nickname: "",
		// 	email,
		// 	phone,
		// 	role: role || "student",
		// 	classrooms: JSON.parse(classrooms),
		// 	recommendClass: [],
		// 	password,
		// 	image: imageUrl?.url || "",
		// });

		// const newStudent = await student.save();

		// if (classrooms) {
		// 	const ClassID = JSON.parse(classrooms);
		// 	for (const classroomId of ClassID) {
		// 		const data = await Classroom.findByIdAndUpdate(classroomId, { $push: { students: newStudent._id } }, { new: true, runValidators: true });
		// 	}
		// }
		// return NextResponse.json(
		// 	{
		// 		message: "student saved successfully",
		// 		data: newStudent,
		// 		success: true,
		// 	},
		// 	{ status: 200 }
		// );
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

export async function GET(req) {
	try {
		connect();
		const id = await req.nextUrl.searchParams.get("id");
		if (!id) {
			// const students = await User.find({ role: "student" }).populate('classrooms')
			const students = await User.find({ role: "student" }).populate({
				path: "classrooms",
				populate: {
					path: "teacher",
					model: "User",
				},
			});
			return NextResponse.json({ data: students, success: true }, { status: 200 });
		}

		const student = await User.findById(id)
			.populate({
				path: "classrooms",
				populate: {
					path: "teacher",
					model: "User",
				},
			})
			.populate("recommendClass");
		return NextResponse.json({ data: student, success: true }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

export async function PUT(req) {
	try {
		connect();

		const id = await req.nextUrl.searchParams.get("id");
		// const file = await req.formData()
		// const image = file.get("image")

		if (!id) {
			return NextResponse.json({ message: "Id not found!", success: false }, { status: 404 });
		}
		// if (image) {
		//     const imageUrl = await HandleFile(image)
		//     const student = await User.findOneAndUpdate({ _id: id }, {
		//         image: imageUrl.url
		//     }, { new: true, runValidators: false })
		//     return NextResponse.json({ message: "student Profile image updated successfully", data: student, success: true }, { status: 200 })

		// }

		const reqBody = await req.json();
		const student = await User.findOneAndUpdate(
			{ _id: id },
			{
				firstName: reqBody.firstName,
				lastName: reqBody.lastName,
				email: reqBody.email,
				phone: reqBody.phone,
				nickname: reqBody.nickname,
				level: reqBody.level,
			},
			{ new: true, runValidators: false }
		);
		if (!student) {
			return NextResponse.json({ message: "student not found!", success: false }, { status: 404 });
		}
		return NextResponse.json(
			{
				message: "student updated successfully",
				data: student,
				success: true,
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

export async function DELETE(req) {
	try {
		connect();
		const id = await req.nextUrl.searchParams.get("id");
		if (!id) {
			return NextResponse.json({ message: "Id not found!", success: false }, { status: 404 });
		}
		const student = await User.findByIdAndDelete(id);

		if (!student) {
			return NextResponse.json({ message: "student not found!", success: false }, { status: 404 });
		}
		return NextResponse.json(
			{
				message: "student deleted successfully",
				data: student,
				success: true,
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
