"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import TeacherLayout from "@/components/teacher/layout/Layout"
import LanguageCard from "@/components/language-card/LanguageCard"

export default function AllClasses() {
	const [data, setData] = useState([])

	useEffect(() => {
		;(async () => {
			await axios
				.get("/api/classroom")
				?.then((res) => {
					console.log(res)
					setData(res?.data?.Data)
				})
				?.catch((err) => {
					console.log(err)
				})
		})()
	}, [])

	return (
		<TeacherLayout>
			<div className="size-full py-16 px-5 xs:px-10 lg:px-16 flex flex-col gap-10">
				<p className="text-3xl">All Classes</p>
				<div className="flex flex-row flex-wrap gap-5 items-center">
					{data?.map((item, key) => {
						return (
							<LanguageCard
								id={item?._id}
								name={item?.name}
								students={item?.students}
								teacher={item?.teacher}
								href={`/teacher/class/${item?._id}`}
								key={key}
							/>
						)
					})}
				</div>
			</div>
		</TeacherLayout>
	)
}
