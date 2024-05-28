"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Login() {
	const router = useRouter()

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleGoogleSignIn = async (e) => {
		e.preventDefault()

		// Call signIn method from NextAuth with Google provider
		await signIn("google", { callbackUrl: "/home" })
	}

	const handleSignIn = async (e) => {
		e.preventDefault()
		const res = await signIn("credentials", {
			email: email,
			password: password,
			redirect: false,
			callbackUrl: "/home"
		})
		if (res.status === 200) {
			router.push(res.url)
		}
	}

	return (
		<div className="h-screen w-screen flex flex-col items-center overflow-y-auto scrollbar-none">
			<div className="h-20 w-full bg-primary bg-opacity-15 flex items-center px-5">
				<Image src={"/logo2.png"} alt="logo" height={100} width={100} />
			</div>
			<p className="text-xl sm:text-3xl md:text-5xl text-primary font-extrabold w-[250px] sm:w-[450px] text-center my-10">
				Log in to have fun and learn faster
			</p>
			<div className="flex flex-col items-center gap-5 w-[250px] sm:w-[450px]">
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
				{/* <button className="h-10 w-full rounded-full bg-[#3B5998] hover:bg-opacity-75 relative flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full bg-white absolute left-1 top-1 flex items-center justify-center">
                        <Image src={"/facebook-logo.svg"} alt="logo" height={22.5} width={22.5} />
                    </div>
                    <p className="text-white">Sign in with Facebook</p>
                </button>
                <button className="h-10 w-full rounded-full bg-black hover:bg-opacity-75 relative flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full bg-white absolute left-1 top-1 flex items-center justify-center">
                        <Image src={"/apple-logo.svg"} alt="logo" height={25} width={25} />
                    </div>
                    <p className="text-white">Sign in with Apple</p>
                </button> */}
			</div>
			<p className="mt-5">or</p>
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
			<Link
				href={"/teacher/login"}
				className="flex items-center justify-center bg-blue-400 py-2 w-[250px] sm:w-[450px] rounded mt-5 border-b-2 border-blue-300 text-white font-bold"
			>
				Sign in as a teacher
			</Link>
			<Link href={"/signup"} className="underline my-5">
				Don&apos;t have an account? Sign up now!
			</Link>
		</div>
	)
}
