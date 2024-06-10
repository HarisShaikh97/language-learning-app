"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import AdminLayout from "@/components/admin/layout/Layout"

export default function Vocabulary({ params }) {
	const [data, setData] = useState()

	useEffect(() => {
		;(async () => {
			await axios
				.get(`/api/quiz?id=${params?.slug}`)
				?.then((res) => {
					console.log(res)
					setData(res?.data?.quiz)
				})
				?.catch((err) => {
					console.log(err)
				})
		})()
	}, [params])

	return (
		<AdminLayout>
			<div className="h-fit w-full py-10 px-5 xs:px-10 flex flex-col gap-10">
				<p className="text-2xl">Vocabulary</p>
				<div className="flex flex-row items-center gap-3">
					<p className="text-xl">Title:</p>
					<div className="px-3 py-1 border border-sky-300 rounded-lg shadow-lg">
						<p className="text-xl">{data?.title}</p>
					</div>
				</div>
				<p className="text-xl">Words:</p>
				<div className="ml-5 flex flex-col gap-3 p-5 rounded-lg border border-sky-300 shadow-lg w-fit">
					{data?.words?.map((item, key) => {
						return (
							<div
								className="flex flex-row items-center gap-10"
								key={key}
							>
								<p className="w-40 truncate">{item?.word}</p>
								<p>{item?.meaning}</p>
							</div>
						)
					})}
				</div>
				<p className="text-2xl">Quiz</p>
				<div className="flex flex-col sm:flex-row sm:items-center gap-3">
					<p className="text-xl">Question:</p>
					<div className="px-3 py-1 border border-sky-300 rounded-lg shadow-lg">
						<p className="text-xl">{data?.quizQuestion}</p>
					</div>
				</div>
				<p className="text-xl">Options:</p>
				<div className="flex flex-col gap-3">
					<div className="px-3 py-1 w-fit border border-sky-300 rounded-lg shadow-lg">
						<p className="text-xl">{data?.correctOption}</p>
					</div>
					{data?.falseOptions?.map((item, key) => {
						return (
							<div
								className="px-3 py-1 w-fit border border-gray-300 rounded-lg shadow-lg"
								key={key}
							>
								<p className="text-xl">{item}</p>
							</div>
						)
					})}
				</div>
			</div>
		</AdminLayout>
	)
}
