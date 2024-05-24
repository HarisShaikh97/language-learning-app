import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid"
import PropTypes from "prop-types"

export default function UpNextConversationCard({ className }) {
	return (
		<div
			className={`absolute ${className} w-56 sm:w-80 bg-primary rounded-3xl flex flex-col gap-5 px-5 py-5 shadow-xl`}
		>
			<div className="flex flex-row items-center justify-between">
				<p className="text-lg font-semibold text-white">
					Up next for you
				</p>
				<div className="h-10 w-10 bg-[#009fbb] border-2 border-white rounded-full flex items-center justify-center">
					<ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-white" />
				</div>
			</div>
			<div className="h-20 flex items-center px-5 rounded-lg bg-slate-500 bg-opacity-35">
				<p className="font-bold text-slate-300">
					No recommended conversations right now
				</p>
			</div>
			<div className="h-12 flex items-center justify-center text-white bg-blue-400 hover:bg-blue-300 rounded-lg font-semibold">
				More conversations
			</div>
		</div>
	)
}

UpNextConversationCard.propTypes = {
	className: PropTypes.string.isRequired
}
