import { LanguageIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import PropTypes from "prop-types"

export default function UpNextWordsCard({ className }) {
	return (
		<div
			className={`absolute ${className} w-56 sm:w-80 rounded-lg bg-primary shadow-xl flex flex-col gap-5 px-5 py-5`}
		>
			<div className="flex flex-row items-center justify-between">
				<p className="text-lg font-semibold text-white">
					Up next for you
				</p>
				<div className="h-10 w-10 bg-[#00a778] border-2 border-white rounded-full flex items-center justify-center">
					<LanguageIcon className="h-6 w-6 text-white" />
				</div>
			</div>
			<p className="text-white">Learn new words</p>
			<div className="h-20 flex rounded-xl bg-gray-100 hover:bg-gray-200 p-3 relative">
				<p className="font-semibold text-sm">Deciphering the Letters</p>
				<div className="h-[5px] w-[90%] rounded-full bg-white absolute bottom-2">
					<div className="h-full w-[25%] rounded-full bg-primary" />
				</div>
			</div>
			<Link
				className="h-10 flex items-center justify-center bg-blue-400 hover:bg-blue-300 text-white rounded-xl font-semibold"
				href="/scenarios"
			>
				Continue
			</Link>
		</div>
	)
}

UpNextWordsCard.propTypes = {
	className: PropTypes.string.isRequired
}
