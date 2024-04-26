import Image from "next/image"
import TeacherLayout from "@/components/teacher/layout/Layout"
import LanguageCard from "@/components/language-card/LanguageCard"

export default function Student({ params }) {
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
			<div className="h-full flex-1 flex flex-col lg:flex-row gap-20 p-20">
				<div className="h-fit p-5 md:p-16 sm:p-10 border border-sky-200 rounded-xl shadow-xl flex flex-col items-center gap-5">
					<Image
						src={"/profile.png"}
						alt="profile"
						height={150}
						width={150}
						className="rounded-full overflow-hidden"
					/>
					<div className="flex flex-col gap-2 items-center">
						<p className="text-xl font-semibold">Rana Anees</p>
						<p className="font-light">anees@gmail.com</p>
						<p className="text-sm font-light">+923351234567</p>
					</div>
				</div>
				<div className="w-full h-fit border border-sky-200 rounded-xl shadow-xl p-10 flex flex-col gap-10">
					<p className="text-xl font-semibold">Enrolled Classes</p>
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
			</div>
		</TeacherLayout>
	)
}
