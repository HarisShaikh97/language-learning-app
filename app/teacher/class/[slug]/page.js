"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import axios from "axios"
import { FallingLines } from "react-loader-spinner"
import toast from "react-hot-toast"
import {
	DocumentTextIcon,
	UsersIcon,
	PaperAirplaneIcon
} from "@heroicons/react/24/solid"
import TeacherLayout from "@/components/teacher/layout/Layout"

export default function Class({ params }) {
	const currentDate = new Date()

	const [isLoading, setIsLoading] = useState(false)
	const [selectedTab, setSelectedTab] = useState("stream")
	const [data, setData] = useState()
	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	const [file, setFile] = useState()
	const [dueDate, setDueDate] = useState(
		`${currentDate?.getFullYear()}-${currentDate?.getMonth() < 10
			? `0${currentDate?.getMonth()}`
			: currentDate?.getMonth()
		}-${currentDate?.getDay() < 10
			? `0${currentDate?.getDay()}`
			: currentDate?.getDay()
		}`
	)

	useEffect(() => {
		; (async () => {
			await axios
				.get(`/api/classroom?id=${params?.slug}`)
				?.then((res) => {
					console.log(res)
					setData(res?.data?.Data)
				})
				?.catch((err) => {
					console.log(err)
				})
		})()
	}, [params])

	const handlePost = async () => {
		setIsLoading(true)

		console.log(title, description, dueDate, file)

		const formData = new FormData()
		formData.append("title", title)
		formData.append("description", description)
		formData.append("dueDate", dueDate)
		formData.append("file", file)

		await axios
			.post(`/api/assignment?classId=${params?.slug}`, formData, {
				headers: {
					"Content-Type": "multipart/form-data"
				}
			})
			?.then(async (res) => {
				console.log(res)
				setTitle("")
				setDescription("")
				setFile(null)
				await axios
					.get(`/api/classroom?id=${params?.slug}`)
					?.then((res) => {
						console.log(res)
						setData(res?.data?.Data)
					})
					?.catch((err) => {
						console.log(err)
					})
				toast.success(res?.data?.message)
				setIsLoading(false)
			})
			?.catch((err) => {
				console.log(err)
				toast.error(err?.response?.data?.error)
				setIsLoading(false)
			})
	}

	return (
		<TeacherLayout>
			<div className="h-full flex-1 p-16 flex flex-col items-center gap-10">
				<div className="w-full flex flex-col">
					<div className="h-fit flex flex-col md:flex-row md:items-center">
						<button
							className={`h-12 w-28 flex items-center justify-center transform-gpu ease-in-out duration-300 ${selectedTab === "stream" &&
								"bg-sky-100 border-b-2 border-sky-500 text-sky-500"
								}`}
							onClick={() => {
								if (selectedTab !== "stream") {
									setSelectedTab("stream")
								}
							}}
						>
							Stream
						</button>
						<button
							className={`h-12 w-28 flex items-center justify-center transform-gpu ease-in-out duration-300 ${selectedTab === "classwork" &&
								"bg-sky-100 border-b-2 border-sky-500 text-sky-500"
								}`}
							onClick={() => {
								if (selectedTab !== "classwork") {
									setSelectedTab("classwork")
								}
							}}
						>
							Classwork
						</button>
						<button
							className={`h-12 w-28 flex items-center justify-center transform-gpu ease-in-out duration-300 ${selectedTab === "people" &&
								"bg-sky-100 border-b-2 border-sky-500 text-sky-500"
								}`}
							onClick={() => {
								if (selectedTab !== "people") {
									setSelectedTab("people")
								}
							}}
						>
							People
						</button>
					</div>
					<div className="h-[1px] w-full bg-gray-300 hidden md:flex" />
				</div>
				{selectedTab === "stream" && (
					<div className="size-full flex flex-col gap-10 md:px-20 lg:px-32">
						<div className="min-h-44 w-full bg-sky-300 rounded-xl shadow-xl text-3xl font-sans text-white p-5 flex items-end">
							{data?.name}
						</div>
						<div className="w-full flex flex-row gap-10">
							<div className="h-40 w-64 rounded-xl border border-sky-500 shadow-xl hidden lg:flex flex-col justify-around px-5">
								<p className="font-semibold">Upcoming</p>
								<p className="font-light">No work due soon!</p>
								<button className="place-self-end text-sm hover:underline">
									View all
								</button>
							</div>
							<div className="w-full flex flex-col gap-10">
								<div className="h-fit w-full rounded-xl border border-sky-500 shadow-xl flex flex-col gap-5 p-7">
									<div className="flex flex-row items-center gap-3">
										<p>Title:</p>
										<input
											className="outline-none w-60 border-b border-sky-500 p-1"
											type="text"
											value={title}
											onChange={(e) => {
												setTitle(e.target.value)
											}}
										/>
									</div>
									<div className="min-h-40 flex-1 bg-sky-100 border-b-2 border-sky-500 p-5">
										<textarea
											className="size-full bg-transparent border-none outline-none"
											placeholder="Write some thing to your class..."
											value={description}
											onChange={(e) => {
												setDescription(e.target.value)
											}}
										/>
									</div>
									<div className="flex flex-row items-center gap-3">
										<p>Due date:</p>
										<input
											type="date"
											className="outline-none w-60 border border-sky-300 rounded p-1"
											value={dueDate}
											onChange={(e) => {
												setDueDate(e.target.value)
											}}
										/>
									</div>
									<input
										type="file"
										onChange={(e) => {
											setFile(e.target.files[0])
										}}
									/>
									<button
										className="h-10 w-32 flex items-center justify-center place-self-end rounded-lg bg-sky-300 border-b-2 hover:border-b-4 border-sky-500 text-white font-semibold transform-gpu ease-in-out duration-150"
										onClick={handlePost}
									>
										{isLoading ? (
											<FallingLines
												color="#ffffff"
												width="50"
												visible={true}
												ariaLabel="falling-circles-loading"
											/>
										) : (
											"Post"
										)}
									</button>
								</div>
								{data?.work?.map((item, key) => {
									return (
										<div
											className="py-7 rounded-xl border border-sky-500 shadow-xl flex flex-col gap-5 mb-16"
											key={key}
										>
											<div className="flex flex-row items-center gap-5 px-7">
												<Image
													src={
														data?.teacher?.image ||
														"/profile.png"
													}
													alt="profile"
													height={50}
													width={50}
												/>
												<div className="flex flex-col">
													<p className="font-semibold">
														{`${data?.teacher?.firstName} ${data?.teacher?.lastName}`}
													</p>
													<p className="text-sm font-light">
														{item?.dueDate}
													</p>
												</div>
											</div>
											<p className="px-7">
												{item?.title}
											</p>
											<p className="text-wrap text-xs px-7">
												{item?.description}
											</p>
											<div className="h-[1px] w-full bg-sky-500 my-2" />
											<div className="flex flex-row gap-2 items-center text-sky-500 px-7">
												<UsersIcon className="size-5" />
												<p>
													{item?.comments?.length ||
														0}{" "}
													class comments
												</p>
											</div>
											{item?.comments?.map(
												(comment, index) => {
													return (
														<div
															className="flex flex-row gap-5 px-7"
															key={index}
														>
															<Image
																src={
																	"/profile.png"
																}
																alt="profile"
																height={50}
																width={50}
																className="size-[50px]"
															/>
															<div className="flex flex-col gap-3">
																<div className="flex flex-row gap-3 items-center">
																	<p>
																		Alex
																		Wayne
																	</p>
																	<p className="text-xs font-light text-gray-500">
																		Jun 07,
																		2023
																	</p>
																</div>
																<p className="text-wrap text-xs">
																	{
																		comment?.description
																	}
																</p>
															</div>
														</div>
													)
												}
											)}
											<div className="px-7 w-full flex flex-row gap-5 items-center">
												<Image
													src={
														data?.teacher?.image ||
														"/profile.png"
													}
													alt="profile"
													height={50}
													width={50}
													className="size-[50px]"
												/>
												<div className="h-12 w-full rounded-full border flex items-center justify-center px-3">
													<input
														type="text"
														className="w-full bg-transparent outline-none"
														placeholder="Type your comment..."
													/>
												</div>
												<button>
													<PaperAirplaneIcon className="size-8 text-sky-500" />
												</button>
											</div>
										</div>
									)
								})}
							</div>
						</div>
					</div>
				)}
				{selectedTab === "classwork" && (
					<div className="h-full w-full md:w-[75%] lg:w-[55%] flex flex-col overflow-y-auto scrollbar-none">
						{data?.work?.map((item, key) => {
							return (
								<div className="w-full flex flex-col" key={key}>
									<div className="h-20 w-full flex flex-row items-center justify-between">
										<div className="flex flex-row gap-3 items-center">
											<div className="size-12 bg-sky-100 rounded-full flex items-center justify-center">
												<DocumentTextIcon className="size-7 text-sky-300" />
											</div>
											<p>{item?.title}</p>
										</div>
										<p className="text-sm text-gray-300 md:flex hidden">
											Posted{" "}
											{item?.createdAt?.slice(0, 10)}
										</p>
									</div>
									<div className="h-[1px] w-full bg-gray-300" />
								</div>
							)
						})}
					</div>
				)}
				{selectedTab === "people" && (
					<div className="h-full w-full md:w-[75%] lg:w-[55%] flex flex-col overflow-y-auto scrollbar-none">
						<p className="text-3xl text-sky-500">Teacher</p>
						<div className="min-h-[1px] w-full bg-sky-500 my-5" />
						<div className="flex flex-row items-center gap-7">
							<Image
								src={data?.teacher?.image || "/profile.png"}
								alt="profile"
								height={35}
								width={35}
								className="rounded-full overflow-hidden size-10 object-cover"
							/>
							<p>{`${data?.teacher?.firstName} ${data?.teacher?.lastName}`}</p>
						</div>
						<p className="text-3xl text-sky-500 mt-10">Students</p>
						<div className="min-h-[1px] w-full bg-sky-500 my-5" />
						<div className="flex flex-col gap-5">
							{data?.students?.map((item, key) => {
								return (
									<div
										className="flex flex-row items-center gap-7"
										key={key}
									>
										<Image
											src={item?.image || "/profile.png"}
											alt="profile"
											height={35}
											width={35}
											className="rounded-full overflow-hidden size-10 object-cover"
										/>
										<p>{`${item?.firstName} ${item?.lastName}`}</p>
									</div>
								)
							})}
						</div>
					</div>
				)}
			</div>
		</TeacherLayout>
	)
}
