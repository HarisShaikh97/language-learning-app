"use client"

import {
	BoltIcon,
	CheckCircleIcon,
	SpeakerWaveIcon
} from "@heroicons/react/24/outline"
import { useRouter } from "next/navigation"

export default function Word({ params }) {
	const router = useRouter()

	console.log(params?.slug)

	return (
		<div className="flex-1 flex flex-col items-center gap-10">
			<div className="w-full h-16 bg-sky-300 flex flex-row items-center justify-between px-10">
				<p className="text-2xl font-extrabold font-sans underline truncate">
					Arabic - Short vowel marks
				</p>
			</div>
			<div className="flex flex-col gap-5 w-[90%] sm:w-[75%]">
				<div className="h-5 w-full bg-gray-100 rounded" />
				<div className="w-full flex flex-col sm:flex-row gap-5">
					<div className="flex-1 flex flex-col gap-5">
						<p>Arabic</p>
						<div className="w-full flex justify-end">
							<p className="text-xl font-extrabold">واحد</p>
						</div>
						<p>English</p>
						<p className="text-2xl font-semibold">one</p>
						<div className="h-[2px] w-full bg-gray-200" />
						<div className="h-16 w-32 rounded bg-gray-100 flex flex-row items-center justify-evenly">
							<SpeakerWaveIcon className="size-10 text-black" />
							<SpeakerWaveIcon className="size-10 text-black" />
						</div>
					</div>
					<div className="size-10 bg-gray-100 rounded-full hidden sm:flex items-center justify-center">
						<BoltIcon className="size-7 text-gray-500" />
					</div>
					<div className="flex flex-col gap-5">
						<button
							className="h-12 w-60 rounded bg-sky-200 border-b-4 border-sky-300 text-white text-lg font-semibold"
							onClick={() => {
								router.push("/my-courses")
							}}
						>
							Continue
						</button>
						<button className="h-12 w-60 rounded flex flex-row gap-5 items-center justify-center border border-black">
							<CheckCircleIcon className="size-8 text-black" />
							<p className="text-lg font-semibold">
								I already know this
							</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
