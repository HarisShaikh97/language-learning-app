"use client"

import { useRouter } from "next/navigation"
import AdminLayout from "@/components/admin/layout/Layout"

export default function CreateClass() {
	const router = useRouter()

	return (
		<AdminLayout>
			<div className="size-full py-10 px-5 xs:px-10 flex flex-col gap-10">
				<p className="text-2xl">Create New Class</p>
				<div className="w-full flex flex-col gap-10">
					<input
						type="text"
						placeholder="Enter Class Name"
						className="w-44 xs:w-60 h-12 border-b-2 border-sky-500 outline-none"
					/>
					<div className="min-h-72 flex-1 bg-sky-100 border-b-2 border-sky-500 p-5">
						<textarea
							className="size-full bg-transparent border-none outline-none"
							placeholder="Write description..."
						/>
					</div>
					<div className="h-36 sm:h-20 w-full flex flex-col sm:flex-row sm:items-center items-end sm:justify-end gap-5">
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
			</div>
		</AdminLayout>
	)
}
