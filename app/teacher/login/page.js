"use client"

import { useState } from "react"
import Image from "next/image"
// import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function TeacherLogin() {
	const router = useRouter()

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSignIn = async (e) => {
		e.preventDefault()
		// const res = await signIn("credentials", {
		// 	email: email,
		// 	password: password,
		// 	redirect: false,
		// 	callbackUrl: "/home"
		// })
		// if (res.status === 200) {
		// 	router.push(res.url)
		// }
		router?.push("/teacher/all-students")
	}

	return (
		<div className="h-screen w-screen flex flex-col items-center overflow-y-auto scrollbar-none">
			<div className="h-20 w-full bg-primary bg-opacity-15 flex items-center px-5">
				<Image src={"/logo2.png"} alt="logo" height={100} width={100} />
			</div>
			<p className="text-xl md:text-3xl text-primary font-extrabold w-[250px] sm:w-[450px] text-center my-10">
				Log in to connect with students worldwide
			</p>
			<div className="flex flex-col gap-3 w-[250px] sm:w-[450px] mt-5">
				<p className="text-primary text-xs font-bold">
					Username or Email:
				</p>
				<div className="h-14 w-full rounded bg-sky-50 shadow-xl px-3 flex items-center justify-center">
					<input
						type="text"
						placeholder="example@email.com"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value)
						}}
						className="text-xs"
						style={{
							outline: "none",
							width: "100%",
							background: "transparent"
						}}
					/>
				</div>
			</div>
			<div className="flex flex-col gap-3 w-[250px] sm:w-[450px] mt-5">
				<p className="text-primary text-xs font-bold">Password:</p>
				<div className="h-14 w-full rounded bg-sky-50 shadow-xl px-3 flex items-center justify-center">
					<input
						type="password"
						placeholder="**********"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value)
						}}
						className="text-xs"
						style={{
							outline: "none",
							width: "100%",
							background: "transparent"
						}}
					/>
				</div>
			</div>
			<div className="flex justify-end w-[250px] sm:w-[450px] mt-5">
				<p className="text-primary underline text-xs cursor-pointer">
					I forgot my password!
				</p>
			</div>
			<button
				className="flex items-center justify-center bg-blue-300 py-2 w-[250px] sm:w-[450px] rounded mt-5 border-b-2 border-blue-400 text-white font-bold"
				onClick={handleSignIn}
			>
				Sign in
			</button>
		</div>
	)
}
