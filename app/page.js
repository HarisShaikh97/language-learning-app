"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid"
import iso6391 from "iso-639-1"

export default function Welcome() {

    const router = useRouter()

    const [showDropDown, setShowDropDown] = useState(false)

    const languages = iso6391.getAllNativeNames()

    return (
        <div className="h-screen w-screen flex flex-col items-center">
            <div className="w-full flex flex-col">
                <div className="h-10 w-full bg-amber-400 flex flex-row items-center gap-10 justify-end pr-80">
                    <button className="flex flex-row items-center gap-2 relative" onClick={() => {setShowDropDown(!showDropDown)}}>
                        <p className="text-xs font-medium">Select page language</p>
                        {showDropDown ? <ChevronUpIcon className="h-[15px] w-[15px] text-black" /> : <ChevronDownIcon className="h-[15px] w-[15px] text-black" />}
                        {showDropDown && (
                            <div className="absolute -bottom-[335px] -left-[10px] border h-80 w-44 bg-white rounded-lg shadow-xl overflow-y-auto scrollbar-none p-3 flex flex-col items-start gap-2 z-50">
                                {languages?.map((item, key) => {
                                    return (
                                        <button 
                                            className="font-semibold" 
                                            key={key} 
                                            onClick={() => {
                                                setShowDropDown(false)
                                            }}
                                        >
                                            {item}
                                        </button>
                                    )
                                })}
                            </div>
                        )}
                    </button>
                    <button className="h-7 w-20 rounded border border-black text-xs font-medium" onClick={() => {router.push("/login")}}>Log in</button>
                </div>
                <div className="h-20 w-full shadow-2xl bg-primary flex flex-row items-center justify-between px-60">
                    <Image src={"/logo2.png"} alt="logo" height={100} width={100} />
                    <div></div>
                </div>
            </div>
        </div>
    )
}