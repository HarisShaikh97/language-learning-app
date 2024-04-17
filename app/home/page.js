"use client"

import { useState, useEffect } from "react"
import Layout from "@/components/layout/Layout"
// import DiscountBanner from "@/components/discount-banner/DiscountBanner"
import WeeklyProgressCard from "@/components/weekly-progress-card/WeeklyProgressCard"
import WeeklyProgressCardGrid from "@/components/weekly-progress-card-grid/WeeklyProgreeCardGrid"
import LanguageCard from "@/components/language-card/LanguageCard"
import ScenarioPopup from "@/components/scenario-popup/ScenarioPopup"
import coursesData from "@/utils/Data"

export default function Home() {
	const [selectedTab, setSelectedTab] = useState("green")
	const [showCards, setShowCards] = useState(false)
	const [showPopup, setShowPopup] = useState(false)
	const [selectedScenario, setSelectedScenario] = useState()

	useEffect(() => {
		setShowCards(true)
	}, [])
	return (
		<Layout>
			<div className="min-h-full flex-1 flex flex-col items-center relative">
				{/* <DiscountBanner /> */}
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
						<div className="flex flex-row items-center gap-5 w-full">
							{/* {isLeftButtonVisible && (
                                <button onClick={scrollToLeft}>
                                    <ChevronLeftIcon className="size-5 text-black" />
                                </button>
                            )} */}
							<div className="w-full overflow-x-auto scrollbar-none">
								<div className="flex flex-col sm:flex-row gap-5 sm:items-center">
									{coursesData?.map((item, key) => {
										return (
											<LanguageCard
												id={1}
												name={item?.title}
												flagImage={item?.flagImage}
												image={item?.image}
												href="/my-courses"
												key={key}
											/>
										)
									})}
								</div>
							</div>
							{/* {isRightButtonVisible && (
                                <button onClick={scrollToRight}>
                                    <ChevronRightIcon className="size-5 text-black" />
                                </button>
                            )} */}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
