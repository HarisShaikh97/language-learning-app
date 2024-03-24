"use client";

import { useState, useEffect } from "react";
import { FilmIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Layout from "@/components/layout/Layout";
import coursesData from "@/utils/Data";

export default function Videos() {
    const [courseId, setCourseId] = useState();

    useEffect(() => {
        setCourseId(localStorage.getItem("course_id"));
    }, []);

    console.log(
        coursesData?.find((course) => {
            return course.id === parseInt(courseId);
        })?.sections[1]
    );

    return (
        <Layout>
            <div className="flex-1 h-full flex flex-col gap-10 px-10">
                <div className="w-full p-8 rounded-xl bg-amber-50 flex flex-col">
                    <div className="w-full flex flex-row gap-5">
                        <FilmIcon className="size-14 text-amber-300" />
                        <div className="flex flex-col gap-3 w-full">
                            <p className="text-2xl font-bold">
                                Search for videos about things you love
                                (#music), or situations that you want to prepare
                                for (#travel)
                            </p>
                            <p>
                                Use “Ready to Watch” for videos of words that
                                you already know
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-row gap-3 items-center">
                        <div className="h-6 text-sm flex items-center justify-center px-3 rounded-full border hover:border-black border-amber-500 border-b-4 border-b-amber-600 hover:border-b transition ease-in-out duration-350">
                            All
                        </div>
                        <div className="h-6 text-sm flex items-center justify-center px-3 rounded-full border border-black hover:border-gray-300 transition ease-in-out duration-350">
                            Ready to watch(3)
                        </div>
                        <div className="h-6 text-sm flex items-center justify-center px-3 rounded-full border border-black hover:border-gray-300 transition ease-in-out duration-350">
                            Watched
                        </div>
                        <p className="text-gray-300 text-xl">|</p>
                        <div className="h-6 text-sm flex items-center justify-center px-3 rounded-full border border-black hover:border-gray-300 transition ease-in-out duration-350">
                            Needs practice
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <div className="flex flex-row items-center gap-2">
                            <p className="text-sm font-bold">
                                Free videos today
                            </p>
                            <p className="size-5 flex items-center justify-center rounded-full bg-amber-300">
                                3
                            </p>
                        </div>
                        <div className="h-12 w-60 rounded-lg border flex flex-row gap-3 items-center px-3">
                            <MagnifyingGlassIcon className="size-7 text-gray-500" />
                            <input
                                type="text"
                                className="w-full outline-none"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-5">
                    {coursesData
                        ?.find((course) => {
                            return course.id === parseInt(courseId);
                        })
                        ?.sections[1]?.videos?.map((item, key) => {
                            return (
                              <a href={item?.url} target="_blank" className="h-80 w-52 rounded-2xl border flex flex-col overflow-hidden" key={key}>
                                <div className={`bg-[url('${item?.image || "/video-thumbnail-3.jpg"}')] bg-no-repeat bg-center bg-cover w-full h-40 flex items-end`}>
                                  <div className="h-5 px-2 rounded-tr-full bg-red-300 text-xs flex items-center">Under 50% of words known</div>
                                </div>
                                <div className="p-2">{item?.title}</div>
                                <div className="h-full flex-1 flex items-center pl-3">
                                  <button className="px-3 py-1 border border-black rounded-xl font-semibold">Learn words</button>
                                </div>
                              </a>
                            );
                        })}
                </div>
            </div>
        </Layout>
    );
}
