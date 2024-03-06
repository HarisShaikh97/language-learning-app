import { useState } from "react"
import { useRouter } from "next/navigation"
import PropTypes from "prop-types"

export default function LanguageCard({name, image, flagImage}) {

    const [isHovered, setIsHovered] = useState(false)

    const router = useRouter()

    return (
        <button className={`h-64 w-48 rounded-xl border-2 ${isHovered ? "border-b-[8px]" : "border-b-[5px]"} border-gray-300 flex flex-col items-center gap-8 pt-2`} style={{transition: "border-width 0.25s ease-in-out"}} onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}} onClick={() => {router.push("/signup")}}>
            <div className="h-40 w-44 rounded-lg bg-cover bg-no-repeat bg-center relative" style={{backgroundImage: `url('${image}')`}}>
                <div className="h-12 w-12 rounded-full bg-cover bg-no-repeat bg-center absolute -bottom-6 left-16" style={{backgroundImage: `url('${flagImage}')`}}></div>
            </div>
            <p className="text-xl font-bold text-primary">{name}</p>
        </button>
    )
}

LanguageCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    flagImage: PropTypes.string.isRequired
}