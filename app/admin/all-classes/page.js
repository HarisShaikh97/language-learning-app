"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import axios from "axios"
import AdminLayout from "@/components/admin/layout/Layout"
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
		<AdminLayout>
			<div className="size-full py-16 px-5 xs:px-10 lg:px-16 flex flex-col gap-10">
				<div className="flex flex-col gap-5 sm:gap-0 sm:flex-row sm:items-center sm:justify-between w-full">
					<p className="text-3xl">All Classes</p>
					<Link
						href={"/admin/create-class"}
						className="h-10 w-32 flex items-center justify-center rounded-lg bg-sky-300 border-b-2 hover:border-b-4 border-sky-500 text-white font-semibold transform-gpu ease-in-out duration-150"
					>
						Create Class
					</Link>
				</div>
				<div className="flex flex-row flex-wrap gap-5 items-center">
					{data?.map((item, key) => {
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
		</AdminLayout>
	)
}
