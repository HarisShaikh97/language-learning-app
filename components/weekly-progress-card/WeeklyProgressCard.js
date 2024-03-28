import {
	LanguageIcon,
	FilmIcon,
	ChatBubbleOvalLeftEllipsisIcon
} from "@heroicons/react/24/solid"
import PropTypes from "prop-types"
import UpNextWordsCard from "../up-next-words-card/UpNextWordsCard"
import UpNextVideoCard from "../up-next-video-card/UpNextVideoCard"
import UpNextConversationCard from "../up-next-conversation-card/UpNextConversationCard"

export default function WeeklyProgressCard({ selectedTab, setSelectedTab }) {
	return (
		<div
			className={`h-[400px] w-[350px] rounded-2xl ${
				selectedTab === "green"
					? "bg-[#00a778]"
					: selectedTab === "red"
					? "bg-[#e46962]"
					: "bg-[#009fbb]"
			} relative mt-10 mb-40 flex computer:hidden flex-col items-center`}
		>
			<div className="absolute -top-12 left-[15px] w-80 flex flex-row items-center justify-between">
				<button
					className={`${
						selectedTab === "green" ? "h-24 w-24" : "h-20 w-20"
					} rounded-full bg-[#00a778] shadow-xl flex items-center justify-center`}
					onClick={() => {
						setSelectedTab("green")
					}}
				>
					<div
						className={`${
							selectedTab === "green"
								? "h-[90px] w-[90px]"
								: "h-[75px] w-[75px]"
						} rounded-full flex items-center justify-center bg-[#b1f7e3]`}
					>
						<div
							className={`${
								selectedTab === "green"
									? "h-[77.5px] w-[77.5px]"
									: "h-[65px] w-[65px]"
							} rounded-full bg-[#00a778] flex items-center justify-center`}
						>
							<p
								className={`${
									selectedTab === "green" && "text-xl"
								} font-bold text-white`}
							>
								0/35
							</p>
						</div>
					</div>
				</button>
				<button
					className={`${
						selectedTab === "red" ? "h-24 w-24" : "h-20 w-20"
					} rounded-full bg-[#e46962] shadow-xl flex items-center justify-center`}
					onClick={() => {
						setSelectedTab("red")
					}}
				>
					<div
						className={`${
							selectedTab === "red"
								? "h-[90px] w-[90px]"
								: "h-[75px] w-[75px]"
						} rounded-full flex items-center justify-center bg-[#f5bcb9]`}
					>
						<div
							className={`${
								selectedTab === "red"
									? "h-[77.5px] w-[77.5px]"
									: "h-[65px] w-[65px]"
							} rounded-full bg-[#e46962] flex items-center justify-center`}
						>
							<p
								className={`${
									selectedTab === "red" && "text-xl"
								} font-bold text-white`}
							>
								0/5
							</p>
						</div>
					</div>
				</button>
				<button
					className={`${
						selectedTab === "blue" ? "h-24 w-24" : "h-20 w-20"
					} rounded-full bg-[#009fbb] shadow-xl flex items-center justify-center`}
					onClick={() => {
						setSelectedTab("blue")
					}}
				>
					<div
						className={`${
							selectedTab === "blue"
								? "h-[90px] w-[90px]"
								: "h-[75px] w-[75px]"
						} rounded-full flex items-center justify-center bg-[#cfeff5]`}
					>
						<div
							className={`${
								selectedTab === "blue"
									? "h-[77.5px] w-[77.5px]"
									: "h-[65px] w-[65px]"
							} rounded-full bg-[#009fbb] flex items-center justify-center`}
						>
							<p
								className={`${
									selectedTab === "blue" && "text-xl"
								} font-bold text-white`}
							>
								0/5
							</p>
						</div>
					</div>
				</button>
			</div>
			<p className="text-xl font-bold text-white mt-16">
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
	)
}

WeeklyProgressCard.propTypes = {
	selectedTab: PropTypes.string.isRequired,
	setSelectedTab: PropTypes.func.isRequired
}
