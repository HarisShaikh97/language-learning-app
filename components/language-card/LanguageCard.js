"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import PropTypes from "prop-types"

export default function LanguageCard({id, name, image, flagImage, href}) {

    const [isHovered, setIsHovered] = useState(false)

    const router = useRouter()

    const handleSelect = () => {
        // localStorage.setItem("course_id", id)
        router.push(href)
    }

    return (
        <button 
            className={`h-64 w-48 rounded-xl border-2 ${isHovered ? "border-b-[8px]" : "border-b-[5px]"} bg-no-repeat bg-center bg-cover border-gray-300 flex items-end justify-center p-5 gap-8 pt-2`} 
            style={{transition: "border-width 0.25s ease-in-out", backgroundImage: `url('${image}')`}} 
            onMouseEnter={() => {setIsHovered(true)}} 
            onMouseLeave={() => {setIsHovered(false)}} 
            onClick={handleSelect}
        >
            <p className="text-xl font-bold text-black">{name}</p>
        </button>
    )
}

LanguageCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    flagImage: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
}