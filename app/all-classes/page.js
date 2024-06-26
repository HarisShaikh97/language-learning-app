"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import Layout from "@/components/layout/Layout"
import LanguageCard from "@/components/language-card/LanguageCard"

export default function AllClasses() {
	const [classes, setClasses] = useState([])

	useEffect(() => {
		;(async () => {
			await axios
				.get("/api/classroom")
				?.then((res) => {
					console.log(res)
					setClasses(res?.data?.Data)
				})
				?.catch((err) => {
					console.log(err)
				})
		})()
	}, [])

	return (
		<Layout>
			<div className="flex-1 min-h-full flex flex-col gap-5 p-10">
				<p className="text-2xl font-bold mt-10">
					Select to add a Course
				</p>
				<div className="flex flex-row flex-wrap gap-5">
					{classes?.map((item, key) => {
						return (
							<LanguageCard
								id={item?._id}
								name={item?.name}
								students={item?.students}
								key={key}
							/>
						)
					})}
				</div>
			</div>
		</Layout>
	)
}
