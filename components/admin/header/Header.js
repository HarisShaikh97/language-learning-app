import { FireIcon, UserCircleIcon } from "@heroicons/react/16/solid"

export default function Header() {
	return (
		<div className="flex flex-row h-20 items-center justify-between px-5 sm:px-10 bg-sky-100">
			<p className="text-xl font-semibold">Admin</p>
			<div className="relative">
				<button>
					<UserCircleIcon className="h-10 w-10 text-black hover:text-primary" />
				</button>
			</div>
		</div>
	)
}
