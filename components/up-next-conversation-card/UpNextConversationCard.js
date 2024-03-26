import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid"

export default function UpNextConversationCard() {
    return (
        <div className="absolute top-32 left-[15px] w-80 rounded-2xl bg-primary border-b-8 border-blue-400 flex flex-col gap-5 px-5 py-5">
			<div className="flex flex-row items-center justify-between">
				<p className="text-lg font-semibold text-white">
					Up next for you
				</p>
				<div className="h-10 w-10 bg-[#009fbb] border-2 border-white rounded-full flex items-center justify-center">
                    <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-white" />
                </div>
			</div>
			<div className="h-20 flex items-center px-5 rounded-2xl bg-slate-500 bg-opacity-35">
				<p className="font-bold text-slate-300">
					No recommended conversations right now
				</p>
			</div>
			<button className="h-12 flex items-center justify-center bg-blue-400 hover:bg-blue-300 border-b-4 border-blue-500 rounded-2xl font-semibold">
				More conversations
			</button>
		</div>
    )
}