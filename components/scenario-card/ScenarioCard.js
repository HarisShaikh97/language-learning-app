import Image from "next/image"
import { LockClosedIcon } from "@heroicons/react/24/solid"

export const ScenarioCard = ({ id, name, isPremium, setSelectedScenario, setShowPopup }) => {
	return (
		<button 
			className={`h-24 w-44 rounded-lg border-b-2 border-blue-300 ${isPremium ? "bg-blue-100 hover:bg-blue-200" : "bg-gray-100 hover:bg-sky-200"} flex p-3`}
			onClick={() => {
				setSelectedScenario(id)
				setShowPopup(true)
			}}
		>
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
