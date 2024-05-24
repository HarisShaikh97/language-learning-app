import { FireIcon, UserCircleIcon } from "@heroicons/react/16/solid"

export default function Header() {
	return (
		<div className="flex flex-row h-20 items-center justify-between px-5 sm:px-10 bg-sky-100">
			<div />
			<div className="flex flex-row gap-5 items-center">
				<p className="text-lg font-semibold hidden sm:flex">Help</p>
				<div className="flex-row items-center gap-1 hidden sm:flex">
					<FireIcon className="h-5 w-5 text-gray-500" />
					<p className="text-gray-500 font-semibold">0</p>
				</div>
				<div className="relative">
					<button>
						<UserCircleIcon className="h-10 w-10 text-black hover:text-primary" />
					</button>
				</div>
			</div>
		</div>
	)
}
