"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import axios from "axios"
import { FallingLines } from "react-loader-spinner"
import toast from "react-hot-toast"
import { MultiSelect } from "primereact/multiselect"
import { CloudArrowUpIcon } from "@heroicons/react/24/solid"
import AdminLayout from "@/components/admin/layout/Layout"
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"

export default function AddStudent() {
	const router = useRouter()

	const [isLoading, setIsLoading] = useState(false)
	const [allClasses, setAllClasses] = useState([])
	const [selectedClasses, setSelectedClasses] = useState([])
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [phone, setPhone] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [imageURL, setImageURL] = useState(null)
	const [image, setImage] = useState(null)

	const handleImageDrop = (e) => {
		e.preventDefault()
		const file = e.dataTransfer.files[0]
		if (file) {
			setImageURL(URL.createObjectURL(file))
			setImage(file)
		}
	}

	const handleImageDragOver = (e) => {
		e.preventDefault()
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsLoading(true)
		if (!image) {
			setIsLoading(false)
			toast.error("Image is required!")
			return
		}

		const formData = new FormData()
		formData.append("firstName", firstName)
		formData.append("lastName", lastName)
		formData.append("phone", phone)
		formData.append("email", email)
		formData.append("password", password)
		formData.append("image", image)
		formData.append("role", "student")
		formData.append("class", JSON.stringify(selectedClasses))

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

	useEffect(() => {
		;(async () => {
			await axios
				.get("/api/classroom")
				?.then((res) => {
					console.log(res)
					setAllClasses(res?.data?.Data)
				})
				?.catch((err) => {
					console.log(err)
				})
		})()
	}, [])

	return (
		<AdminLayout>
			<div className="w-full flex-1 flex flex-col gap-10 py-10 px-5 xs:px-10">
				<p className="text-xl font-semibold">Add New Student</p>
				<div className="w-full flex flex-col gap-10">
					<div className="flex flex-col gap-10 md:flex-row items-center justify-between">
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
					<div className="flex flex-col gap-10 md:flex-row items-center justify-between">
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
						<div className="h-12 w-full px-5 border border-gray-300 rounded-lg flex justify-center">
							<input
								type="password"
								placeholder="Enter Password"
								className="w-full bg-transparent outline-none border-none"
								value={password}
								onChange={(e) => {
									setPassword(e.target.value)
								}}
							/>
						</div>
						<MultiSelect
							display="chip"
							value={selectedClasses}
							options={allClasses?.map((item) => {
								return { label: item?.name, value: item?._id }
							})}
							onChange={(e) => setSelectedClasses(e.value)}
							className="min-w-96 border border-gray-300 rounded-lg ring-0"
							placeholder="Select Classes"
						/>
					</div>
					<div
						className="h-80 w-full border border-gray-300 p-5 rounded-lg flex flex-col justify-between items-center"
						onDrop={handleImageDrop}
						onDragOver={handleImageDragOver}
					>
						<div className="w-full text-gray-400">
							Drag and Drop Profile Picture
						</div>
						{imageURL ? (
							<Image
								src={imageURL}
								alt="uploaded"
								height={100}
								width={100}
							/>
						) : (
							<CloudArrowUpIcon className="size-20 text-sky-500" />
						)}
						<div />
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
