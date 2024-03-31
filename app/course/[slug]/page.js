"use client";

import { useState, useRef, useEffect } from "react";
// import {
//     CheckIcon,
//     MagnifyingGlassIcon,
//     ChevronLeftIcon,
//     ChevronRightIcon
// } from "@heroicons/react/24/outline";
import Layout from "@/components/layout/Layout";
// import DiscountBanner from "@/components/discount-banner/DiscountBanner";
import { ScenarioCard } from "@/components/scenario-card/ScenarioCard";
import ScenarioPopup from "@/components/scenario-popup/ScenarioPopup";
import coursesData from "@/utils/Data";

export default function Course({params}) {
    // const scrollViewRef = useRef();

    // const [showFreeScenarios, setShowFreeScenarios] = useState(false);
    // const [isLeftButtonVisible, setIsLeftButtonVisible] = useState(false);
    // const [isRightButtonVisible, setIsRightButtonVisible] = useState(true);
    const [courseId, setcourseId] = useState(1);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedScenario, setSelectedScenario] = useState();

    // const scrollToRight = () => {
    //     if (scrollViewRef.current) {
    //         scrollViewRef.current.scrollLeft += 196; // Adjust the scroll amount as needed
    //     }
    // };

    // const scrollToLeft = () => {
    //     if (scrollViewRef.current) {
    //         scrollViewRef.current.scrollLeft -= 196; // Adjust the scroll amount as needed
    //     }
    // };

    // const handleScroll = () => {
	// 	if (scrollViewRef.current) {
	// 	  const { scrollLeft, scrollWidth, clientWidth } = scrollViewRef.current;
	// 	  setIsLeftButtonVisible(scrollLeft > 0);
	// 	  setIsRightButtonVisible(scrollWidth > clientWidth && scrollLeft < scrollWidth - clientWidth);
	// 	}
	// };

    // useEffect(() => {
	// 	const handleResize = () => {
	// 	  handleScroll();
	// 	};
	
	// 	if (scrollViewRef.current) {
	// 	  handleScroll(); // Initial check
	// 	}
	
	// 	window.addEventListener('resize', handleResize);
	
	// 	return () => {
	// 	  window.removeEventListener('resize', handleResize);
	// 	};
	//   }, []);

      console.log(params?.slug);

    return (
        <Layout>
            <div className="min-h-full flex-1 flex flex-col items-center relative">
				{showPopup && <ScenarioPopup id={selectedScenario} setShowPopup={setShowPopup} />}
                {/* <DiscountBanner /> */}
                <div className="flex-1 flex flex-col gap-5 h-full w-[90%] overflow-y-auto scrollbar-none">
                    {/* <div className="w-full flex flex-row items-center justify-between mt-10">
                        <div className="h-10 w-80 rounded-lg bg-gray-100 grid grid-cols-2 p-1">
                            <div className="h-full flex-1 flex items-center justify-center rounded-lg bg-white shadow font-semibold">
                                Learn
                            </div>
                            <div className="h-full flex-1 flex items-center justify-center">
                                Review
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-7">
                            <div className="flex flex-row items-center gap-2">
                                <button
                                    className={`size-7 border-2 border-black rounded flex items-center justify-center ${
                                        showFreeScenarios && "bg-black"
                                    }`}
                                    onClick={() => {
                                        setShowFreeScenarios(
                                            !showFreeScenarios
                                        );
                                    }}
                                >
                                    <CheckIcon className="size-5 text-white" />
                                </button>
                                <p>Show only free scenarios</p>
                            </div>
                            <div className="h-12 w-60 rounded-lg border flex flex-row gap-3 items-center px-3">
                                <MagnifyingGlassIcon className="size-7 text-gray-500" />
                                <input
                                    type="text"
                                    className="w-full outline-none"
                                />
                            </div>
                        </div>
                    </div> */}
                    <p className="text-2xl font-bold mt-10">Continue learning</p>
                    <div className="h-36 w-60 sm:h-28 sm:w-80 rounded-lg bg-gray-100 border-b-4 border-slate-300 relative flex flex-col justify-between p-3">
                        <div className="absolute top-10 sm:top-6 right-0 bg-blue-300 h-16 w-8 rounded-s-full"></div>
                        <p className="text-xs font-bold">Abjad</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 justify-between w-[90%]">
                            <p>Deciphering the letters</p>
                            <button className="h-10 w-24 bg-blue-400 border-b-4 border-blue-500 rounded-xl font-semibold">
                                Continue
                            </button>
                        </div>
                        <div className="h-[5px] w-[90%] rounded-full bg-white">
                            <div className="h-full w-[25%] rounded-full bg-primary" />
                        </div>
                    </div>
                    <p className="text-2xl font-bold">Up next</p>
                    <div className="w-full flex flex-col gap-5">
                        <p className="font-bold">Recommended path</p>
                        <div className="flex flex-row items-center gap-5 w-full">
                            {/* {isLeftButtonVisible && (
                                <button onClick={scrollToLeft}>
                                    <ChevronLeftIcon className="size-5 text-black" />
                                </button>
                            )} */}
                            <div
                                className="w-full overflow-x-auto scrollbar-none"
                            >
                                <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
                                    {coursesData
                                        ?.find((course) => {
                                            return (
                                                course.id === parseInt(courseId)
                                            );
                                        })
                                        ?.sections[0]?.scenarios?.map(
                                            (item, key) => (
                                                <ScenarioCard
													id={item?.id}
                                                    name={item?.title}
                                                    isPremium={item?.isPremium}
													setSelectedScenario={setSelectedScenario}
													setShowPopup={setShowPopup}
                                                    key={key}
                                                />
                                            )
                                        )}
                                </div>
                            </div>
                            {/* {isRightButtonVisible && (
                                <button onClick={scrollToRight}>
                                    <ChevronRightIcon className="size-5 text-black" />
                                </button>
                            )} */}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
