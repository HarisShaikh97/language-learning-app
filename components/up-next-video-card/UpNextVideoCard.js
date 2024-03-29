import { FilmIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { useRouter } from "next/navigation"
export default function UpNextVideoCard() {
    const route  = useRouter()
	return (
        <div className="absolute top-32 left-[15px] w-80 rounded-2xl bg-primary border-b-8 border-blue-400 flex flex-col gap-5 px-5 py-5">
			<div className="flex flex-row items-center justify-between">
				<p className="text-lg font-semibold text-white">
					Up next for you
				</p>
				<div className="h-10 w-10 bg-[#e46962] border-2 border-white rounded-full flex items-center justify-center">
                    <FilmIcon className="h-6 w-6 text-white" />
                </div>
			</div>
			<p className="text-white">Based on your progress, we found a video that matches your skill level</p>
			<Link className="h-14 flex items-center justify-center bg-blue-400 hover:bg-blue-300 border-b-4 border-blue-500 rounded-2xl font-semibold" href="/videos">
			Watch video
			</Link>
			
		</div>
    )
}