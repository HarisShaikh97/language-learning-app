import Link from "next/link"

export const VocabularyCard = ({ id, name }) => {
	return (
		<Link
			href={`/admin/vocabulary/${id}`}
			className="h-32 w-52 shadow-xl border-b-2 border-blue-300 bg-gray-100 hover:bg-sky-200 flex p-3"
		>
			<p className="max-w-[80%] text-left text-sm text-wrap font-semibold">
				{name}
			</p>
		</Link>
	)
}
