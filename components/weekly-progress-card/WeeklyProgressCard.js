import {
    LanguageIcon,
    FilmIcon,
    ChatBubbleOvalLeftEllipsisIcon
} from "@heroicons/react/24/solid";
import PropTypes from "prop-types";
import UpNextWordsCard from "../up-next-words-card/UpNextWordsCard";
import UpNextVideoCard from "../up-next-video-card/UpNextVideoCard";
import UpNextConversationCard from "../up-next-conversation-card/UpNextConversationCard";

export default function WeeklyProgressCard({ selectedTab, setSelectedTab }) {
    return (
        <div className="h-[400px] w-[250px] sm:w-[350px] shadow-xl relative mt-10 mb-40 flex computer:hidden flex-col items-center bg-[#009fbb] rounded-3xl">
            <div className="absolute -top-7 sm:-top-8 w-60 sm:w-80 flex flex-row items-center justify-between">
                <button
                    className={`${
                        selectedTab === "green"
                            ? "h-14 w-20 sm:h-16 sm:w-24"
                            : "h-10 w-16 sm:h-14 sm:w-20"
                    } rounded-2xl border-4 border-[#009fbb] bg-[#009fbb] shadow-xl flex items-center justify-center`}
                    onClick={() => {
                        setSelectedTab("green");
                    }}
                >
                    <div className="size-full rounded-2xl bg-[#009fbb] border-4 border-[#cfeff5] flex items-center justify-center">
                        <p
                            className={`${
                                selectedTab === "green" && "sm:text-xl"
                            } font-semibold sm:font-bold text-white`}
                        >
                            0/35
                        </p>
                    </div>
                </button>
                <button
                    className={`${
                        selectedTab === "red"
                            ? "h-14 w-20 sm:h-16 sm:w-24"
                            : "h-10 w-16 sm:h-14 sm:w-20"
                    } rounded-2xl border-4 border-[#009fbb] bg-[#009fbb] shadow-xl flex items-center justify-center`}
                    onClick={() => {
                        setSelectedTab("red");
                    }}
                >
                    <div className="size-full rounded-2xl bg-[#009fbb] border-4 border-[#cfeff5] flex items-center justify-center">
                        <p
                            className={`${
                                selectedTab === "red" && "sm:text-xl"
                            } font-semibold sm:font-bold text-white`}
                        >
                            0/5
                        </p>
                    </div>
                </button>
                <button
                    className={`${
                        selectedTab === "blue"
                            ? "h-14 w-20 sm:h-16 sm:w-24"
                            : "h-10 w-16 sm:h-14 sm:w-20"
                    } rounded-2xl border-4 border-[#009fbb] bg-[#009fbb] shadow-xl flex items-center justify-center`}
                    onClick={() => {
                        setSelectedTab("blue");
                    }}
                >
                    <div className="size-full rounded-2xl bg-[#009fbb] border-4 border-[#cfeff5] flex items-center justify-center">
                        <p
                            className={`${
                                selectedTab === "blue" && "sm:text-xl"
                            } font-semibold sm:font-bold text-white`}
                        >
                            0/5
                        </p>
                    </div>
                </button>
            </div>
            <p className="text-xl font-bold text-white mt-12">
                {selectedTab === "green"
                    ? "words"
                    : selectedTab === "red"
                    ? "videos"
                    : "conversations"}
            </p>
            <div className="flex flex-row items-center gap-3">
                {selectedTab === "green" ? (
                    <LanguageIcon className="h-5 w-5 text-white" />
                ) : selectedTab === "red" ? (
                    <FilmIcon className="h-5 w-5 text-white" />
                ) : (
                    <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 text-white" />
                )}
                <p className="font-semibold text-white text-sm">
                    {selectedTab === "green"
                        ? "Build vocabulary"
                        : selectedTab === "red"
                        ? "Practice listening"
                        : "Practice speaking"}
                </p>
            </div>
            {selectedTab === "green" ? (
                <UpNextWordsCard className="top-32 left-[15px]" />
            ) : selectedTab === "red" ? (
                <UpNextVideoCard className="top-32 left-[15px]" />
            ) : (
                <UpNextConversationCard className="top-32 left-[15px]" />
            )}
        </div>
    );
}

WeeklyProgressCard.propTypes = {
    selectedTab: PropTypes.string.isRequired,
    setSelectedTab: PropTypes.func.isRequired
};
