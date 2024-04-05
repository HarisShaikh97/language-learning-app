import { FilmIcon } from "@heroicons/react/24/solid"
import PropTypes from "prop-types"

export default function UpNextVideoCard({ className }) {
	return (
		<div
			className={`absolute ${className} w-56 sm:w-80 shadow-xl bg-primary flex flex-col gap-5 px-5 py-5`}
		>
			<div className="flex flex-row items-center justify-between">
				<p className="text-lg font-semibold text-white">
					Up next for you
				</p>
				<div className="h-10 w-10 bg-[#e46962] border-2 border-white rounded-full flex items-center justify-center">
					<FilmIcon className="h-6 w-6 text-white" />
				</div>
			</div>
			<p className="text-white">
				Based on your progress, we found a video that matches your skill
				level
			</p>
			<div className="h-10 flex items-center justify-center bg-blue-400 hover:bg-blue-300 text-white rounded font-semibold">
				Watch video
			</div>
		</div>
	)
}

UpNextVideoCard.propTypes = {
	className: PropTypes.string.isRequired
}
