import { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon, PlusIcon, FireIcon, UserCircleIcon } from "@heroicons/react/16/solid"

export default function Header() {

    const [showDropDown, setShowDropDown] = useState(false)

    return (
        <div className="flex flex-row items-center justify-between px-10">
            <button
                className="flex flex-row items-center py-8 relative"
                onClick={() => {
                    setShowDropDown(!showDropDown);
                }}
            >
                <p className="font-semibold">Arabic</p>
                {showDropDown ? (
                    <ChevronUpIcon className="h-6 w-6 text-black" />
                ) : (
                    <ChevronDownIcon className="h-6 w-6 text-black" />
                )}
                {showDropDown && (
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
                <UserCircleIcon className="h-10 w-10 text-black" />
            </div>
        </div>
    )
}
