"use client"

import Image  from "next/image"
import Link from "next/link"
import { DocumentTextIcon, UsersIcon, HeartIcon, GlobeEuropeAfricaIcon, LightBulbIcon, BookOpenIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid"
import LearningReasonCard from "@/components/learning-reason-card/LearningReasonCard"

export default function LearningReason() {

    const answers = [
        {
            icon: <HeartIcon className="h-8 w-8 text-purple-500" />,
            text: "To connect with my partner's family"
        },
        {
            icon: <GlobeEuropeAfricaIcon className="h-8 w-8 text-purple-500" />,
            text: "To have a better time while traveling"
        },
        {
            icon: <UsersIcon className="h-8 w-8 text-purple-500" />,
            text: "Connect with colleagues at work or in my community"
        },
        {
            icon: <LightBulbIcon className="h-8 w-8 text-purple-500" />,
            text: "To sharpen my mind"
        },
        {
            icon: <BookOpenIcon className="h-8 w-8 text-purple-500" />,
            text: "To prepare for an exam"
        },
        {
            icon: <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8 text-purple-500" />,
            text: "To better understand different cultures"
        }
    ]

    return (
        <div className="h-screen w-screen flex flex-col items-center">
            <div className="h-20 w-full bg-primary bg-opacity-15 flex flex-row justify-between items-center pl-5 pr-10">
                <Image src={"/logo2.png"} alt="logo" height={100} width={100} />
                <Link href={"/"} className=" h-12 w-28 rounded-2xl border-b-4 border-amber-500 bg-amber-400 font-bold flex items-center justify-center">Sign in</Link>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-10">
                <DocumentTextIcon className="h-20 w-20 text-purple-500" />
                <p className="text-5xl font-bold">Why are you learning a language?</p>
                <p className="text-xl text-gray-500 font-bold">You can choose more later</p>
                <div className="grid grid-cols-2 gap-5">
                    {answers?.map((item, key) => {
                        return (
                            <LearningReasonCard icon={item?.icon} text={item?.text} key={key} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}