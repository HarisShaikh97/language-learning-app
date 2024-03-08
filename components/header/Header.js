import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronDownIcon, ChevronUpIcon, PlusIcon, FireIcon, UserCircleIcon } from "@heroicons/react/16/solid"

export default function Header() {

    const router = useRouter()

    const [showLanguageDropDown, setShowLanguageDropDown] = useState(false)
    const [showProfileDropDown, setShowProfileDropDown] = useState(false)

    return (
        <div className="flex flex-row items-center justify-between px-10">
            <button
                className="flex flex-row items-center py-8 relative"
                onClick={() => {
                    setShowLanguageDropDown(!showLanguageDropDown)
                }}
            >
                <p className="font-bold text-lg">Arabic</p>
                {showLanguageDropDown ? (
                    <ChevronUpIcon className="h-6 w-6 text-black" />
                ) : (
                    <ChevronDownIcon className="h-6 w-6 text-black" />
                )}
                {showLanguageDropDown && (
                    <div className="absolute top-16 shadow-lg border-2 rounded-lg bg-white flex flex-col items-start">
                        <div className="flex flex-col gap-3 px-5 py-5 items-start">
                            <p className="text-lg font-bold text-gray-400 whitespace-nowrap">
                                Select a language
                            </p>
                            <p>Arabic</p>
                        </div>
                        <div className="h-1 w-full border-2" />
                        <div className="flex flex-row gap-2 px-5 py-5">
                            <PlusIcon className="h-6 w-6 text-black" />
                            <p>Add language</p>
                        </div>
                    </div>
                )}
            </button>
            <div className="flex flex-row gap-5 items-center">
                <p className="text-lg font-semibold">Help</p>
                <div className="flex flex-row items-center gap-1">
                    <FireIcon className="h-5 w-5 text-gray-500" />
                    <p className="text-gray-500 font-semibold">0</p>
                </div>
                <div className="relative">
                    <button onClick={() => {setShowProfileDropDown(!showProfileDropDown)}}>
                        <UserCircleIcon className="h-10 w-10 text-black hover:text-primary" />
                    </button>
                    {showProfileDropDown && (
                        <div className="absolute top-10 -right-5 w-60 shadow-lg border-2 rounded-2xl bg-white flex flex-col items-start">
                            <div className="flex flex-col gap-3 px-5 py-5 items-start">
                                <button className="text-sm font-medium">Profile settings</button>
                                <button className="text-sm font-medium">Learning settings</button>
                            </div>
                            <div className="h-1 w-full border-2" />
                            <div className="flex flex-row gap-2 px-5 py-5">
                                <button className="text-sm font-medium text-red-500" onClick={() => {router.push("/")}}>Sign out</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
