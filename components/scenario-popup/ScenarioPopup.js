"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/16/solid";
import {
    CheckCircleIcon,
    EllipsisHorizontalIcon
} from "@heroicons/react/24/outline";
import coursesData from "@/utils/Data";
import Link from "next/link";

export default function ScenarioPopup({ id, setShowPopup }) {
    const router = useRouter()
    // const [courseId, setCourseId] = useState(2);

    // useEffect(() => {
    //     setCourseId(localStorage.getItem("course_id"));
    // }, []);

    // console.log(coursesData);

    return (
        <div className="w-[250px] sm:w-[500px] absolute top-5 sm:left-52 bg-white rounded-xl border z-50 flex flex-col gap-5 items-center p-5 shadow-xl">
            <div className="w-full flex justify-end">
                <button
                    onClick={() => {
                        setShowPopup(false);
                    }}
                >
                    <XMarkIcon className="size-7 text-black" />
                </button>
            </div>
            <div className="size-20 rounded-full bg-blue-50 flex items-center justify-center relative">
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
                    coursesData[0]
                        ?.sections[0]?.scenarios?.find((item) => {
                            return item?.id === id;
                        })?.translations?.length
                }{" "}
                words and phrases
            </p>
            <button className="h-12 w-36 rounded-xl hover:bg-blue-400 bg-blue-300 border-b-4 border-blue-500 font-semibold" onClick={() => {router.push("/word/1")}}>
                Start learning
            </button>
            <button className="flex flex-row gap-3 text-black hover:text-gray-700">
                <CheckCircleIcon className="size-7" />
                <p className="font-semibold">Mark all as known</p>
            </button>
            {coursesData[0]?.sections[0]?.scenarios?.find((item) => {
                    return item?.id === id;
                })
                ?.translations?.map((item, key) => {
                    return (
                        <div className="w-full flex flex-row items-center justify-between" key={key}>
                            <div className="size-10 border-2 rounded-full"></div>
                            <Link href={"/word/1"} className="flex flex-row gap-5 items-center p-2 rounded-lg hover:border border-black">
                                <p className="text-sm font-semibold">
                                    {item?.arabic}
                                </p>
                                <p className="text-xs">{item?.english}</p>
                            </Link>
                            <button>
                                <EllipsisHorizontalIcon className="size-7 text-black" />
                            </button>
                        </div>
                    );
                })}
        </div>
    );
}
