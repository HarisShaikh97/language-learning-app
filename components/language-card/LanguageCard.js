"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { FolderIcon } from "@heroicons/react/24/solid"
import PropTypes from "prop-types"

export default function LanguageCard({ name, students, image, href }) {
	const [isHovered, setIsHovered] = useState(false)

	const router = useRouter()

	const handleSelect = () => {
		if (href) {
			router.push(href)
		}
	}

	return (
		<button
			className={`h-48 xs:h-52 w-52 xs:w-64 border ${
				isHovered ? "border-b-[5px]" : "border-b-[3px]"
			} border-gray-300 flex flex-col gap-12`}
			style={{ transition: "border-width 0.25s ease-in-out" }}
			onMouseEnter={() => {
				setIsHovered(true)
			}}
			onMouseLeave={() => {
				setIsHovered(false)
			}}
			onClick={handleSelect}
		>
			<div className="h-24 xs:h-28 w-full bg-sky-200 relative flex flex-col items-start gap-5 p-3 xs:p-5">
				<p className="text-xl font-bold text-primary">{name}</p>
				<p className="font-semibold text-primary">Ms. Alex</p>
				<div
					className="size-20 rounded-full bg-cover bg-no-repeat bg-center absolute -bottom-6 right-5"
					style={{ backgroundImage: `url('${image}')` }}
				/>
			</div>
			<div className="w-full flex flex-row items-center justify-between px-3 xs:px-5">
				<p className="text-primary text-sm">
					Students: {students?.length}
				</p>
				<FolderIcon className="size-6 text-gray-500" />
			</div>
		</button>
	)
}

LanguageCard.propTypes = {
	name: PropTypes.string.isRequired,
	students: PropTypes.array.isRequired,
	image: PropTypes.string,
	href: PropTypes.string
}
