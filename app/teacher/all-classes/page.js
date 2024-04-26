import TeacherLayout from "@/components/teacher/layout/Layout"
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
		<TeacherLayout>
			<div className="size-full p-16 flex flex-col gap-10">
				<p className="text-3xl">All Classes</p>
				<div className="flex flex-row flex-wrap gap-5 items-center">
					{data?.map((item, key) => {
						return (
							<LanguageCard
								id={item?.id}
								name={item?.title}
								flagImage={item?.flagImage}
								image={item?.image}
								href={`/teacher/class/${item?.id}`}
								key={key}
							/>
						)
					})}
				</div>
			</div>
		</TeacherLayout>
	)
}
