"use client"

import { useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { RectangleStackIcon, PresentationChartLineIcon, FilmIcon, ChatBubbleOvalLeftEllipsisIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid"

export default function SideNav() {

    const pathname = usePathname()

    const [collapsed, setCollapsed] = useState(false)

    return (
        <div className={`h-full ${collapsed ? "w-24" : "w-60"} border-r flex flex-col gap-20 pt-10 relative`}>
            <button className="h-7 w-7 rounded-full border-2 border-primary absolute -right-[14px] bottom-[150px] bg-white flex items-center justify-center" onClick={() => {setCollapsed(!collapsed)}}>
                {collapsed ? <ChevronRightIcon className="h-5 w-5 text-primary" /> : <ChevronLeftIcon className="h-5 w-5 text-primary" />}
            </button>
            <Image src={"/logo2.png"} alt="logo" height={150} width={150} className="pl-5" />
            <div className="flex-1 flex flex-col">
                {pathname === "/home" ? (
                    <div className="flex flex-row items-center justify-between h-16 bg-gray-100">
                        <div className="flex flex-row gap-5 items-center pl-5">
                            <RectangleStackIcon className="h-7 w-7 text-primary" />
                            {!collapsed && <p className="text-lg text-primary font-semibold">Home</p>}
                        </div>
                        <div className="h-full w-2 bg-amber-400 rounded-s-full" />
                    </div>
                ) : (
                    <Link href={"/home"} className="flex flex-row gap-5 items-center h-16 pl-5 hover:bg-gray-50">
                        <RectangleStackIcon className="h-7 w-7 text-primary" />
                        {!collapsed && <p className="text-lg text-primary font-semibold">Home</p>}
                    </Link>
                )}
                {pathname === "/scenarios" ? (
                    <div className="flex flex-row items-center justify-between h-16 bg-gray-100">
                        <div className="flex flex-row gap-5 items-center pl-5">
                            <PresentationChartLineIcon className="h-7 w-7 text-primary" />
                            {!collapsed && <p className="text-lg text-primary font-semibold">Scenarios</p>}
                        </div>
                        <div className="h-full w-2 bg-amber-400 rounded-s-full" />
                    </div>
                ) : (
                    <Link href={"/scenarios"} className="flex flex-row gap-5 items-center h-16 pl-5 hover:bg-gray-50">
                        <PresentationChartLineIcon className="h-7 w-7 text-primary" />
                        {!collapsed && <p className="text-lg text-primary font-semibold">Scenarios</p>}
                    </Link>
                )}
                {pathname === "/videos" ? (
                    <div className="flex flex-row items-center justify-between h-16 bg-gray-100">
                        <div className="flex flex-row gap-5 items-center pl-5">
                            <FilmIcon className="h-7 w-7 text-primary" />
                            {!collapsed && <p className="text-lg text-primary font-semibold">Videos</p>}
                        </div>
                        <div className="h-full w-2 bg-amber-400 rounded-s-full" />
                    </div>
                ) : (
                    <Link href={"/videos"} className="flex flex-row gap-5 items-center h-16 pl-5 hover:bg-gray-50">
                        <FilmIcon className="h-7 w-7 text-primary" />
                        {!collapsed && <p className="text-lg text-primary font-semibold">Videos</p>}
                    </Link>
                )}
                {pathname === "/conversations" ? (
                    <div className="flex flex-row items-center justify-between h-16 bg-gray-100">
                        <div className="flex flex-row gap-5 items-center pl-5">
                            <ChatBubbleOvalLeftEllipsisIcon className="h-7 w-7 text-primary" />
                            {!collapsed && <p className="text-lg text-primary font-semibold">Conversations</p>}
                        </div>
                        <div className="h-full w-2 bg-amber-400 rounded-s-full" />
                    </div>
                ) : (
                    <Link href={"/conversations"} className="flex flex-row gap-5 items-center h-16 pl-5 hover:bg-gray-50">
                        <ChatBubbleOvalLeftEllipsisIcon className="h-7 w-7 text-primary" />
                        {!collapsed && <p className="text-lg text-primary font-semibold">Conversations</p>}
                    </Link>
                )}
            </div>
        </div>
    )
}