"use client"

import { useState } from "react"
import Image from "next/image"
import {
    DocumentTextIcon,
    ArrowUpTrayIcon,
    LinkIcon,
    UsersIcon,
    PaperAirplaneIcon
} from "@heroicons/react/24/solid"
import TeacherLayout from "@/components/teacher/layout/Layout"

export default function Class({ params }) {
    const [selectedTab, setSelectedTab] = useState("stream")

    const classwork = [
        {
            id: 1,
            name: "Assignment 01",
            date: "Jun 04, 2023",
            type: "assignment"
        },
        {
            id: 2,
            name: "Assignment 02",
            date: "Mar 07, 2023",
            type: "assignment"
        },
        {
            id: 3,
            name: "Notes 01",
            date: "Jul 04, 2023",
            type: "file"
        },
        {
            id: 4,
            name: "Notes 02",
            date: "Jun 04, 2023",
            type: "file"
        },
        {
            id: 5,
            name: "Assignment 03",
            date: "Jun 04, 2023",
            type: "assignment"
        },
        {
            id: 6,
            name: "Assignment 04",
            date: "Jun 04, 2023",
            type: "assignment"
        },
        {
            id: 7,
            name: "Notes 03",
            date: "Jun 04, 2023",
            type: "file"
        },
        {
            id: 8,
            name: "Assignment 05",
            date: "Aug 04, 2023",
            type: "assignment"
        },
        {
            id: 9,
            name: "Notes 04",
            date: "Jun 04, 2023",
            type: "file"
        },
        {
            id: 10,
            name: "Notes 05",
            date: "Jun 11, 2023",
            type: "file"
        },
        {
            id: 11,
            name: "Assignment 06",
            date: "Jun 04, 2023",
            type: "assignment"
        },
        {
            id: 12,
            name: "Notes 06",
            date: "Jan 04, 2022",
            type: "file"
        }
    ]

    const teachers = [
        {
            id: 1,
            name: "Jason Pink",
            image: "/profile.png"
        },
        {
            id: 2,
            name: "Jasper Pink",
            image: "/profile.png"
        }
    ]

    const students = [
        {
            id: 1,
            name: "Alex Wayne",
            image: "/profile.png"
        },
        {
            id: 2,
            name: "Alex Wayne",
            image: "/profile.png"
        },
        {
            id: 3,
            name: "Alex Wayne",
            image: "/profile.png"
        },
        {
            id: 4,
            name: "Alex Wayne",
            image: "/profile.png"
        },
        {
            id: 5,
            name: "Alex Wayne",
            image: "/profile.png"
        },
        {
            id: 6,
            name: "Alex Wayne",
            image: "/profile.png"
        },
        {
            id: 7,
            name: "Alex Wayne",
            image: "/profile.png"
        },
        {
            id: 8,
            name: "Alex Wayne",
            image: "/profile.png"
        },
        {
            id: 9,
            name: "Alex Wayne",
            image: "/profile.png"
        },
        {
            id: 10,
            name: "Alex Wayne",
            image: "/profile.png"
        },
        {
            id: 11,
            name: "Alex Wayne",
            image: "/profile.png"
        },
        {
            id: 12,
            name: "Alex Wayne",
            image: "/profile.png"
        }
    ]

    return (
        <TeacherLayout>
            <div className="h-full flex-1 p-16 flex flex-col items-center gap-10">
                <div className="w-full flex flex-col">
                    <div className="h-fit flex flex-col md:flex-row md:items-center">
                        <button
                            className={`h-12 w-28 flex items-center justify-center transform-gpu ease-in-out duration-300 ${
                                selectedTab === "stream" &&
                                "bg-sky-100 border-b-2 border-sky-500 text-sky-500"
                            }`}
                            onClick={() => {
                                if (selectedTab !== "stream") {
                                    setSelectedTab("stream")
                                }
                            }}
                        >
                            Stream
                        </button>
                        <button
                            className={`h-12 w-28 flex items-center justify-center transform-gpu ease-in-out duration-300 ${
                                selectedTab === "classwork" &&
                                "bg-sky-100 border-b-2 border-sky-500 text-sky-500"
                            }`}
                            onClick={() => {
                                if (selectedTab !== "classwork") {
                                    setSelectedTab("classwork")
                                }
                            }}
                        >
                            Classwork
                        </button>
                        <button
                            className={`h-12 w-28 flex items-center justify-center transform-gpu ease-in-out duration-300 ${
                                selectedTab === "people" &&
                                "bg-sky-100 border-b-2 border-sky-500 text-sky-500"
                            }`}
                            onClick={() => {
                                if (selectedTab !== "people") {
                                    setSelectedTab("people")
                                }
                            }}
                        >
                            People
                        </button>
                    </div>
                    <div className="h-[1px] w-full bg-gray-300 hidden md:flex" />
                </div>
                {selectedTab === "stream" && (
                    <div className="size-full flex flex-col gap-10 md:px-20 lg:px-32">
                        <div className="min-h-44 w-full bg-sky-300 rounded-xl shadow-xl text-3xl font-sans text-white p-5 flex items-end">
                            Arabic Class
                        </div>
                        <div className="w-full flex flex-row gap-10">
                            <div className="h-40 w-64 rounded-xl border border-sky-500 shadow-xl hidden lg:flex flex-col justify-around px-5">
                                <p className="font-semibold">Upcoming</p>
                                <p className="font-light">No work due soon!</p>
                                <button className="place-self-end text-sm hover:underline">
                                    View all
                                </button>
                            </div>
                            <div className="w-full flex flex-col gap-10">
                                <div className="h-80 w-full rounded-xl border border-sky-500 shadow-xl flex flex-col p-7">
                                    <div className="h-full flex-1 bg-sky-100 border-b-2 border-sky-500 p-5">
                                        <textarea
                                            className="size-full bg-transparent border-none outline-none"
                                            placeholder="Write some thing to your class..."
                                        />
                                    </div>
                                    <div className="h-32 md:h-20 w-full flex flex-col gap-5 md:gap-0 md:flex-row md:items-end justify-end md:justify-between">
                                        <div className="flex flex-row items-center gap-3">
                                            <button className="size-12 bg-sky-100 flex items-center justify-center rounded-full">
                                                <ArrowUpTrayIcon className="size-6 text-sky-500" />
                                            </button>
                                            <button className="size-12 bg-sky-100 flex items-center justify-center rounded-full">
                                                <LinkIcon className="size-6 text-sky-500" />
                                            </button>
                                        </div>
                                        <div className="flex flex-row items-center gap-5">
                                            <button className="h-10 w-32 flex items-center justify-center rounded-lg border border-b-2 hover:border-b-4 text-primary font-semibold border-primary transform-gpu ease-in-out duration-150">
                                                Cancel
                                            </button>
                                            <button className="h-10 w-32 flex items-center justify-center rounded-lg bg-sky-300 border-b-2 hover:border-b-4 border-sky-500 text-white font-semibold transform-gpu ease-in-out duration-150">
                                                Post
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-7 rounded-xl border border-sky-500 shadow-xl flex flex-col gap-5 mb-16">
                                    <div className="flex flex-row items-center gap-5 px-7">
                                        <Image
                                            src={"/profile.png"}
                                            alt="profile"
                                            height={50}
                                            width={50}
                                        />
                                        <div className="flex flex-col">
                                            <p className="font-semibold">
                                                Alex Wayne
                                            </p>
                                            <p className="text-sm font-light">
                                                Jun 07, 2023
                                            </p>
                                        </div>
                                    </div>
                                    <p className="px-7">Class Final Result</p>
                                    <div className="h-[1px] w-full bg-sky-500 my-2" />
                                    <div className="flex flex-row gap-2 items-center text-sky-500 px-7">
                                        <UsersIcon className="size-5" />
                                        <p>8 class comments</p>
                                    </div>
                                    <div className="flex flex-row gap-5 px-7">
                                        <Image
                                            src={"/profile.png"}
                                            alt="profile"
                                            height={50}
                                            width={50}
                                            className="size-[50px]"
                                        />
                                        <div className="flex flex-col gap-3">
                                            <div className="flex flex-row gap-3 items-center">
                                                <p>Alex Wayne</p>
                                                <p className="text-xs font-light text-gray-500">
                                                    Jun 07, 2023
                                                </p>
                                            </div>
                                            <p className="text-wrap text-xs">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute
                                                irure dolor in reprehenderit in
                                                voluptate velit esse cillum
                                                dolore eu fugiat nulla pariatur.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="px-7 w-full flex flex-row gap-5 items-center">
                                        <Image
                                            src={"/profile.png"}
                                            alt="profile"
                                            height={50}
                                            width={50}
                                            className="size-[50px]"
                                        />
                                        <div className="h-12 w-full rounded-full border flex items-center justify-center px-3">
                                            <input
                                                type="text"
                                                className="w-full bg-transparent outline-none"
                                                placeholder="Type your comment..."
                                            />
                                        </div>
                                        <button>
                                            <PaperAirplaneIcon className="size-8 text-sky-500" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {selectedTab === "classwork" && (
                    <div className="h-full w-full md:w-[75%] lg:w-[55%] flex flex-col overflow-y-auto scrollbar-none">
                        {classwork?.map((item, key) => {
                            return (
                                <div className="w-full flex flex-col" key={key}>
                                    <div className="h-20 w-full flex flex-row items-center justify-between">
                                        <div className="flex flex-row gap-3 items-center">
                                            <div className="size-12 bg-sky-100 rounded-full flex items-center justify-center">
                                                <DocumentTextIcon className="size-7 text-sky-300" />
                                            </div>
                                            <p>{item?.name}</p>
                                        </div>
                                        <p className="text-sm text-gray-300 md:flex hidden">
                                            Posted {item?.date}
                                        </p>
                                    </div>
                                    <div className="h-[1px] w-full bg-gray-300" />
                                </div>
                            )
                        })}
                    </div>
                )}
                {selectedTab === "people" && (
                    <div className="h-full w-full md:w-[75%] lg:w-[55%] flex flex-col overflow-y-auto scrollbar-none">
                        <p className="text-3xl text-sky-500">Teachers</p>
                        <div className="min-h-[1px] w-full bg-sky-500 my-5" />
                        <div className="flex flex-col gap-5">
                            {teachers?.map((item, key) => {
                                return (
                                    <div
                                        className="flex flex-row items-center gap-7"
                                        key={key}
                                    >
                                        <Image
                                            src={item?.image}
                                            alt="profile"
                                            height={35}
                                            width={35}
                                        />
                                        <p>{item?.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="text-3xl text-sky-500 mt-10">Students</p>
                        <div className="min-h-[1px] w-full bg-sky-500 my-5" />
                        <div className="flex flex-col gap-5">
                            {students?.map((item, key) => {
                                return (
                                    <div
                                        className="flex flex-row items-center gap-7"
                                        key={key}
                                    >
                                        <Image
                                            src={item?.image}
                                            alt="profile"
                                            height={35}
                                            width={35}
                                        />
                                        <p>{item?.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        </TeacherLayout>
    )
}
