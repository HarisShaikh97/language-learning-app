import { FilmIcon } from "@heroicons/react/24/solid"

export default function UpNextVideoCard() {
    return (
        <div className="absolute top-32 left-[15px] w-80 rounded-2xl bg-primary border-b-8 border-amber-400 flex flex-col gap-5 px-5 py-5">
			<div className="flex flex-row items-center justify-between">
				<p className="text-lg font-semibold text-white">
					Up next for you
				</p>
				<div className="h-10 w-10 bg-[#e46962] border-2 border-white rounded-full flex items-center justify-center">
                    <FilmIcon className="h-6 w-6 text-white" />
                </div>
			</div>
			<p className="text-white">Based on your progress, we found a video that matches your skill level</p>
			<button className="h-14 flex items-center justify-center bg-amber-400 hover:bg-amber-300 border-b-4 border-amber-500 rounded-2xl font-semibold">
				Watch video
			</button>
		</div>
    )
}