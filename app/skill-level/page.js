"use client"

import Link from "next/link"
import Image from "next/image"
import { ShieldCheckIcon } from "@heroicons/react/24/solid"
import SkillLevelCard from "@/components/skill-level-card/SkillLevelCard"
import CircleIcon from "@/components/circle-icon/CircleIcon"

export default function SkillLevel() {

    const answers = [
        {
            icon: <ShieldCheckIcon className="h-8 w-8 text-teal-500" />,
            title: "Learn from scratch",
            text: "I have zero knowledge"
        },
        {
            icon: <CircleIcon text="1" />,
            title: "Beginner",
            text: "I've done some learning, but can't actually speak much"
        },
        {
            icon: <CircleIcon text="2" />,
            title: "Elementary",
            text: "I can only have a basic conversation on limited topics"
        },
        {
            icon: <CircleIcon text="3" />,
            title: "Intermediate",
            text: "I have a good understanding but looking to get better"
        }
    ]

    return (
        <div className="h-screen w-screen flex flex-col items-center">
            <div className="h-20 w-full bg-primary bg-opacity-15 flex flex-row justify-between items-center pl-5 pr-10">
                <Image src={"/logo2.png"} alt="logo" height={100} width={100} />
                <Link href={"/login"} className=" h-12 w-28 rounded-2xl border-b-4 border-amber-500 bg-amber-400 font-bold flex items-center justify-center">Sign in</Link>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-10">
                <Image src={"/flag.png"} alt="logo" height={80} width={80} />
                <p className="text-5xl font-bold">What is your current skill level?</p>
                <p className="text-xl text-gray-500 font-bold">So Memrize can plan your lessons</p>
                <div className="flex flex-col gap-5">
                    {answers?.map((item, key) => {
                        return (
                            <SkillLevelCard icon={item?.icon} title={item?.title} text={item?.text} key={key} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}