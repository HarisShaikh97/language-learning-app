import { LanguageIcon } from "@heroicons/react/24/solid"
import Link from "next/link"


export default function UpNextWordsCard() {

	return (
		<div className="absolute top-32 left-[15px] w-80 rounded-2xl bg-primary border-b-8 border-amber-400 flex flex-col gap-5 px-5 py-5">
			<div className="flex flex-row items-center justify-between">
				<p className="text-lg font-semibold text-white">
					Up next for you
				</p>
				<div className="h-10 w-10 bg-[#00a778] border-2 border-white rounded-full flex items-center justify-center">
					<LanguageIcon className="h-6 w-6 text-white" />
				</div>
			</div>
			<p className="text-white">Learn new words</p>
			<div className="h-32 flex rounded-2xl bg-gray-100 hover:bg-gray-200 border-b-4 border-gray-300 relative p-3">
				<div className="absolute top-3 right-0 bg-amber-300 h-24 w-12 rounded-s-full"></div>
				<p className="font-semibold text-sm">
					Deciphering the Letters
				</p>
				<div className="h-[5px] w-[90%] rounded-full bg-white absolute bottom-2">
					<div className="h-full w-[25%] rounded-full bg-primary" />
				</div>
			</div>
			<Link className="h-14 flex items-center justify-center bg-amber-400 hover:bg-amber-300 border-b-4 border-amber-500 rounded-2xl font-semibold" href="/scenarios">
				Continue
			</Link>
		</div>

	)
}