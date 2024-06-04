"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import axios from "axios"
import { AreaChart, Area, YAxis, XAxis, ResponsiveContainer } from "recharts"
import AdminLayout from "@/components/admin/layout/Layout"
import LanguageCard from "@/components/language-card/LanguageCard"

export default function Student({ params }) {
	const [data, setData] = useState()

	const classes = [
		{
			id: 1,
			title: "Arabic",
			image: "/bg-image-arabic.jpg",
			flagImage: "/arabic-flag.png"
		},
		{
			id: 2,
			title: "English",
			image: "/bg-image-english.jpg",
			flagImage: "/english-flag.png"
		},
		{
			id: 3,
			title: "Greek",
			image: "/bg-image-greek.jpg",
			flagImage: "/greek-flag.png"
		}
	]

	const progress = [
		{
			course: "English",
			percentage: 55,
			grade: "A"
		},
		{
			course: "Arabic",
			percentage: 87,
			grade: "A"
		},
		{
			course: "French",
			percentage: 65,
			grade: "C"
		}
	]

	useEffect(() => {
		;(async () => {
			await axios
				.get(`/api/students?id=${params?.slug}`)
				?.then((res) => {
					console.log(res)
					setData(res?.data?.data)
				})
				?.catch((err) => {
					console.log(err)
				})
		})()
	}, [params])

	console.log(data)

	return (
		<AdminLayout>
			<div className="flex-1 w-full flex flex-col items-center gap-10 py-20 px-5 sm:px-10 md:px-20">
				<div className="w-full flex-1 flex flex-col lg:flex-row gap-20">
					<div className="h-fit p-5 md:p-16 sm:p-10 border border-sky-200 rounded-xl shadow-xl flex flex-col items-center gap-5">
						<Image
							src={"/profile.png"}
							alt="profile"
							height={150}
							width={150}
							className="rounded-full overflow-hidden"
						/>
						<div className="flex flex-col gap-2 items-center">
							<p className="text-xl font-semibold">{`${data?.firstName} ${data?.lastName}`}</p>
							<p className="font-light">{data?.email}</p>
							<p className="text-sm font-light">{data?.phone}</p>
						</div>
					</div>
					<div className="w-full h-fit border border-sky-200 rounded-xl shadow-xl py-10 px-5 sm:px-10 flex flex-col gap-10">
						<p className="text-xl font-semibold">
							Enrolled Classes
						</p>
						<div className="flex flex-row flex-wrap gap-5 items-center">
							{classes?.map((item, key) => {
								return (
									<LanguageCard
										id={item?.id}
										name={item?.title}
										flagImage={item?.flagImage}
										image={item?.image}
										key={key}
									/>
								)
							})}
						</div>
					</div>
				</div>
				<div className="h-fit w-full rounded-xl border border-sky-200 shadow-xl py-10 px-5 md:px-10 flex flex-col gap-10">
					<div className="w-full flex flex-row items-center justify-between">
						<p className="text-3xl">Progress</p>
						<div className="flex flex-row items-center gap-3">
							<p>Level</p>
							<div className="size-6 rounded-full bg-sky-300 text-white text-sm flex items-center justify-center">
								<p>3</p>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 computer:grid-cols-2 w-full gap-10">
						<div className="h-96 w-full">
							<ResponsiveContainer width="100%" height="100%">
								<AreaChart
									width={500}
									height={300}
									data={progress}
								>
									<YAxis unit={"%"} />
									<XAxis dataKey="course" />
									<Area
										type="bump"
										dataKey="percentage"
										fill="#7D9CDB"
										stroke="#7D9CDB"
									/>
								</AreaChart>
							</ResponsiveContainer>
						</div>
						<div className="h-96 w-full flex flex-col border border-gray-300 rounded-xl shadow-lg">
							<div className="h-12 w-full grid grid-cols-2 xs:grid-cols-3 place-items-center border-b">
								<p>Course</p>
								<p className="hidden xs:flex">Marks</p>
								<p>Grade</p>
							</div>
							<div className="flex-1 w-full overflow-y-auto scrollbar-none">
								<div className="h-fit w-full flex flex-col">
									{classes?.map((item, key) => {
										return (
											<div
												className="h-12 w-full grid grid-cols-2 xs:grid-cols-3 place-items-center text-sm text-primary"
												key={key}
											>
												<p>{item?.title}</p>
												<p className="hidden xs:flex">
													-
												</p>
												<p className="py-1 px-2 rounded-full text-xs bg-sky-300 text-white">
													In progress
												</p>
											</div>
										)
									})}
									{progress?.map((item, key) => {
										return (
											<div
												className="h-12 w-full grid grid-cols-2 xs:grid-cols-3 place-items-center text-sm text-primary"
												key={key}
											>
												<p>{item?.course}</p>
												<p className="hidden xs:flex">
													{item?.percentage}%
												</p>
												<div
													className={`size-6 flex items-center justify-center text-xs text-white rounded ${
														item?.percentage >= 90
															? "bg-blue-300"
															: item?.percentage >=
															  80
															? "bg-green-300"
															: item?.percentage >=
															  70
															? "bg-yellow-300"
															: "bg-red-300"
													}`}
												>
													<p>{item?.grade}</p>
												</div>
											</div>
										)
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AdminLayout>
	)
}
