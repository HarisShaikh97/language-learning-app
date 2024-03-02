"use client"

import { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid"
import SideNav from "../sidenav/SideNav"

export default function Layout({ children }) {
    
    const [showDropDown, setShowDropDown] = useState(false)
    
    return (
        <div className="h-screen w-screen flex flex-row">
            <SideNav />
            <div className="w-full flex-1 flex flex-col px-10">
                <div className="flex flex-row items-center justify-between">
                    <button className="flex flex-row items-center py-8 relative" onClick={() => {setShowDropDown(!showDropDown)}}>
                        <p className="font-semibold">Arabic</p>
                        {showDropDown ? <ChevronUpIcon className="h-6 w-6 text-black" /> : <ChevronDownIcon className="h-6 w-6 text-black" />}
                        {showDropDown && (
                            <div className="absolute -bottom-52 h-60 w-40 shadow-lg border rounded-lg bg-white"></div>
                        )}
                    </button>
                    <div></div>
                </div>
                <div>{children}</div>
            </div>
        </div>
    )
}