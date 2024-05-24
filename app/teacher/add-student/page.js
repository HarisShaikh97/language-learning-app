"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { MultiSelect } from "primereact/multiselect"
import { CloudArrowUpIcon } from "@heroicons/react/24/solid"
import TeacherLayout from "@/components/teacher/layout/Layout"
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"

export default function AddStudent() {
	const router = useRouter()

	const [selectedClasses, setSelectedClasses] = useState([])
	const [image, setImage] = useState(null)

	const options = [
		{ label: "Arabic", value: "arabic" },
		{ label: "English", value: "english" },
		{ label: "Greek", value: "greek" }
	]

	const handleImageDrop = (e) => {
		e.preventDefault()
		const file = e.dataTransfer.files[0]
		if (file) {
			setImage(URL.createObjectURL(file))
		}
	}

	const handleImageDragOver = (e) => {
		e.preventDefault()
	}

	return (
		<TeacherLayout>
			<div className="w-full flex-1 flex flex-col gap-10 py-10 px-5 xs:px-10">
				<p className="text-xl font-semibold">Add New Student</p>
				<div className="w-full flex flex-col gap-10">
					<div className="flex flex-col gap-10 md:flex-row items-center justify-between">
						<div className="h-12 w-full px-5 border border-gray-300 rounded-lg flex justify-center">
							<input
								type="text"
								placeholder="Enter Full Name"
								className="w-full bg-transparent outline-none border-none"
							/>
						</div>
						<div className="h-12 w-full px-5 border border-gray-300 rounded-lg flex justify-center">
							<input
								type="text"
								placeholder="Enter Email Address"
								className="w-full bg-transparent outline-none border-none"
							/>
						</div>
						<div className="h-12 w-full px-5 border border-gray-300 rounded-lg flex justify-center">
							<input
								type="password"
								placeholder="Enter Password"
								className="w-full bg-transparent outline-none border-none"
							/>
						</div>
					</div>
					<div className="flex flex-col gap-10 md:flex-row items-center justify-between">
						<div className="h-12 w-full px-5 border border-gray-300 rounded-lg flex justify-center">
							<input
								type="text"
								placeholder="Enter Phone Number"
								className="w-full bg-transparent outline-none border-none"
							/>
						</div>
						<MultiSelect
							display="chip"
							value={selectedClasses}
							options={options}
							onChange={(e) => setSelectedClasses(e.value)}
							className="w-full border border-gray-300 outline-none rounded-lg"
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
						{image ? (
							<Image
								src={image}
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
							onClick={() => {
								router?.back()
							}}
						>
							Save
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
		</TeacherLayout>
	)
}
