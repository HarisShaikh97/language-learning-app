"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import axios from "axios"
import AdminLayout from "@/components/admin/layout/Layout"
import LanguageCard from "@/components/language-card/LanguageCard"

export default function Teacher({ params }) {
	const [data, setData] = useState()

	useEffect(() => {
		;(async () => {
			await axios
				.get(`/api/teacher?id=${params?.slug}`)
				?.then((res) => {
					console.log(res)
					setData(res?.data?.data)
				})
				?.catch((err) => {
					console.log(err)
				})
		})()
	}, [params])

	return (
		<AdminLayout>
			<div className="h-fit flex-1 flex flex-col gap-20 py-20 px-5 sm:px-10 md:px-20">
				<div className="w-full flex flex-row items-center justify-between">
					<p className="text-3xl">Teacher</p>
					<Link
						href={`/admin/update-teacher/${params?.slug}`}
						className="h-10 w-32 flex items-center justify-center rounded-lg bg-sky-300 border-b-2 hover:border-b-4 border-sky-500 text-white font-semibold transform-gpu ease-in-out duration-150"
					>
						Edit Teacher
					</Link>
				</div>
				<div className="h-fit flex-1 flex flex-col lg:flex-row gap-20">
					<div className="h-fit p-5 md:p-16 sm:p-10 border border-sky-200 rounded-xl shadow-xl flex flex-col items-center gap-5">
						<Image
							src={data?.image || "/profile.png"}
							alt="profile"
							height={150}
							width={150}
							className="rounded-full overflow-hidden"
						/>
						<div className="flex flex-col gap-2 items-center">
							<p className="text-xl font-semibold max-w-32 truncate">{`${
								data?.firstName || ""
							} ${data?.lastName || ""}`}</p>
							<p className="font-light truncate">{data?.email}</p>
							<p className="text-sm font-light truncate">
								{data?.phone}
							</p>
						</div>
					</div>
					<div className="w-full h-fit border border-sky-200 rounded-xl shadow-xl py-10 px-5 sm:px-10 flex flex-col gap-10">
						<p className="text-xl font-semibold">
							Assigned Classes
						</p>
						<div className="flex flex-row flex-wrap gap-5 items-center">
							{data?.classrooms?.map((item, key) => {
								return (
									<LanguageCard
										name={item?.name}
										students={item?.students}
										teacher={{
											firstName: data?.firstName,
											lastName: data?.lastName
										}}
										key={key}
									/>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</AdminLayout>
	)
}
