"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { MultiSelect } from "primereact/multiselect"
import TeacherLayout from "@/components/teacher/layout/Layout"
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"

export default function AddStudent() {

    const router = useRouter()

    const [selectedClasses, setSelectedClasses] = useState([])

	const options = [
		{ label: "Arabic", value: "arabic" },
		{ label: "English", value: "english" },
		{ label: "Greek", value: "greek" }
	]

	return (
		<TeacherLayout>
			<div className="w-full flex-1 flex flex-col gap-10 p-10">
				<p className="text-xl font-semibold">Add New Student</p>
				<div className="w-full flex flex-col gap-10">
					<div className="flex flex-row items-center justify-between">
						<div className="h-12 w-[48.5%] px-5 border border-gray-300 rounded-lg flex justify-center">
							<input
								type="text"
								placeholder="Enter Full Name"
								className="w-full bg-transparent outline-none border-none"
							/>
						</div>
						<div className="h-12 w-[48.5%] px-5 border border-gray-300 rounded-lg flex justify-center">
							<input
								type="text"
								placeholder="Enter Email Address"
								className="w-full bg-transparent outline-none border-none"
							/>
						</div>
					</div>
					<div className="flex flex-row items-center justify-between">
						<div className="h-12 w-[48.5%] px-5 border border-gray-300 rounded-lg flex justify-center">
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
							className="w-[48.5%] border border-gray-300 outline-none rounded-lg"
							placeholder="Select Classes"
						/>
					</div>
					<div className="h-20 w-full flex flex-row items-center justify-end gap-5">
						<button className="h-12 w-40 flex items-center justify-center rounded-lg bg-sky-300 border-b-2 hover:border-b-4 border-sky-500 text-white font-semibold transform-gpu ease-in-out duration-150" onClick={() => {router?.back()}}>
							Save
						</button>
						<button className="h-12 w-40 flex items-center justify-center rounded-lg border border-b-2 hover:border-b-4 text-primary font-semibold border-primary transform-gpu ease-in-out duration-150" onClick={() => {router?.back()}}>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</TeacherLayout>
	)
}
