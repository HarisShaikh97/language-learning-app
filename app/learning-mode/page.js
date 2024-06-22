"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import axios from "axios"
import Layout from "@/components/layout/Layout"
import ScenarioPopup from "@/components/scenario-popup/ScenarioPopup"
import { ScenarioCard } from "@/components/scenario-card/ScenarioCard"

export default function LearningMode() {
	const { data } = useSession()

	const [user, setUser] = useState()
	const [quizes, setQuizes] = useState()
	const [showPopup, setShowPopup] = useState(false)
	const [selectedScenario, setSelectedScenario] = useState()

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
			await axios
				.get("/api/quiz")
				?.then((res) => {
					console.log(res)
					setQuizes(res?.data?.quiz)
				})
				?.catch((err) => {
					console.log(err)
				})
		})()
	}, [data])

	return (
		<Layout>
			<div className="min-h-full flex-1 flex flex-col gap-10 relative p-10">
				{showPopup && (
					<ScenarioPopup
						id={selectedScenario}
						setShowPopup={setShowPopup}
					/>
				)}
				<div className="flex flex-row items-center justify-between w-full">
					<p className="text-xl font-bold">Vocabularies</p>
					<div className="flex flex-row items-center gap-1">
						<p className="text-primary text-lg font-semibold">
							Level
						</p>
						<div className="size-7 flex items-center justify-center rounded-full bg-primary text-white">
							{user?.level}
						</div>
					</div>
				</div>
				<div className="w-full overflow-x-auto scrollbar-none pl-5 pb-20">
					<div className="flex flex-row flex-wrap gap-5">
						{quizes?.map((item, key) => (
							<ScenarioCard
								id={item?._id}
								name={item?.title}
								setSelectedScenario={setSelectedScenario}
								setShowPopup={setShowPopup}
								key={key}
							/>
						))}
					</div>
				</div>
			</div>
		</Layout>
	)
}
