import {
	LanguageIcon,
	FilmIcon,
	ChatBubbleOvalLeftEllipsisIcon
} from "@heroicons/react/24/solid"
import PropTypes from "prop-types"
import UpNextWordsCard from "../up-next-words-card/UpNextWordsCard"
import UpNextVideoCard from "../up-next-video-card/UpNextVideoCard"
import UpNextConversationCard from "../up-next-conversation-card/UpNextConversationCard"

export default function WeeklyProgressCardGrid({
	selectedTab,
	setSelectedTab
}) {
	return (
		<div className="hidden computer:flex flex-row items-center gap-5 mt-20">
			<button
				className={`${
					selectedTab === "green"
						? "h-[350px] w-[650px] grid grid-cols-2 content-center"
						: "h-80 w-64 flex items-center justify-center"
				} shadow-xl bg-[#009fbb] rounded-3xl`}
				onClick={() => {
					setSelectedTab("green")
				}}
			>
				<div className="flex flex-col items-center justify-center gap-5">
					<div className="flex flex-row items-center gap-3">
						<LanguageIcon className="size-8 text-white" />
						<p className="font-bold text-white text-xl">
							Build vocabulary
						</p>
					</div>
					<div className="h-[130px] w-[130px] rounded-full flex items-center justify-center bg-[#cfeff5]">
						<div className="h-[110px] w-[110px] rounded-full bg-[#009fbb] flex items-center justify-center">
							<p className="text-2xl font-bold text-white">
								0/35
							</p>
						</div>
					</div>
					<p className="text-xl font-bold text-white">words</p>
				</div>
				<div
					className={`relative ${
						selectedTab !== "green" && "hidden"
					}`}
				>
					<UpNextWordsCard className="-left-5" />
				</div>
			</button>
			{/* <button
                className={`${
                    selectedTab === "red"
                        ? "h-[350px] w-[650px] grid grid-cols-2 content-center"
                        : "h-80 w-64 flex items-center justify-center"
                } shadow-xl bg-[#009fbb] rounded-3xl`}
                onClick={() => {
                    setSelectedTab("red");
                }}
            >
                <div className="flex flex-col items-center justify-center gap-5">
                    <div className="flex flex-row items-center gap-3">
                        <FilmIcon className="size-8 text-white" />
                        <p className="font-bold text-white text-xl">
                            Practice listening
                        </p>
                    </div>
                    <div className="h-[130px] w-[130px] rounded-full flex items-center justify-center bg-[#cfeff5]">
                        <div className="h-[110px] w-[110px] rounded-full bg-[#009fbb] flex items-center justify-center">
                            <p className="text-2xl font-bold text-white">0/5</p>
                        </div>
                    </div>
                    <p className="text-xl font-bold text-white">videos</p>
                </div>
                <div
                    className={`relative ${selectedTab !== "red" && "hidden"}`}
                >
                    <UpNextVideoCard className="-left-5" />
                </div>
            </button>
            <button
                className={`${
                    selectedTab === "blue"
                        ? "h-[350px] w-[650px] grid grid-cols-2 content-center"
                        : "h-80 w-64 flex items-center justify-center"
                } shadow-xl bg-[#009fbb] rounded-3xl`}
                onClick={() => {
                    setSelectedTab("blue");
                }}
            >
                <div className="flex flex-col items-center justify-center gap-5">
                    <div className="flex flex-row items-center gap-3">
                        <ChatBubbleOvalLeftEllipsisIcon className="size-8 text-white" />
                        <p className="font-bold text-white text-xl">
                            Practice speaking
                        </p>
                    </div>
                    <div className="h-[130px] w-[130px] rounded-full flex items-center justify-center bg-[#cfeff5]">
                        <div className="h-[110px] w-[110px] rounded-full bg-[#009fbb] flex items-center justify-center">
                            <p className="text-2xl font-bold text-white">0/5</p>
                        </div>
                    </div>
                    <p className="text-xl font-bold text-white">
                        conversations
                    </p>
                </div>
                <div
                    className={`relative ${selectedTab !== "blue" && "hidden"}`}
                >
                    <UpNextConversationCard className="-left-5" />
                </div>
            </button> */}
		</div>
	)
}

WeeklyProgressCardGrid.propTypes = {
	selectedTab: PropTypes.string.isRequired,
	setSelectedTab: PropTypes.func.isRequired
}
