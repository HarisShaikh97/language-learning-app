"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { FallingLines } from "react-loader-spinner"
import toast from "react-hot-toast"

export default function Signup() {
	const router = useRouter()

	const [isLoading, setIsLoading] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	// const handleGoogleSignIn = async (e) => {
	// 	e.preventDefault()
	// 	await signIn("google", { callbackUrl: "/home" })
	// }

	const handleSignUp = async (e) => {
		e.preventDefault()

		setIsLoading(true)

		const formData = new FormData()
		formData.append("email", email)
		formData.append("password", password)

		await axios
			.post("/api/students", formData, {
				headers: {
					"Content-Type": "multipart/form-data"
				}
			})
			?.then((res) => {
				console.log(res)
				toast.success(res?.data?.message)
				setIsLoading(false)
				router?.back()
			})
			?.catch((err) => {
				console.log(err)
				toast.error(err?.response?.data?.error)
				setIsLoading(false)
			})
	}

	return (
		<div className="h-screen max-w-screen flex flex-col items-center">
			<div className="h-20 w-full bg-primary bg-opacity-15 flex flex-row justify-between items-center pl-5 pr-10">
				<Image src={"/logo2.png"} alt="logo" height={100} width={100} />
				<Link
					href={"/"}
					className=" h-12 w-28 rounded border-b-2 text-white border-blue-500 bg-blue-400 font-bold flex items-center justify-center"
				>
					Sign in
				</Link>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 md:content-center h-full w-full">
				<div
					className="bg-contain bg-no-repeat bg-center hidden md:flex"
					style={{ backgroundImage: "url('/signup-image.jpeg')" }}
				/>
				<div className="flex flex-col items-center">
					<p className="w-[250px] sm:w-[350px] text-3xl text-center font-bold mt-10">
						Sign up and start learning
					</p>
					{/* <div className="flex flex-col items-center gap-5 w-[250px] sm:w-[450px] mt-5">
						<button
							onClick={handleGoogleSignIn}
							className="h-10 w-full rounded-full bg-[#4285F4] hover:bg-opacity-75 relative flex items-center justify-center"
						>
							<div className="h-8 w-8 rounded-full bg-white absolute left-1 top-1 flex items-center justify-center">
								<Image
									src={"/google-logo.svg"}
									alt="logo"
									height={35}
									width={35}
								/>
							</div>
							<p className="text-white">Sign in with Google</p>
						</button>
					</div>
					<p className="mt-10">Or sign up with email</p> */}
					<div className="flex flex-col gap-3 w-[250px] sm:w-[450px]">
						<p className="text-primary text-sm font-bold">Email</p>
						<div className="h-14 w-full rounded bg-sky-50 shadow-xl px-3 flex items-center justify-center">
							<input
								type="text"
								placeholder="example@email.com"
								value={email}
								onChange={(e) => {
									setEmail(e.target.value)
								}}
								className="text-sm"
								style={{
									outline: "none",
									width: "100%",
									background: "transparent"
								}}
							/>
						</div>
					</div>
					<div className="flex flex-col gap-3 w-[250px] sm:w-[450px] mt-5">
						<p className="text-primary text-sm font-bold">
							Password
						</p>
						<div className="h-14 w-full rounded bg-sky-50 shadow-xl px-3 flex items-center justify-center">
							<input
								type="password"
								placeholder="**********"
								value={password}
								onChange={(e) => {
									setPassword(e.target.value)
								}}
								className="text-sm"
								style={{
									outline: "none",
									width: "100%",
									background: "transparent"
								}}
							/>
						</div>
					</div>
					<div className="w-[250px] sm:w-[450px] mt-5">
						<p className="text-lg font-bold">
							Make sure your password:
						</p>
					</div>
					<ul className="list-disc w-[200px] sm:w-[400px] mt-5">
						<li>is 6 characters or longer</li>
						<li>has no spaces</li>
					</ul>
					<button
						className="flex items-center justify-center bg-blue-300 mb-10 min-h-12 w-[250px] sm:w-[450px] rounded mt-5 border-b-2 border-blue-400 text-xl text-white  font-bold"
						onClick={handleSignUp}
					>
						{isLoading ? (
							<FallingLines
								color="#ffffff"
								width="50"
								visible={true}
								ariaLabel="falling-circles-loading"
							/>
						) : (
							"Sign up, it's free"
						)}
					</button>
				</div>
			</div>
		</div>
	)
}
