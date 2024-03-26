import Image from "next/image"
import { LockClosedIcon } from "@heroicons/react/24/solid"

export const ScenarioCard = ({ id, name, isPremium, setSelectedScenario, setShowPopup }) => {
	return (
		<button 
			className={`h-32 w-44 relative rounded-xl border-b-4 border-blue-300 ${isPremium ? "bg-blue-100 hover:bg-blue-200" : "bg-gray-100 hover:bg-gray-200"} flex items-end p-3`}
			onClick={() => {
				setSelectedScenario(id)
				setShowPopup(true)
			}}
		>
			<div className="absolute top-6 right-0 bg-blue-300 h-20 w-10 rounded-s-full"></div>
			{isPremium && <Image
				src={"/stars.svg"}
				alt="stars"
				height={50}
				width={50}
				className="absolute top-2 right-5"
			/>}
			{isPremium && (<div className="size-6 rounded-full bg-blue-400 flex items-center justify-center absolute top-3 left-3">
				<LockClosedIcon className="size-4 text-gray-50" />
			</div>)}
			<p className="max-w-[80%] text-left text-sm text-wrap font-semibold">
				{name}
			</p>
		</button>
	)
}
