"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"
import AdminLayout from "@/components/admin/layout/Layout"
import { VocabularyCard } from "@/components/vocabulary-card/VocabularyCard"

export default function LearningMode() {
	const [data, setData] = useState([])

	useEffect(() => {
		;(async () => {
			await axios
				.get("/api/quiz")
				?.then((res) => {
					console.log(res)
					setData(res?.data?.quiz)
				})
				?.catch((err) => {
					console.log(err)
				})
		})()
	}, [])

	return (
		<AdminLayout>
			<div className="size-full py-20 px-5 sm:px-10 flex flex-col gap-10">
				<div className="flex flex-col gap-5 md:gap-0 md:flex-row md:items-center md:justify-between w-full">
					<p className="text-3xl">Vocabularies</p>
					<Link
						href={"/admin/add-vocabulary"}
						className="h-10 w-44 flex items-center justify-center rounded-lg bg-sky-300 border-b-2 hover:border-b-4 border-sky-500 text-white font-semibold transform-gpu ease-in-out duration-150"
					>
						Add new vocabulary
					</Link>
				</div>
				<div className="flex flex-row flex-wrap gap-5">
					{data?.map((item, key) => {
						return (
							<VocabularyCard
								id={item?._id}
								name={item?.title}
								key={key}
							/>
						)
					})}
				</div>
			</div>
		</AdminLayout>
	)
}
