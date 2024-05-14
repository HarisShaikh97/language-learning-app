"use client"

import { useRouter } from "next/navigation"
import AdminLayout from "@/components/admin/layout/Layout"

export default function AddVocabulary() {
	const router = useRouter()

	return (
		<AdminLayout>
			<div className="h-fit w-full p-10 flex flex-col gap-10">
				<div className="flex flex-row items-center justify-between w-full">
					<p className="text-2xl">Add New Vocabulary</p>
					<div className="flex flex-row items-center gap-5">
						<button
							className="h-12 w-40 flex items-center justify-center rounded-lg bg-sky-300 border-b-2 hover:border-b-4 border-sky-500 text-white font-semibold transform-gpu ease-in-out duration-150"
							onClick={() => {
								router?.back()
							}}
						>
							Save
						</button>
						<button
							className="h-12 w-40 flex items-center justify-center rounded-lg border border-b-2 hover:border-b-4 text-primary font-semibold border-primary transform-gpu ease-in-out duration-150"
							onClick={() => {
								router?.back()
							}}
						>
							Cancel
						</button>
					</div>
				</div>
				<div className="h-12 w-80 px-5 border-b border-gray-300 flex justify-center">
					<input
						type="text"
						placeholder="Title"
						className="w-full bg-transparent outline-none border-none"
					/>
				</div>
				<div className="flex flex-row items-center gap-10 w-full max-w-[750px]">
					<div className="h-12 w-full px-5 border border-gray-300 rounded-lg flex justify-center">
						<input
							type="text"
							placeholder="Enter First Word"
							className="w-full bg-transparent outline-none border-none"
						/>
					</div>
					<div className="h-12 w-full px-5 border border-gray-300 rounded-lg flex justify-center">
						<input
							type="text"
							placeholder="Enter Meaning"
							className="w-full bg-transparent outline-none border-none"
						/>
					</div>
				</div>
				<div className="flex flex-row items-center gap-10 w-full max-w-[750px]">
					<div className="h-12 w-full px-5 border border-gray-300 rounded-lg flex justify-center">
						<input
							type="text"
							placeholder="Enter Second Word"
							className="w-full bg-transparent outline-none border-none"
						/>
					</div>
					<div className="h-12 w-full px-5 border border-gray-300 rounded-lg flex justify-center">
						<input
							type="text"
							placeholder="Enter Meaning"
							className="w-full bg-transparent outline-none border-none"
						/>
					</div>
				</div>
				<div className="flex flex-row items-center gap-10 w-full max-w-[750px]">
					<div className="h-12 w-full px-5 border border-gray-300 rounded-lg flex justify-center">
						<input
							type="text"
							placeholder="Enter Third Word"
							className="w-full bg-transparent outline-none border-none"
						/>
					</div>
					<div className="h-12 w-full px-5 border border-gray-300 rounded-lg flex justify-center">
						<input
							type="text"
							placeholder="Enter Meaning"
							className="w-full bg-transparent outline-none border-none"
						/>
					</div>
				</div>
				<div className="h-12 w-96 px-5 border-b border-gray-300 flex justify-center">
					<input
						type="text"
						placeholder="Enter Quiz Question"
						className="w-full bg-transparent outline-none border-none"
					/>
				</div>
				<div className="h-12 w-80 px-5 border border-gray-300 rounded-lg flex justify-center">
					<input
						type="text"
						placeholder="Enter Correct Option"
						className="w-full bg-transparent outline-none border-none"
					/>
				</div>
				<div className="h-12 w-80 px-5 border border-gray-300 rounded-lg flex justify-center">
					<input
						type="text"
						placeholder="Enter First False Option"
						className="w-full bg-transparent outline-none border-none"
					/>
				</div>
				<div className="h-12 w-80 px-5 border border-gray-300 rounded-lg flex justify-center">
					<input
						type="text"
						placeholder="Enter Second False Option"
						className="w-full bg-transparent outline-none border-none"
					/>
				</div>
				<div className="h-12 w-80 px-5 border border-gray-300 rounded-lg flex justify-center">
					<input
						type="text"
						placeholder="Enter Third False Option"
						className="w-full bg-transparent outline-none border-none"
					/>
				</div>
			</div>
		</AdminLayout>
	)
}
