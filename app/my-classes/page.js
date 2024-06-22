"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import axios from "axios"
import Layout from "@/components/layout/Layout"
import LanguageCard from "@/components/language-card/LanguageCard"

export default function MyClasses() {
	const { data } = useSession()

	const [user, setUser] = useState()

	useEffect(() => {
		;(async () => {
			if (data?.user?.id) {
				await axios
					.get(`/api/students?id=${data?.user?.id}`)
					?.then((res) => {
						console.log(res)
						setUser(res?.data?.data)
					})
					?.catch((err) => {
						console.log(err)
					})
			}
		})()
	}, [data])

	return (
		<Layout>
			<div className="flex-1 min-h-full flex flex-col gap-5 p-10">
				<p className="text-2xl font-bold mt-10">Your Courses</p>
				<div className="flex flex-row flex-wrap gap-5">
					{user?.recommendClass?.map((item, key) => {
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
