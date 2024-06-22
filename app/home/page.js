"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import axios from "axios"
import Layout from "@/components/layout/Layout"
import WeeklyProgressCard from "@/components/weekly-progress-card/WeeklyProgressCard"
import WeeklyProgressCardGrid from "@/components/weekly-progress-card-grid/WeeklyProgreeCardGrid"
import LanguageCard from "@/components/language-card/LanguageCard"
import ScenarioPopup from "@/components/scenario-popup/ScenarioPopup"
import coursesData from "@/utils/Data"

export default function Home() {
	const { data } = useSession()

	const [user, setUser] = useState()
	const [selectedTab, setSelectedTab] = useState("green")
	const [showCards, setShowCards] = useState(false)
	const [showPopup, setShowPopup] = useState(false)
	const [selectedScenario, setSelectedScenario] = useState()

	useEffect(() => {
		;(async () => {
			setShowCards(true)
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
			<div className="min-h-full flex-1 flex flex-col items-center relative">
				{showPopup && (
					<ScenarioPopup
						id={selectedScenario}
						setShowPopup={setShowPopup}
					/>
				)}
				<div
					className="h-full w-full flex-1 flex flex-col gap-5 items-center bg-cover bg-center"
					style={{
						backgroundImage: "url('/bg-image-blue.svg')"
					}}
				>
					<div className="w-[95%] flex flex-row items-center justify-between py-5">
						<p className="text-xl sm:text-3xl font-semibold">
							Weekly progress
						</p>
						<p className="font-bold text-gray-400 hidden sm:flex">
							Feb 26 - March 09
						</p>
					</div>
					{showCards && (
						<WeeklyProgressCard
							selectedTab={selectedTab}
							setSelectedTab={setSelectedTab}
						/>
					)}
					{showCards && (
						<WeeklyProgressCardGrid
							selectedTab={selectedTab}
							setSelectedTab={setSelectedTab}
						/>
					)}
					<div className="w-full flex flex-col gap-5 pl-10 mb-10">
						<p className="font-bold">Recommended by Teacher</p>
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
				</div>
			</div>
		</Layout>
	)
}
