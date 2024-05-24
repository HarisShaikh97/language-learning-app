"use client"

import { useState } from "react"
import Layout from "@/components/layout/Layout"
import ScenarioPopup from "@/components/scenario-popup/ScenarioPopup"
import { ScenarioCard } from "@/components/scenario-card/ScenarioCard"

export default function LearningMode() {
	const [showPopup, setShowPopup] = useState(false)
	const [selectedScenario, setSelectedScenario] = useState()

	const data = [
		{
			id: "1",
			title: "Level 1",
			description: "Description of how to count in Arabic...",
			translations: [
				{
					english: "one",
					arabic: "واحد"
				},
				{
					english: "two",
					arabic: "اثنان"
				},
				{
					english: "three",
					arabic: "ثلاثة"
				}
			]
		},
		{
			id: "2",
			title: "Level 2",
			description:
				"Description of daily basic communication in Arabic...",
			translations: [
				{
					english: "hello",
					arabic: "مرحبا"
				},
				{
					english: "goodbye",
					arabic: "وداعا"
				},
				{
					english: "thank you",
					arabic: "شكرا لك"
				}
			]
		},
		{
			id: "3",
			title: "Level 3",
			description: "Description of how to count in Arabic...",
			translations: [
				{
					english: "one",
					arabic: "واحد"
				},
				{
					english: "two",
					arabic: "اثنان"
				},
				{
					english: "three",
					arabic: "ثلاثة"
				}
			]
		},
		{
			id: "4",
			title: "Level 4",
			description:
				"Description of daily basic communication in Arabic...",
			translations: [
				{
					english: "hello",
					arabic: "مرحبا"
				},
				{
					english: "goodbye",
					arabic: "وداعا"
				},
				{
					english: "thank you",
					arabic: "شكرا لك"
				}
			]
		},
		{
			id: "5",
			title: "Level 5",
			description: "Description of how to count in Arabic...",
			translations: [
				{
					english: "one",
					arabic: "واحد"
				},
				{
					english: "two",
					arabic: "اثنان"
				},
				{
					english: "three",
					arabic: "ثلاثة"
				}
			]
		},
		{
			id: "6",
			title: "Level 6",
			description:
				"Description of daily basic communication in Arabic...",
			translations: [
				{
					english: "hello",
					arabic: "مرحبا"
				},
				{
					english: "goodbye",
					arabic: "وداعا"
				},
				{
					english: "thank you",
					arabic: "شكرا لك"
				}
			]
		}
	]

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
							1
						</div>
					</div>
				</div>
				<div className="w-full overflow-x-auto scrollbar-none pl-5 pb-20">
					<div className="flex flex-col md:flex-row gap-5 sm:items-center w-fit">
						{data?.map((item, key) => (
							<ScenarioCard
								id={item?.id}
								name={item?.title}
								isPremium={item?.isPremium}
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
