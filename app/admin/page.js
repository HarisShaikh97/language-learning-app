"use client"

import { useState, useContext } from "react"
import Image from "next/image"
import axios from "axios"
import { useRouter } from "next/navigation"
import { FallingLines } from "react-loader-spinner"
import toast from "react-hot-toast"
import { AppContext } from "@/context/context"

export default function AdminLogin() {
	const { dispatch } = useContext(AppContext)

	const router = useRouter()

	const [isLoading, setIsLoading] = useState(false)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSignIn = async (e) => {
		e.preventDefault()

		setIsLoading(true)

		const payload = {
			email: email,
			password: password
		}

		await axios
			.post("/api/admin/login", payload)
			?.then((res) => {
				console.log(res)
				toast.success(res?.data?.message)
				dispatch({
					type: "SET_ACCESS_TOKEN",
					payload: res?.data?.accessToken
				})
				setIsLoading(false)
				router?.push("/admin/home")
			})
			?.catch((err) => {
				console.log(err)
				toast.error(err?.response?.data?.message)
				setIsLoading(false)
			})
	}

	return (
		<div className="h-screen w-screen flex flex-col items-center overflow-y-auto scrollbar-none">
			<div className="h-20 w-full bg-primary bg-opacity-15 flex items-center px-5">
				<Image src={"/logo2.png"} alt="logo" height={100} width={100} />
			</div>
			<p className="text-xl md:text-3xl text-primary font-extrabold w-[250px] sm:w-[450px] text-center my-10">
				Admin
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
			<button
				className="flex items-center justify-center bg-blue-300 h-12 w-[250px] sm:w-[450px] rounded mt-5 border-b-2 border-blue-400 text-white font-bold"
				onClick={handleSignIn}
			>
				{isLoading ? (
					<FallingLines
						color="#ffffff"
						width="50"
						visible={true}
						ariaLabel="falling-circles-loading"
					/>
				) : (
					"Sign in"
				)}
			</button>
		</div>
	)
}
