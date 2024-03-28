"use client"

import { useState } from "react"
import Layout from "@/components/layout/Layout"
// import DiscountBanner from "@/components/discount-banner/DiscountBanner"
import WeeklyProgressCard from "@/components/weekly-progress-card/WeeklyProgressCard"
import WeeklyProgressCardGrid from "@/components/weekly-progress-card-grid/WeeklyProgreeCardGrid"

export default function Home() {
	const [selectedTab, setSelectedTab] = useState("green")
	return (
		<Layout>
			<div className="min-h-full flex-1 flex flex-col items-center">
				{/* <DiscountBanner /> */}
				<div
					className="h-full w-full flex-1 flex flex-col items-center bg-cover bg-center"
					style={{
						backgroundImage:
							selectedTab === "green"
								? "url('/bg-image-green.svg')"
								: selectedTab === "red"
								? "url('/bg-image-red.svg')"
								: "url('/bg-image-blue.svg')"
					}}
				>
					<div className="w-[95%] flex flex-row items-center justify-between py-5">
						<p className="text-3xl font-semibold">
							Weekly progress
						</p>
						<p className="font-bold text-gray-400">
							Feb 26 - March 09
						</p>
					</div>
					<WeeklyProgressCard
						selectedTab={selectedTab}
						setSelectedTab={setSelectedTab}
					/>
					<WeeklyProgressCardGrid
						selectedTab={selectedTab}
						setSelectedTab={setSelectedTab}
					/>
				</div>
			</div>
		</Layout>
	)
}
