"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid"
import iso6391 from "iso-639-1"
import LanguageCard from "@/components/language-card/LanguageCard"

export default function SelectLanguage() {

    const languages = iso6391.getAllNativeNames()
    const languageCodes = iso6391.getAllCodes()

    const [showDropDown, setShowDropDown] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
    const [selectedLanguageCode, setSelectedLanguageCode] = useState(languageCodes[0])

    const data = [
        {
            name: "Arabic",
            image: "/bg-image-arabic.jpg",
            flagImage: "/arabic-flag.png"
        },
        {
            name: "Arabic",
            image: "/bg-image-arabic.jpg",
            flagImage: "/arabic-flag.png"
        },
        {
            name: "Arabic",
            image: "/bg-image-arabic.jpg",
            flagImage: "/arabic-flag.png"
        },
        {
            name: "Arabic",
            image: "/bg-image-arabic.jpg",
            flagImage: "/arabic-flag.png"
        },
        {
            name: "Arabic",
            image: "/bg-image-arabic.jpg",
            flagImage: "/arabic-flag.png"
        },
        {
            name: "Arabic",
            image: "/bg-image-arabic.jpg",
            flagImage: "/arabic-flag.png"
        },
        {
            name: "Arabic",
            image: "/bg-image-arabic.jpg",
            flagImage: "/arabic-flag.png"
        },
        {
            name: "Arabic",
            image: "/bg-image-arabic.jpg",
            flagImage: "/arabic-flag.png"
        },
        {
            name: "Arabic",
            image: "/bg-image-arabic.jpg",
            flagImage: "/arabic-flag.png"
        },
        {
            name: "Arabic",
            image: "/bg-image-arabic.jpg",
            flagImage: "/arabic-flag.png"
        },
        {
            name: "Arabic",
            image: "/bg-image-arabic.jpg",
            flagImage: "/arabic-flag.png"
        },
        {
            name: "Arabic",
            image: "/bg-image-arabic.jpg",
            flagImage: "/arabic-flag.png"
        },
        {
            name: "Arabic",
            image: "/bg-image-arabic.jpg",
            flagImage: "/arabic-flag.png"
        },
        {
            name: "Arabic",
            image: "/bg-image-arabic.jpg",
            flagImage: "/arabic-flag.png"
        },
        {
            name: "Arabic",
            image: "/bg-image-arabic.jpg",
            flagImage: "/arabic-flag.png"
        }
    ]

    return (
        <div className="h-screen w-screen flex flex-col items-center">
            <div className="h-20 w-full bg-primary bg-opacity-15 flex flex-row justify-between items-center pl-5 pr-10">
                <Image src={"/logo2.png"} alt="logo" height={100} width={100} />
                <Link href={"/login"} className=" h-12 w-28 rounded-2xl border-b-4 border-amber-500 bg-amber-400 font-bold flex items-center justify-center">Sign in</Link>
            </div>
            <div className="my-10 flex flex-row items-center gap-3">
                <p className="text-primary text-xl font-bold font-sans">I speak</p>
                <div className="h-14 w-60 border-4 border-primary rounded-lg flex flex-row items-center justify-between px-3 relative">
                    <p className="text-lg font-bold truncate">{`${selectedLanguage} (${selectedLanguageCode?.toUpperCase()})`}</p>
                    <button onClick={() => {setShowDropDown(!showDropDown)}}>
                        {showDropDown ? <ChevronUpIcon className="h-6 w-6 text-primary" /> : <ChevronDownIcon className="h-6 w-6 text-primary" />}
                    </button>
                    {showDropDown && (
                        <div className="absolute -bottom-[325px] -left-[10px] border h-80 w-64 bg-white rounded-lg shadow-xl overflow-y-auto scrollbar-none p-3 flex flex-col items-start gap-1 z-50">
                            {languages?.map((item, key) => {
                                return (
                                    <button 
                                        className="flex flex-row gap-3 items-center" 
                                        key={key} 
                                        onClick={() => {
                                            setSelectedLanguage(item)
                                            setSelectedLanguageCode(languageCodes[key])
                                            setShowDropDown(false)
                                        }}
                                    >
                                        <p>{item}</p>
                                        <p>({languageCodes[key]?.toUpperCase()})</p>
                                    </button>
                                )
                            })}
                        </div>
                    )}
                </div>
                <p className="text-primary text-xl font-bold font-sans">and want to learn...</p>
            </div>
            <div className="h-full overflow-y-auto scrollbar-none">
                <div className="grid grid-cols-4 gap-10 mt-10">
                    {data?.map((item, key) => {
                        return (
                            <LanguageCard name={item?.name} image={item?.image} flagImage={item?.flagImage} key={key} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}