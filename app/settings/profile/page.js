"use client"

import { useState } from "react"
import { ArrowUpTrayIcon, UserIcon, CheckIcon } from "@heroicons/react/16/solid"
import iso6391 from "iso-639-1"
import moment from "moment-timezone"

export default function Profile() {

    const languages = iso6391.getAllNativeNames()
    const allTimezones = moment.tz.names()

    const [selectedLanguage, setSelectedLanguage] = useState("English")
    const [selectedTimezone, setSelectedTimezone] = useState(allTimezones[0])

    console.log(allTimezones, "fgjsfglk")

    return (
        <div className="w-full py-10 flex flex-row gap-20 justify-center">
            <div className="flex flex-col gap-5">
                <div
                    className="bg-[url('/empty-profile-avatar.png')] bg-no-repeat bg-center border-4 border-white h-72 w-72 rounded-lg"
                    style={{ backgroundSize: "100% 100%" }}
                ></div>
                <button className="h-10 w-72 rounded-lg bg-primary flex flex-row gap-5 items-center justify-center">
                    <ArrowUpTrayIcon className="h-6 w-6 text-white" />
                    <p className="text-white text-sm font-semibold">
                        Upload New Picture
                    </p>
                </button>
                <button className="h-10 w-72 rounded-lg bg-primary flex flex-row gap-5 items-center justify-center">
                    <UserIcon className="h-6 w-6 text-white" />
                    <p className="text-white text-sm font-semibold">
                        View Profile
                    </p>
                </button>
            </div>
            <div className="flex flex-col gap-5 w-[650px]">
                <div className="flex flex-col items-end gap-5">
                    <div className="flex flex-row items-center gap-5">
                        <p className="font-semibold text-gray-500 text-sm">
                            Username
                        </p>
                        <input
                            type="text"
                            className="h-10 w-[500px] bg-white border rounded-md"
                        />
                    </div>
                    <div className="flex flex-row items-center gap-5">
                        <p className="font-semibold text-gray-500 text-sm">
                            Email
                        </p>
                        <input
                            type="text"
                            className="h-10 w-[500px] bg-white border rounded-md"
                        />
                    </div>
                    <div className="flex flex-row items-center gap-5">
                        <p className="font-semibold text-gray-500 text-sm">
                            Language
                        </p>
                        <select value={selectedLanguage} onChange={(e) => {setSelectedLanguage(e.target.value)}} className="h-7 w-[500px] border border-black rounded">
                            {languages?.map((item, key) => {
                                return (
                                    <option value={item} key={key}>{item}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="flex flex-row items-center gap-5">
                        <p className="font-semibold text-gray-500 text-sm">
                            Timezone
                        </p>
                        <select value={selectedTimezone} onChange={(e) => {setSelectedTimezone(e.target.value)}} className="h-7 w-[500px] border border-black rounded">
                            {allTimezones?.map((item, key) => {
                                return (
                                    <option value={item} key={key}>{item}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="w-[500px] flex flex-col items-center gap-5">
                        <p className="w-[95%] text-center text-sm">If you are using Goal Setter and want to keep your streak, make sure to complete the Daily Goal for today before changing the time zone.</p>
                        <button className="h-10 w-full bg-amber-400 flex flex-row gap-2 items-center justify-center rounded-md">
                            <CheckIcon className="h-7 w-7 text-primary" />
                            <p className="text-primary font-semibold">Save</p>
                        </button>
                    </div>
                </div>
                <div className="h-[1px] w-full border" />
                <button className="h-10 w-full rounded-md bg-primary flex flex-row justify-center items-center gap-3">
                    <UserIcon className="h-6 w-6 text-white" />
                    <p className="text-white text-sm font-semibold">Download Personal Data</p>
                </button>
            </div>
        </div>
    )
}
