import Link from "next/link"
import AdminLayout from "@/components/admin/layout/Layout"
import { VocabularyCard } from "@/components/vocabulary-card/VocabularyCard"

export default function LearningMode() {
	const data = [
		{
			id: 1,
			title: "Level 1"
		},
		{
			id: 2,
			title: "Level 2"
		},
		{
			id: 3,
			title: "Level 3"
		},
		{
			id: 4,
			title: "Level 4"
		},
		{
			id: 5,
			title: "Level 5"
		}
	]

	return (
		<AdminLayout>
			<div className="size-full py-20 px-10 flex flex-col gap-10">
				<div className="flex flex-row items-center justify-between w-full">
					<p className="text-3xl">Vocabularies</p>
					<Link
						href={"/admin/add-vocabulary"}
						className="p-3 rounded-lg bg-sky-300 border-b-2 hover:border-b-4 border-sky-500 text-white font-semibold transform-gpu ease-in-out duration-150"
					>
						Add new vocabulary
					</Link>
				</div>
				<div className="flex flex-row flex-wrap gap-5">
					{data?.map((item, key) => {
						return (
							<VocabularyCard
								id={item?.id}
								name={item?.title}
								key={key}
							/>
						)
					})}
				</div>
			</div>
		</AdminLayout>
	)
}
