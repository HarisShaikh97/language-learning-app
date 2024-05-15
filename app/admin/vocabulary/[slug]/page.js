import AdminLayout from "@/components/admin/layout/Layout"

export default function Vocabulary({ params }) {
	return (
		<AdminLayout>
			<div className="h-fit w-full p-10 flex flex-col gap-10">
				<p className="text-2xl">Vocabulary</p>
				<div className="flex flex-row items-center gap-3">
					<p className="text-xl">Title:</p>
					<div className="px-3 py-1 border border-sky-300 rounded-lg shadow-lg">
						<p className="text-xl">Level 1</p>
					</div>
				</div>
				<p className="text-xl">Words:</p>
				<div className="ml-5 flex flex-col gap-3 p-5 rounded-lg border border-sky-300 shadow-lg w-fit">
					<div className="flex flex-row items-center gap-10">
						<p>one</p>
						<p>واحد</p>
					</div>
					<div className="flex flex-row items-center gap-10">
						<p>two</p>
						<p>اثنان</p>
					</div>
					<div className="flex flex-row items-center gap-10">
						<p>three</p>
						<p>ثلاثة</p>
					</div>
				</div>
				<p className="text-2xl">Quiz</p>
				<div className="flex flex-row items-center gap-3">
					<p className="text-xl">Question:</p>
					<div className="px-3 py-1 border border-sky-300 rounded-lg shadow-lg">
						<p className="text-xl">
							Select the correct translation for (one).
						</p>
					</div>
				</div>
				<p className="text-xl">Options:</p>
				<div className="flex flex-col gap-3">
					<div className="pl-3 py-1 w-40 border border-sky-300 rounded-lg shadow-lg">
						<p className="text-xl">واحد</p>
					</div>
					<div className="pl-3 py-1 w-40 border border-gray-300 rounded-lg shadow-lg">
						<p className="text-xl">اثنان</p>
					</div>
					<div className="pl-3 py-1 w-40 border border-gray-300 rounded-lg shadow-lg">
						<p className="text-xl">ثلاثة</p>
					</div>
					<div className="pl-3 py-1 w-40 border border-gray-300 rounded-lg shadow-lg">
						<p className="text-xl">-</p>
					</div>
				</div>
			</div>
		</AdminLayout>
	)
}
