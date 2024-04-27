"use client"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { EyeIcon, TrashIcon } from "@heroicons/react/24/solid"
import TeacherLayout from "@/components/teacher/layout/Layout"

export default function AllStudents() {
    const router = useRouter()

    const data = [
        {
            id: 1,
            name: "Alex Wayne",
            phone: "(555) 555-1234",
            email: "alex@gmail.com",
            class: "Arabic"
        },
        {
            id: 2,
            name: "Alex Wayne",
            phone: "(555) 555-1234",
            email: "alex@gmail.com",
            class: "Arabic"
        },
        {
            id: 3,
            name: "Alex Wayne",
            phone: "(555) 555-1234",
            email: "alex@gmail.com",
            class: "Arabic"
        },
        {
            id: 4,
            name: "Alex Wayne",
            phone: "(555) 555-1234",
            email: "alex@gmail.com",
            class: "Arabic"
        },
        {
            id: 5,
            name: "Alex Wayne",
            phone: "(555) 555-1234",
            email: "alex@gmail.com",
            class: "Arabic"
        },
        {
            id: 6,
            name: "Alex Wayne",
            phone: "(555) 555-1234",
            email: "alex@gmail.com",
            class: "Arabic"
        },
        {
            id: 7,
            name: "Alex Wayne",
            phone: "(555) 555-1234",
            email: "alex@gmail.com",
            class: "Arabic"
        },
        {
            id: 8,
            name: "Alex Wayne",
            phone: "(555) 555-1234",
            email: "alex@gmail.com",
            class: "Arabic"
        },
        {
            id: 9,
            name: "Alex Wayne",
            phone: "(555) 555-1234",
            email: "alex@gmail.com",
            class: "Arabic"
        },
        {
            id: 10,
            name: "Alex Wayne",
            phone: "(555) 555-1234",
            email: "alex@gmail.com",
            class: "Arabic"
        },
        {
            id: 11,
            name: "Alex Wayne",
            phone: "(555) 555-1234",
            email: "alex@gmail.com",
            class: "Arabic"
        },
        {
            id: 12,
            name: "Alex Wayne",
            phone: "(555) 555-1234",
            email: "alex@gmail.com",
            class: "Arabic"
        },
        {
            id: 13,
            name: "Alex Wayne",
            phone: "(555) 555-1234",
            email: "alex@gmail.com",
            class: "Arabic"
        },
        {
            id: 14,
            name: "Alex Wayne",
            phone: "(555) 555-1234",
            email: "alex@gmail.com",
            class: "Arabic"
        },
        {
            id: 15,
            name: "Alex Wayne",
            phone: "(555) 555-1234",
            email: "alex@gmail.com",
            class: "Arabic"
        },
        {
            id: 16,
            name: "Alex Wayne",
            phone: "(555) 555-1234",
            email: "alex@gmail.com",
            class: "Arabic"
        },
        {
            id: 17,
            name: "Alex Wayne",
            phone: "(555) 555-1234",
            email: "alex@gmail.com",
            class: "Arabic"
        },
        {
            id: 18,
            name: "Alex Wayne",
            phone: "(555) 555-1234",
            email: "alex@gmail.com",
            class: "Arabic"
        },
        {
            id: 19,
            name: "Alex Wayne",
            phone: "(555) 555-1234",
            email: "alex@gmail.com",
            class: "Arabic"
        },
        {
            id: 20,
            name: "Alex Wayne",
            phone: "(555) 555-1234",
            email: "alex@gmail.com",
            class: "Arabic"
        },
        {
            id: 21,
            name: "Alex Wayne",
            phone: "(555) 555-1234",
            email: "alex@gmail.com",
            class: "Arabic"
        },
        {
            id: 22,
            name: "Alex Wayne",
            phone: "(555) 555-1234",
            email: "alex@gmail.com",
            class: "Arabic"
        },
        {
            id: 23,
            name: "Alex Wayne",
            phone: "(555) 555-1234",
            email: "alex@gmail.com",
            class: "Arabic"
        },
        {
            id: 24,
            name: "Alex Wayne",
            phone: "(555) 555-1234",
            email: "alex@gmail.com",
            class: "Arabic"
        },
        {
            id: 25,
            name: "Alex Wayne",
            phone: "(555) 555-1234",
            email: "alex@gmail.com",
            class: "Arabic"
        },
        {
            id: 26,
            name: "Alex Wayne",
            phone: "(555) 555-1234",
            email: "alex@gmail.com",
            class: "Arabic"
        }
    ]

    return (
        <TeacherLayout>
            <div className="size-full flex flex-col p-10">
                <div className="flex flex-row items-center justify-between mb-3 w-full">
                    <p className="text-lg font-semibold">All Students</p>
                    <Link
                        href={"/teacher/add-student"}
                        className="p-3 rounded-lg bg-sky-300 border-b-2 hover:border-b-4 border-sky-500 text-white font-semibold transform-gpu ease-in-out duration-150"
                    >
                        Add Student
                    </Link>
                </div>
                <div className="w-full max-h-[70vh] flex-1 flex flex-col gap-5 rounded-lg border border-sky-500 p-10">
                    <div className="w-full flex flex-row items-center">
                        <div className="w-20 hidden lg:flex" />
                        <div className="w-full grid grid-cols-3 lg:grid-cols-5 text-lg font-semibold">
                            <p className="pl-5 md:pl-20">Name</p>
                            <p className="pl-5 md:pl-20 hidden lg:flex">Email</p>
                            <p className="pl-5 md:pl-20 hidden lg:flex">Phone no.</p>
                            <p className="pl-5 md:pl-20">Class</p>
                            <p className="pl-5 md:pl-20">Action</p>
                        </div>
                    </div>
                    <div className="size-full flex flex-col gap-5 md:gap-0 overflow-y-auto scrollbar-none">
                        {data?.map((item, key) => {
                            return (
                                <div
                                    className="w-full flex flex-row items-center"
                                    key={key}
                                >
                                    <div className="size-20 hidden md:flex items-center justify-center">
                                        <Image
                                            src={"/profile.png"}
                                            alt="profile"
                                            height={50}
                                            width={50}
                                            className="rounded-full overflow-hidden"
                                        />
                                    </div>
                                    <div className="w-full grid grid-cols-3 lg:grid-cols-5 text-sm text-primary">
                                        <p className="pl-5 md:pl-20">{item?.name}</p>
                                        <p className="pl-5 md:pl-20 hidden lg:flex">{item?.email}</p>
                                        <p className="pl-5 md:pl-20 hidden lg:flex">{item?.phone}</p>
                                        <p className="pl-5 md:pl-20">{item?.class}</p>
                                        <div className="pl-5 md:pl-20 flex flex-row items-center gap-3">
                                            <button>
                                                <TrashIcon className="size-6 text-sky-500" />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    router.push(
                                                        `/teacher/student/${item?.id}`
                                                    )
                                                }}
                                            >
                                                <EyeIcon className="size-6 text-sky-500" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </TeacherLayout>
    )
}
