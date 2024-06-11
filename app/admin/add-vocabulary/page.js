"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { FallingLines } from "react-loader-spinner"
import toast from "react-hot-toast"
import AdminLayout from "@/components/admin/layout/Layout"

export default function AddVocabulary() {
	const router = useRouter()

	const [isLoading, setIsLoading] = useState(false)
	const [title, setTitle] = useState("")
	const [firstWord, setFirstWord] = useState("")
	const [firstWordMeaning, setFirstWordMeaning] = useState("")
	const [secondWord, setSecondWord] = useState("")
	const [secondWordMeaning, setSecondWordMeaning] = useState("")
	const [thirdWord, setThirdWord] = useState("")
	const [thirdWordMeaning, setThirdWordMeaning] = useState("")
	const [quizQuestion, setQuizQuestion] = useState("")
	const [correctOption, setCorrectOption] = useState("")
	const [firstFalseOption, setFirstFalseOption] = useState("")
	const [secondFalseOption, setSecondFalseOption] = useState("")
	const [thirdFalseOption, setThirdFalseOption] = useState("")

	const handleSubmit = async (e) => {
		e.preventDefault()

		setIsLoading(true)

		const payload = {
			title: title,
			words: [
				{
					word: firstWord,
					meaning: firstWordMeaning
				},
				{
					word: secondWord,
					meaning: secondWordMeaning
				},
				{
					word: thirdWord,
					meaning: thirdWordMeaning
				}
			],
			quizQuestion: quizQuestion,
			correctOption: correctOption,
			falseOptions: [
				firstFalseOption,
				secondFalseOption,
				thirdFalseOption
			]
		}

		await axios
			.post("/api/quiz", payload)
			?.then((res) => {
				console.log(res)
				toast.success(res?.data?.message)
				setIsLoading(false)
				router?.back()
			})
			?.catch((err) => {
				console.log(err)
				toast.error(err?.response?.data?.error)
				setIsLoading(false)
			})
	}

	return (
		<AdminLayout>
			<div className="h-fit w-full py-10 px-5 xs:px-10 flex flex-col gap-10">
				<div className="flex flex-col gap-5 md:gap-0 md:flex-row md:items-center md:justify-between w-full">
					<p className="text-2xl">Add New Vocabulary</p>
					<div className="flex flex-col sm:flex-row sm:items-center gap-5">
						<button
							className="h-12 w-40 flex items-center justify-center rounded-lg bg-sky-300 border-b-2 hover:border-b-4 border-sky-500 text-white font-semibold transform-gpu ease-in-out duration-150"
							onClick={handleSubmit}
						>
							{isLoading ? (
								<FallingLines
									color="#ffffff"
									width="50"
									visible={true}
									ariaLabel="falling-circles-loading"
								/>
							) : (
								"Save"
							)}
						</button>
						<button
							className="h-12 w-40 flex items-center justify-center rounded-lg border border-b-2 hover:border-b-4 text-primary font-semibold border-primary transform-gpu ease-in-out duration-150"
							onClick={() => {
								router?.back()
							}}
						>
							Cancel
						</button>
					</div>
				</div>
				<div className="h-12 max-w-80 px-5 border-b border-gray-300 flex justify-center">
					<input
						type="text"
						placeholder="Title"
						className="w-full bg-transparent outline-none border-none"
						value={title}
						onChange={(e) => {
							setTitle(e.target.value)
						}}
					/>
				</div>
				<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-10 w-full max-w-[750px]">
					<div className="h-12 w-full px-5 border border-gray-300 rounded-lg flex justify-center">
						<input
							type="text"
							placeholder="Enter First Word"
							className="w-full bg-transparent outline-none border-none"
							value={firstWord}
							onChange={(e) => {
								setFirstWord(e.target.value)
							}}
						/>
					</div>
					<div className="h-12 w-full px-5 border border-gray-300 rounded-lg flex justify-center">
						<input
							type="text"
							placeholder="Enter Meaning"
							className="w-full bg-transparent outline-none border-none"
							value={firstWordMeaning}
							onChange={(e) => {
								setFirstWordMeaning(e.target.value)
							}}
						/>
					</div>
				</div>
				<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-10 w-full max-w-[750px]">
					<div className="h-12 w-full px-5 border border-gray-300 rounded-lg flex justify-center">
						<input
							type="text"
							placeholder="Enter Second Word"
							className="w-full bg-transparent outline-none border-none"
							value={secondWord}
							onChange={(e) => {
								setSecondWord(e.target.value)
							}}
						/>
					</div>
					<div className="h-12 w-full px-5 border border-gray-300 rounded-lg flex justify-center">
						<input
							type="text"
							placeholder="Enter Meaning"
							className="w-full bg-transparent outline-none border-none"
							value={secondWordMeaning}
							onChange={(e) => {
								setSecondWordMeaning(e.target.value)
							}}
						/>
					</div>
				</div>
				<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-10 w-full max-w-[750px]">
					<div className="h-12 w-full px-5 border border-gray-300 rounded-lg flex justify-center">
						<input
							type="text"
							placeholder="Enter Third Word"
							className="w-full bg-transparent outline-none border-none"
							value={thirdWord}
							onChange={(e) => {
								setThirdWord(e.target.value)
							}}
						/>
					</div>
					<div className="h-12 w-full px-5 border border-gray-300 rounded-lg flex justify-center">
						<input
							type="text"
							placeholder="Enter Meaning"
							className="w-full bg-transparent outline-none border-none"
							value={thirdWordMeaning}
							onChange={(e) => {
								setThirdWordMeaning(e.target.value)
							}}
						/>
					</div>
				</div>
				<div className="h-12 max-w-96 px-5 border-b border-gray-300 flex justify-center">
					<input
						type="text"
						placeholder="Enter Quiz Question"
						className="w-full bg-transparent outline-none border-none"
						value={quizQuestion}
						onChange={(e) => {
							setQuizQuestion(e.target.value)
						}}
					/>
				</div>
				<div className="h-12 max-w-80 px-5 border border-gray-300 rounded-lg flex justify-center">
					<input
						type="text"
						placeholder="Enter Correct Option"
						className="w-full bg-transparent outline-none border-none"
						value={correctOption}
						onChange={(e) => {
							setCorrectOption(e.target.value)
						}}
					/>
				</div>
				<div className="h-12 max-w-80 px-5 border border-gray-300 rounded-lg flex justify-center">
					<input
						type="text"
						placeholder="Enter First False Option"
						className="w-full bg-transparent outline-none border-none"
						value={firstFalseOption}
						onChange={(e) => {
							setFirstFalseOption(e.target.value)
						}}
					/>
				</div>
				<div className="h-12 max-w-80 px-5 border border-gray-300 rounded-lg flex justify-center">
					<input
						type="text"
						placeholder="Enter Second False Option"
						className="w-full bg-transparent outline-none border-none"
						value={secondFalseOption}
						onChange={(e) => {
							setSecondFalseOption(e.target.value)
						}}
					/>
				</div>
				<div className="h-12 max-w-80 px-5 border border-gray-300 rounded-lg flex justify-center">
					<input
						type="text"
						placeholder="Enter Third False Option"
						className="w-full bg-transparent outline-none border-none"
						value={thirdFalseOption}
						onChange={(e) => {
							setThirdFalseOption(e.target.value)
						}}
					/>
				</div>
			</div>
		</AdminLayout>
	)
}
