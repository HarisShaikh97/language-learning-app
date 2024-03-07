import { useState } from "react"
import { useRouter } from "next/navigation"
import PropTypes from "prop-types"

export default function LearningReasonCard({icon, text}) {

    const router = useRouter()

    const [isHovered, setIsHovered] = useState(false)

    return (
        <button 
            className={`h-20 w-[650px] rounded-xl border-2 ${isHovered ? "border-b-[8px]" : "border-b-[5px]"} border-gray-300 flex flex-row items-center gap-8 pl-5`} 
            style={{transition: "border-width 0.25s ease-in-out"}} 
            onMouseEnter={() => {setIsHovered(true)}} 
            onMouseLeave={() => {setIsHovered(false)}} 
            onClick={() => {router.push("/skill-level")}}
        >
            {icon}
            <p className="text-xl font-semibold">{text}</p>
        </button>
    )
}

LearningReasonCard.propTypes = {
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired
}