import { useState } from "react"
import { useRouter } from "next/navigation"
import PropTypes from "prop-types"

export default function SkillLevelCard({icon, title, text}) {

    const router = useRouter()

    const [isHovered, setIsHovered] = useState(false)

    return (
        <div 
            className={`h-24 w-[650px] rounded-xl border-2 ${isHovered ? "border-b-[8px]" : "border-b-[5px]"} border-gray-300 flex flex-row gap-8 p-5`} 
            style={{transition: "border-width 0.25s ease-in-out"}} 
            onMouseEnter={() => {setIsHovered(true)}} 
            onMouseLeave={() => {setIsHovered(false)}} 
            onClick={() => {router.push("/signup")}}
        >
            {icon}
            <div className="flex flex-col">
                <p className="text-xl font-bold">{title}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

SkillLevelCard.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}