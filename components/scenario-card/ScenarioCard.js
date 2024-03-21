import Image from "next/image"
import { LockClosedIcon } from "@heroicons/react/24/solid"

export const ScenarioCard = ({ name, isPremium }) => {
	return (
		<div className={`h-32 min-w-44 relative rounded-xl border-b-4 border-amber-300 ${isPremium ? "bg-amber-100 hover:bg-amber-200" : "bg-gray-100 hover:bg-gray-200"} flex items-end p-3`}>
			<div className="absolute top-6 right-0 bg-amber-300 h-20 w-10 rounded-s-full"></div>
			{isPremium && <Image
				src={"/stars.svg"}
				alt="stars"
				height={50}
				width={50}
				className="absolute top-2 right-5"
			/>}
			{isPremium && (<div className="size-6 rounded-full bg-amber-400 flex items-center justify-center absolute top-3 left-3">
				<LockClosedIcon className="size-4 text-gray-50" />
			</div>)}
			<p className="max-w-[80%] text-sm text-wrap font-semibold">
				{name}
			</p>
		</div>
	)
}
