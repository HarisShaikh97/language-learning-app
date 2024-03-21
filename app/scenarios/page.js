"use client"

import { useState } from "react"
import Image from "next/image"
import { CheckIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import Layout from "@/components/layout/Layout"
import DiscountBanner from "@/components/discount-banner/DiscountBanner"
import { ScenarioCard } from "@/components/scenario-card/ScenarioCard"

export default function Scenarios() {
	const [showFreeScenarios, setShowFreeScenarios] = useState(false)

	const data = [
		{
			name: "More letters",
			isPremium: true
		},
		{
			name: "Mastering the Abjad",
			isPremium: false
		},
		{
			name: "Additional Characters",
			isPremium: true
		},
		{
			name: "Short vowel marks",
			isPremium: true
		},
		{
			name: "Greetings",
			isPremium: false
		},
		{
			name: "Basic expressions",
			isPremium: true
		},
		{
			name: "Polite expressions",
			isPremium: false
		},
		{
			name: "How we feel",
			isPremium: true
		},
		{
			name: "Are you OK?",
			isPremium: true
		},
		{
			name: "Misunderstanding",
			isPremium: false
		},
		{
			name: "Basic needs",
			isPremium: true
		},
		{
			name: "Asking questions",
			isPremium: false
		},
		{
			name: "Are we friends",
			isPremium: true
		},
		{
			name: "What do you like?",
			isPremium: false
		}
	]

	return (
		<Layout>
			<div className="min-h-full flex-1 flex flex-col items-center">
				<DiscountBanner />
				<div className="flex-1 flex flex-col gap-5 h-full w-[95%] overflow-y-auto scrollbar-none">
					<div className="w-full flex flex-row items-center justify-between mt-10">
						<div className="h-10 w-80 rounded-lg bg-gray-100 grid grid-cols-2 p-1">
							<div className="h-full flex-1 flex items-center justify-center rounded-lg bg-white shadow font-semibold">
								Learn
							</div>
							<div className="h-full flex-1 flex items-center justify-center">
								Review
							</div>
						</div>
						<div className="flex flex-row items-center gap-7">
							<div className="flex flex-row items-center gap-2">
								<button
									className={`size-7 border-2 border-black rounded flex items-center justify-center ${
										showFreeScenarios && "bg-black"
									}`}
									onClick={() => {
										setShowFreeScenarios(!showFreeScenarios)
									}}
								>
									<CheckIcon className="size-5 text-white" />
								</button>
								<p>Show only free scenarios</p>
							</div>
							<div className="h-12 w-60 rounded-lg border flex flex-row gap-3 items-center px-3">
								<MagnifyingGlassIcon className="size-7 text-gray-500" />
								<input
									type="text"
									className="w-full outline-none"
								/>
							</div>
						</div>
					</div>
					<p className="text-2xl font-bold">Continue learning</p>
					<div className="h-28 w-96 rounded-lg bg-gray-100 border-b-4 border-slate-300 relative flex flex-col justify-between p-3">
						<div className="absolute top-6 right-0 bg-amber-300 h-16 w-8 rounded-s-full"></div>
						<p className="text-xs font-bold">Abjad</p>
						<div className="flex flex-row items-center justify-between w-[90%]">
							<p>Deciphering the letters</p>
							<button className="h-10 w-24 bg-amber-400 border-b-4 border-amber-500 rounded-xl font-semibold">
								Continue
							</button>
						</div>
						<div className="h-[5px] w-[90%] rounded-full bg-white">
							<div className="h-full w-[25%] rounded-full bg-primary" />
						</div>
					</div>
					<p className="text-2xl font-bold">Up next</p>
					<div className="w-full flex flex-col gap-5">
						<p className="font-bold">Recommended path</p>
						<div className="w-full overflow-x-auto scrollbar-track-black">
							<div className="flex flex-row gap-5 items-center mb-5">
								{data?.map((item, key) => (
									<ScenarioCard
										name={item?.name}
										isPremium={item?.isPremium}
										key={key}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
