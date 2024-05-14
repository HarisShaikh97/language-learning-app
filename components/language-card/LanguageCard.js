"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { FolderIcon } from "@heroicons/react/24/solid"
import PropTypes from "prop-types"

export default function LanguageCard({ id, name, image, href }) {
	const [isHovered, setIsHovered] = useState(false)

	const router = useRouter()

	const handleSelect = () => {
		// localStorage.setItem("course_id", id)
		if (href) {
			router.push(href)
		}
	}

	return (
		<button
			className={`h-52 w-64 border ${
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
			<div className="h-28 w-full bg-sky-200 relative flex flex-col items-start gap-5 p-5">
				<p className="text-xl font-bold text-primary">{name}</p>
				<p className="font-semibold text-primary">Teacher name</p>
				<div
					className="size-20 rounded-full bg-cover bg-no-repeat bg-center absolute -bottom-6 right-5"
					style={{ backgroundImage: `url('${image}')` }}
				/>
			</div>
			<div className="w-full flex justify-end px-8">
				<FolderIcon className="size-6 text-gray-500" />
			</div>
		</button>
	)
}

LanguageCard.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	href: PropTypes.string
}
