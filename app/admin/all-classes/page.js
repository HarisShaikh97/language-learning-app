import Link from "next/link"
import AdminLayout from "@/components/admin/layout/Layout"
import LanguageCard from "@/components/language-card/LanguageCard"

export default function AllClasses() {
	const data = [
		{
			id: 1,
			title: "Arabic Class",
			image: "/bg-image-arabic.jpg",
			flagImage: "/arabic-flag.png"
		},
		{
			id: 2,
			title: "English Class",
			image: "/bg-image-english.jpg",
			flagImage: "/english-flag.png"
		},
		{
			id: 1,
			id: 3,
			title: "Greek Class",
			image: "/bg-image-greek.jpg",
			flagImage: "/greek-flag.png"
		}
	]

	return (
		<AdminLayout>
			<div className="size-full p-16 flex flex-col gap-10">
				<div className="flex flex-row items-center justify-between w-full">
					<p className="text-3xl">All Classes</p>
					<Link
						href={"/admin/create-class"}
						className="p-3 rounded-lg bg-sky-300 border-b-2 hover:border-b-4 border-sky-500 text-white font-semibold transform-gpu ease-in-out duration-150"
					>
						Create Class
					</Link>
				</div>
				<div className="flex flex-row flex-wrap gap-5 items-center">
					{data?.map((item, key) => {
						return (
							<LanguageCard
								id={item?.id}
								name={item?.title}
								flagImage={item?.flagImage}
								image={item?.image}
								key={key}
							/>
						)
					})}
				</div>
			</div>
		</AdminLayout>
	)
}
