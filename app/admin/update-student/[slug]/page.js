"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { FallingLines } from "react-loader-spinner"
import toast from "react-hot-toast"
import AdminLayout from "@/components/admin/layout/Layout"

export default function UpdateStudent({ params }) {
	const router = useRouter()

	const [isLoading, setIsLoading] = useState(false)
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [phone, setPhone] = useState("")
	const [email, setEmail] = useState("")

	const handleSubmit = async (e) => {
		e.preventDefault()

		setIsLoading(true)

		const payload = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			phone: phone
		}

		await axios
			.put(`/api/students?id=${params?.slug}`, payload)
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

	useEffect(() => {
		;(async () => {
			await axios
				.get(`/api/students?id=${params?.slug}`)
				?.then((res) => {
					console.log(res)
					setFirstName(res?.data?.data?.firstName || "")
					setLastName(res?.data?.data?.lastName || "")
					setPhone(res?.data?.data?.phone || "")
					setEmail(res?.data?.data?.email || "")
				})
				?.catch((err) => {
					console.log(err)
				})
		})()
	}, [params])

	return (
		<AdminLayout>
			<div className="w-full flex-1 flex flex-col gap-10 py-10 px-5 xs:px-10">
				<p className="text-xl font-semibold">Edit Student</p>
				<div className="w-full flex flex-col gap-10">
					<div className="flex flex-col gap-10 md:flex-row items-center justify-between">
						<div className="flex flex-col gap-3 w-full">
							<p>First Name</p>
							<div className="h-12 w-full px-5 border border-gray-300 rounded-lg flex justify-center">
								<input
									type="text"
									placeholder="Enter First Name"
									className="w-full bg-transparent outline-none border-none"
									value={firstName}
									onChange={(e) => {
										setFirstName(e.target.value)
									}}
								/>
							</div>
						</div>
						<div className="flex flex-col gap-3 w-full">
							<p>Last Name</p>
							<div className="h-12 w-full px-5 border border-gray-300 rounded-lg flex justify-center">
								<input
									type="text"
									placeholder="Enter Last Name"
									className="w-full bg-transparent outline-none border-none"
									value={lastName}
									onChange={(e) => {
										setLastName(e.target.value)
									}}
								/>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-10 md:flex-row items-center justify-between">
						<div className="flex flex-col gap-3 w-full">
							<p>Phone Number</p>
							<div className="h-12 w-full px-5 border border-gray-300 rounded-lg flex justify-center">
								<input
									type="text"
									placeholder="Enter Phone Number"
									className="w-full bg-transparent outline-none border-none"
									value={phone}
									onChange={(e) => {
										setPhone(e.target.value)
									}}
								/>
							</div>
						</div>
						<div className="flex flex-col gap-3 w-full">
							<p>Email</p>
							<div className="h-12 w-full px-5 border border-gray-300 rounded-lg flex justify-center">
								<input
									type="text"
									placeholder="Enter Email Address"
									className="w-full bg-transparent outline-none border-none"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value)
									}}
								/>
							</div>
						</div>
					</div>
					<div className="h-36 sm:h-20 w-full flex flex-col sm:flex-row sm:items-center items-end sm:justify-end gap-5">
						<button
							className="h-12 w-40 flex items-center justify-center rounded-lg bg-sky-300 border-b-2 hover:border-b-4 border-sky-500 text-white font-semibold transform-gpu ease-in-out duration-150"
							onClick={handleSubmit}
						>
							{isLoading ? (
								<FallingLines
									color="#ffffff"
									width="50"
									visible={true}
									ariaLabel="falling-circles-loading"
								/>
							) : (
								"Save"
							)}
						</button>
						<button
							className="h-12 w-40 flex items-center justify-center rounded-lg border border-b-2 hover:border-b-4 text-primary font-semibold border-primary transform-gpu ease-in-out duration-150"
							onClick={() => {
								router?.back()
							}}
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</AdminLayout>
	)
}
