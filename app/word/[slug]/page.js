"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import axios from "axios"
import toast from "react-hot-toast"
import {
	BoltIcon,
	CheckCircleIcon,
	SpeakerWaveIcon
} from "@heroicons/react/24/outline"
import { useRouter } from "next/navigation"

export default function Word({ params }) {
	const { data } = useSession()

	const router = useRouter()

	const [user, setUser] = useState()
	const [currentWord, setCurrentWord] = useState(0)
	const [showQuiz, setShowQuiz] = useState(false)
	const [quiz, setQuiz] = useState()

	useEffect(() => {
		;(async () => {
			await axios
				.get(`/api/students?id=${data?.user?.id}`)
				?.then((res) => {
					console.log(res)
					setUser(res?.data?.data)
				})
				?.catch((err) => {
					console.log(err)
				})
			await axios
				.get(`/api/quiz?id=${params?.slug}`)
				?.then((res) => {
					console.log(res)
					setQuiz(res?.data?.quiz)
				})
				?.catch((err) => {
					console.log(err)
				})
		})()
	}, [params, data])

	const handleCorrectOption = async () => {
		const payload = {
			level: user?.level + 1
		}

		await axios
			.put(`/api/students?id=${data?.user?.id}`, payload)
			?.then((res) => {
				console.log(res)
				toast.success("Correct answer!")
				router?.back()
			})
			?.catch((err) => {
				console.log(err)
				toast.error("Error!")
			})
	}

	const handleFalseOption = () => {
		toast.error("Wrong Answer!")
		router?.back()
	}

	return (
		<div className="flex-1 flex flex-col items-center gap-10">
			<div className="w-full h-16 bg-sky-300 flex flex-row items-center justify-between px-10">
				<p className="text-2xl font-extrabold font-sans underline truncate">
					{quiz?.title}
				</p>
			</div>
			<div className="flex flex-col gap-5 w-[90%] sm:w-[75%]">
				<div className="h-5 w-full bg-gray-100 rounded">
					<div
						className={`h-full rounded bg-sky-500 ${
							currentWord === 0
								? "w-0"
								: currentWord === 1
								? "w-1/3"
								: currentWord === 2 &&
								  (showQuiz ? "w-full" : "w-2/3")
						}`}
					/>
				</div>
				{showQuiz ? (
					<div className="w-full flex flex-col gap-10">
						<p className="text-3xl">Pick the correct answer</p>
						<div className="flex flex-row gap-10 w-full">
							<div className="flex-1 flex flex-col gap-10 items-center">
								<p>{quiz.quizQuestion}</p>
								<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
									<button
										className="h-20 px-3 rounded-xl bg-gray-100 border-b-2 hover:border-b-4 border border-gray-500 transform-gpu ease-in-out duration-300 flex items-center justify-center"
										onClick={handleCorrectOption}
									>
										<p className="text-xl font-bold truncate">
											{quiz?.correctOption}
										</p>
									</button>
									{quiz?.falseOptions?.map((item, key) => {
										return (
											<button
												className="h-20 px-3 rounded-xl bg-gray-100 border-b-2 hover:border-b-4 border border-gray-500 transform-gpu ease-in-out duration-300 flex items-center justify-center"
												key={key}
												onClick={handleFalseOption}
											>
												<p className="text-xl font-bold truncate">
													{item}
												</p>
											</button>
										)
									})}
								</div>
							</div>
							<button
								className="h-40 w-32 rounded-xl bg-gray-100 border-b-2 hover:border-b-4 border border-gray-500 transform-gpu ease-in-out duration-300 hidden md:flex flex-col items-center justify-center gap-3"
								onClick={() => {
									setCurrentWord(0)
									setShowQuiz(false)
								}}
							>
								<p className="text-7xl">?</p>
								<p className="text-lg">I don{"'"}t know</p>
							</button>
						</div>
					</div>
				) : (
					<div className="w-full flex flex-col sm:flex-row gap-5">
						<div className="flex-1 flex flex-col gap-5">
							<p>{quiz?.title}</p>
							<div className="w-full flex justify-end">
								<p className="text-xl font-extrabold">
									{quiz?.words[currentWord]?.word}
								</p>
							</div>
							<p>Meaning</p>
							<p className="text-2xl font-semibold">
								{quiz?.words[currentWord]?.meaning}
							</p>
							<div className="h-[2px] w-full bg-gray-200" />
							<div className="h-16 w-32 rounded bg-gray-100 flex flex-row items-center justify-evenly">
								<SpeakerWaveIcon className="size-10 text-black" />
								<SpeakerWaveIcon className="size-10 text-black" />
							</div>
						</div>
						<div className="size-10 bg-gray-100 rounded-full hidden sm:flex items-center justify-center">
							<BoltIcon className="size-7 text-gray-500" />
						</div>
						<div className="flex flex-col gap-5">
							<button
								className="h-12 w-60 rounded bg-sky-200 border-b-4 border-sky-300 text-white text-lg font-semibold"
								onClick={() => {
									if (currentWord < 2) {
										setCurrentWord(currentWord + 1)
									} else {
										setShowQuiz(true)
									}
								}}
							>
								Continue
							</button>
							<button className="h-12 w-60 rounded flex flex-row gap-5 items-center justify-center border border-black">
								<CheckCircleIcon className="size-8 text-black" />
								<p className="text-lg font-semibold">
									I already know this
								</p>
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
