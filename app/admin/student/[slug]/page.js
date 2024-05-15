"use client"

import Image from "next/image"
import { AreaChart, Area, YAxis, XAxis, ResponsiveContainer } from "recharts"
import AdminLayout from "@/components/admin/layout/Layout"
import LanguageCard from "@/components/language-card/LanguageCard"

export default function Student({ params }) {
	const data = [
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
			percentage: 85,
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
		},
		{
			course: "Greek",
			percentage: 91,
			grade: "A+"
		},
		{
			course: "Japanese",
			percentage: 81,
			grade: "A"
		},
		{
			course: "Persian",
			percentage: 75,
			grade: "B"
		},
		{
			course: "Italian",
			percentage: 83,
			grade: "A"
		}
	]

	return (
		<AdminLayout>
			<div className="flex-1 w-full flex flex-col items-center gap-10 p-20">
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
							<p className="text-xl font-semibold">Jason Pink</p>
							<p className="font-light">jason@gmail.com</p>
							<p className="text-sm font-light">(111) 1234567</p>
						</div>
					</div>
					<div className="w-full h-fit border border-sky-200 rounded-xl shadow-xl p-10 flex flex-col gap-10">
						<p className="text-xl font-semibold">
							Enrolled Classes
						</p>
						<div className="flex flex-row flex-wrap gap-5 items-center">
							{data?.map((item, key) => {
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
				<div className="h-fit w-full rounded-xl border border-sky-200 shadow-xl p-10 flex flex-col gap-10">
					<p className="text-3xl">Progress</p>
					<div className="grid grid-cols-2 w-full gap-10">
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
							<div className="h-12 w-full grid grid-cols-3 place-items-center border-b">
								<p>Course</p>
								<p>Marks</p>
								<p>Grade</p>
							</div>
							<div className="flex-1 w-full overflow-y-auto scrollbar-none">
								<div className="h-fit w-full flex flex-col">
									{data?.map((item, key) => {
										return (
											<div
												className="h-12 w-full grid grid-cols-3 place-items-center text-sm text-primary"
												key={key}
											>
												<p>{item?.title}</p>
												<p>-</p>
												<p className="py-1 px-2 rounded-full text-xs bg-sky-300 text-white">
													In progress
												</p>
											</div>
										)
									})}
									{progress?.map((item, key) => {
										return (
											<div
												className="h-12 w-full grid grid-cols-3 place-items-center text-sm text-primary"
												key={key}
											>
												<p>{item?.course}</p>
												<p>{item?.percentage}%</p>
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
