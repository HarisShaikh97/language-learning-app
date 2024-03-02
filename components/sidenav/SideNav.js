"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { RectangleStackIcon, PresentationChartLineIcon, FilmIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/16/solid"

export default function SideNav() {

    const pathname = usePathname()

    return (
        <div className="h-full w-60 border-r flex flex-col gap-20 pt-10">
            <Image src={"/next.svg"} alt="logo" height={75} width={75} className="pl-5" />
            
            
            <div className="flex-1 flex flex-col">
                {pathname === "/home" ? (
                    <div className="flex flex-row items-center justify-between h-16 bg-gray-100 pl-5">
                        <div className="flex flex-row gap-5 items-center">
                            <RectangleStackIcon className="h-8 w-8 text-gray-500" />
                            <p className="text-lg text-gray-500 font-semibold">Home</p>
                        </div>
                        <div className="h-full w-2 bg-yellow-500 rounded-s-full" />
                    </div>
                ) : (
                    <Link href={"/home"} className="flex flex-row gap-5 items-center h-16 pl-5">
                        <RectangleStackIcon className="h-8 w-8 text-gray-500" />
                        <p className="text-lg text-gray-500 font-semibold">Home</p>
                    </Link>
                )}
                {pathname === "/scenarios" ? (
                    <div className="flex flex-row items-center justify-between h-16 bg-gray-100 pl-5">
                        <div className="flex flex-row gap-5 items-center">
                            <PresentationChartLineIcon className="h-8 w-8 text-gray-500" />
                            <p className="text-lg text-gray-500 font-semibold">Scenarios</p>
                        </div>
                        <div className="h-full w-2 bg-yellow-500 rounded-s-full" />
                    </div>
                ) : (
                    <Link href={"/scenarios"} className="flex flex-row gap-5 items-center h-16 pl-5">
                        <PresentationChartLineIcon className="h-8 w-8 text-gray-500" />
                        <p className="text-lg text-gray-500 font-semibold">Scenarios</p>
                    </Link>
                )}
                {pathname === "/videos" ? (
                    <div className="flex flex-row items-center justify-between h-16 bg-gray-100 pl-5">
                        <div className="flex flex-row gap-5 items-center">
                            <FilmIcon className="h-8 w-8 text-gray-500" />
                            <p className="text-lg text-gray-500 font-semibold">Videos</p>
                        </div>
                        <div className="h-full w-2 bg-yellow-500 rounded-s-full" />
                    </div>
                ) : (
                    <Link href={"/videos"} className="flex flex-row gap-5 items-center h-16 pl-5">
                        <FilmIcon className="h-8 w-8 text-gray-500" />
                        <p className="text-lg text-gray-500 font-semibold">Videos</p>
                    </Link>
                )}
                {pathname === "/conversations" ? (
                    <div className="flex flex-row items-center justify-between h-16 bg-gray-100 pl-5">
                        <div className="flex flex-row gap-5 items-center">
                            <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8 text-gray-500" />
                            <p className="text-lg text-gray-500 font-semibold">Conversations</p>
                        </div>
                        <div className="h-full w-2 bg-yellow-500 rounded-s-full" />
                    </div>
                ) : (
                    <Link href={"/conversations"} className="flex flex-row gap-5 items-center h-16 pl-5">
                        <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8 text-gray-500" />
                        <p className="text-lg text-gray-500 font-semibold">Conversations</p>
                    </Link>
                )}
            </div>
        </div>
    )
}