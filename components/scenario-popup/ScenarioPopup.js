"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/16/solid";
import {
    CheckCircleIcon,
    EllipsisHorizontalIcon
} from "@heroicons/react/24/outline";
import coursesData from "@/utils/Data";

export default function ScenarioPopup({ id, setShowPopup }) {
    const [courseId, setCourseId] = useState();

    useEffect(() => {
        setCourseId(localStorage.getItem("course_id"));
    }, []);

    console.log(coursesData);

    return (
        <div className="w-[500px] absolute top-0 left-52 bg-white rounded-xl border z-50 flex flex-col gap-5 items-center p-5">
            <div className="w-full flex justify-end">
                <button
                    onClick={() => {
                        setShowPopup(false);
                    }}
                >
                    <XMarkIcon className="size-7 text-black" />
                </button>
            </div>
            <div className="size-20 rounded-full bg-amber-50 flex items-center justify-center relative">
                <Image
                    src={"/greetings.png"}
                    alt="icon"
                    height={50}
                    width={50}
                />
            </div>
            <p className="text-sm font-semibold uppercase font-sans">
                Introductions
            </p>
            <p className="text-sm">
                {
                    coursesData
                        ?.find((course) => {
                            return course.id === parseInt(courseId);
                        })
                        ?.sections[0]?.scenarios?.find((item) => {
                            return item?.id === id;
                        })?.translations?.length
                }{" "}
                words and phrases
            </p>
            <button className="h-12 w-36 rounded-xl hover:bg-amber-400 bg-amber-300 border-b-4 border-amber-500 font-semibold">
                Start learning
            </button>
            <button className="flex flex-row gap-3 text-black hover:text-gray-700">
                <CheckCircleIcon className="size-7" />
                <p className="font-semibold">Mark all as known</p>
            </button>
            {coursesData
                ?.find((course) => {
                    return course.id === parseInt(courseId);
                })
                ?.sections[0]?.scenarios?.find((item) => {
                    return item?.id === id;
                })
                ?.translations?.map((item, key) => {
                    return (
                        <div className="w-full flex flex-row items-center justify-between" key={key}>
                            <div className="size-10 border-2 rounded-full"></div>
                            <div className="flex flex-row gap-5 items-center">
                                <p className="text-sm font-semibold">
                                    {item?.arabic}
                                </p>
                                <p className="text-xs">{item?.english}</p>
                            </div>
                            <button>
                                <EllipsisHorizontalIcon className="size-7 text-black" />
                            </button>
                        </div>
                    );
                })}
        </div>
    );
}
