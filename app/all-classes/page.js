"use client"

import Layout from "@/components/layout/Layout"
import LanguageCard from "@/components/language-card/LanguageCard"
import coursesData from "@/utils/Data"

export default function AllClasses() {
	return (
		<Layout>
			<div className="flex-1 min-h-full flex flex-col gap-5 p-10">
				<p className="text-2xl font-bold mt-10">
					Select to add a Course
				</p>
				<div className="w-full md:w-fit grid grid-flow-row md:grid-flow-col gap-5">
					{coursesData?.map((item, key) => {
						return (
							<LanguageCard
								name={item?.title}
								href="/my-courses"
								key={key}
							/>
						)
					})}
				</div>
			</div>
		</Layout>
	)
}
