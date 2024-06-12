"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { FallingLines } from "react-loader-spinner"
import toast from "react-hot-toast"
import { MultiSelect } from "primereact/multiselect"
import { Dropdown } from "primereact/dropdown"
import AdminLayout from "@/components/admin/layout/Layout"
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"

export default function CreateClass() {
	const router = useRouter()

	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	const [teachers, setTeachers] = useState([])
	const [selectedTeacher, setSelectedTeacher] = useState()
	const [students, setStudents] = useState([])
	const [selectedStudents, setSelectedStudents] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		;(async () => {
			await axios
				.get("/api/teacher?role=teacher")
				?.then((res) => {
					console.log(res)
					setTeachers(
						res?.data?.data?.map((item) => {
							return {
								name: `${item?.firstName} ${item?.lastName}`,
								code: item?._id
							}
						})
					)
				})
				?.catch((err) => {
					console.log(err)
				})
			await axios
				.get("/api/students")
				?.then((res) => {
					console.log(res)
					setStudents(
						res?.data?.data?.map((item) => {
							return {
								label: `${item?.firstName} ${item?.lastName}`,
								value: item?._id
							}
						})
					)
				})
				?.catch((err) => {
					console.log(err)
				})
		})()
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault()

		setIsLoading(true)

		const payload = {
			name: name,
			description: description,
			teacher: selectedTeacher?.code,
			students: selectedStudents
		}

		axios
			.post("/api/classroom", payload)
			?.then((res) => {
				console.log(res)
				setIsLoading(false)
				toast.success(res?.data?.message)
				router.back()
			})
			?.catch((err) => {
				console.log(err)
				setIsLoading(false)
				toast.error(err?.response?.data?.error)
			})

		console.log(payload)
	}

	return (
		<AdminLayout>
			<div className="size-full py-10 px-5 xs:px-10 flex flex-col gap-10">
				<p className="text-2xl">Create New Class</p>
				<div className="w-full flex flex-col gap-10">
					<div className="flex flex-col md:flex-row items-center gap-5">
						<input
							type="text"
							placeholder="Enter Class Name"
							className="w-44 xs:w-60 h-12 border-b-2 border-sky-500 outline-none"
							value={name}
							onChange={(e) => {
								setName(e.target.value)
							}}
						/>
						<Dropdown
							value={selectedTeacher}
							onChange={(e) => setSelectedTeacher(e.value)}
							options={teachers}
							optionLabel="name"
							placeholder="Select Teacher"
							className="w-44 xs:w-60 h-12 border-b-2 border-sky-500 ring-0 rounded-none"
						/>
						<MultiSelect
							display="chip"
							value={selectedStudents}
							options={students}
							onChange={(e) => setSelectedStudents(e.value)}
							className="w-44 xs:w-60 md:w-80 h-12 border-b-2 border-sky-500 ring-0 rounded-none"
							placeholder="Select Students"
						/>
					</div>
					<div className="min-h-72 flex-1 bg-sky-100 border-b-2 border-sky-500 p-5">
						<textarea
							className="size-full bg-transparent border-none outline-none"
							placeholder="Write description..."
							value={description}
							onChange={(e) => {
								setDescription(e.target.value)
							}}
						/>
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
