"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { FallingLines } from "react-loader-spinner"
import toast from "react-hot-toast"
import { MultiSelect } from "primereact/multiselect"
import TeacherLayout from "@/components/teacher/layout/Layout"
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"

export default function SuggestClass() {
	const router = useRouter()

	const [isLoading, setIsLoading] = useState(false)
	const [students, setStudents] = useState([])
	const [classes, setClasses] = useState([])
	const [selectedClasses, setSelectedClasses] = useState([])
	const [selectedStudents, setSelectedStudents] = useState([])

	useEffect(() => {
		;(async () => {
			await axios
				.get("/api/classroom")
				?.then((res) => {
					console.log(res)
					setClasses(
						res?.data?.Data?.map((item) => {
							return { label: item?.name, value: item?._id }
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

	const handleSubmit = async () => {
		setIsLoading(true)

		const payload = {
			students: selectedStudents,
			classes: selectedClasses
		}

		await axios
			.post("/api/recommend", payload)
			?.then((res) => {
				console.log(res)
				setIsLoading(false)
				toast.success(res?.data?.message)
				router.back()
			})
			?.catch((err) => {
				console.log(err)
				setIsLoading(false)
				toast.error("Error!")
			})
	}

	return (
		<TeacherLayout>
			<div className="size-full py-10 px-5 sm:px-10 flex flex-col gap-20 items-center">
				<p className="text-3xl font-semibold">
					Suggest Classes to Students
				</p>
				<div className="w-full lg:pr-10 computer:pr-20 flex flex-col sm:flex-row gap-5 items-end sm:items-center sm:justify-end">
					<button
						className="flex items-center justify-center h-12 w-40 rounded-lg border border-b-2 hover:border-b-4 text-primary font-semibold border-primary text-xl transform-gpu ease-in-out duration-150"
						onClick={() => {
							router.back()
						}}
					>
						Cancel
					</button>
					<button
						className="flex items-center justify-center h-12 w-40 rounded-lg bg-sky-300 border-b-2 hover:border-b-4 border-sky-500 text-white text-xl font-semibold transform-gpu ease-in-out duration-150"
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
				</div>
				<div className="flex flex-col gap-10 lg:gap-0 lg:flex-row items-center lg:justify-evenly w-full">
					<div className="flex flex-col gap-5">
						<p className="text-xl font-semibold">All Classes</p>
						<MultiSelect
							display="chip"
							value={selectedClasses}
							options={classes}
							onChange={(e) => setSelectedClasses(e.value)}
							className="w-[250px] sm:w-[350px] computer:w-[500px] border border-gray-300 outline-none rounded-lg"
							placeholder="Select Classes"
						/>
					</div>
					<div className="flex flex-col gap-5">
						<p className="text-xl font-semibold">All Students</p>
						<MultiSelect
							display="chip"
							value={selectedStudents}
							options={students}
							onChange={(e) => setSelectedStudents(e.value)}
							className="w-[250px] sm:w-[350px] computer:w-[500px] border border-gray-300 outline-none rounded-lg"
							placeholder="Select Students"
						/>
					</div>
				</div>
			</div>
		</TeacherLayout>
	)
}
