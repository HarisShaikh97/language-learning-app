"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import axios from "axios"
import { EyeIcon, TrashIcon } from "@heroicons/react/24/solid"
import TeacherLayout from "@/components/teacher/layout/Layout"

export default function AllStudents() {
	const router = useRouter()

	const [data, setData] = useState([])

	useEffect(() => {
		;(async () => {
			await axios
				.get("/api/students")
				?.then((res) => {
					console.log(res)
					setData(res?.data?.data)
				})
				?.catch((err) => {
					console.log(err)
				})
		})()
	}, [])

	return (
		<TeacherLayout>
			<div className="size-full flex flex-col px-10 pt-10 pb-20 sm:pb-10">
				<div className="flex flex-col xs:flex-row xs:items-center xs:justify-between xs:h-20 gap-5 xs:gap-0 mb-5 w-full">
					<p className="text-lg font-semibold">All Students</p>
					<Link
						href={"/teacher/add-student"}
						className="h-14 w-32 flex items-center justify-center rounded-lg bg-sky-300 border-b-2 hover:border-b-4 border-sky-500 text-white font-semibold transform-gpu ease-in-out duration-150"
					>
						Add Student
					</Link>
				</div>
				<div className="w-full max-h-[70vh] flex-1 flex flex-col gap-5 rounded-lg border border-sky-500 py-10 px-5 md:px-10">
					<div className="w-full flex flex-row items-center">
						<div className="w-20 hidden md:flex" />
						<div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 computer:grid-cols-5 text-lg font-semibold place-items-center">
							<p>Name</p>
							<p className="hidden lg:flex">Email</p>
							<p className="hidden computer:flex">Phone no.</p>
							<p className="hidden sm:flex">Class</p>
							<p>Action</p>
						</div>
					</div>
					<div className="size-full flex flex-col overflow-y-auto scrollbar-none">
						{data?.map((item, key) => {
							return (
								<div
									className="min-h-20 w-full flex flex-row items-center"
									key={key}
								>
									<div className="size-20 hidden md:flex items-center justify-center">
										<Image
											src={item?.image || "/profile.png"}
											alt="profile"
											height={35}
											width={35}
											className="rounded-full overflow-hidden"
										/>
									</div>
									<div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 computer:grid-cols-5 text-sm text-primary place-items-center">
										<p>{`${item?.firstName} ${item?.lastName}`}</p>
										<p className="hidden lg:flex">
											{item?.email}
										</p>
										<p className="hidden computer:flex">
											{item?.phone}
										</p>
										<div className="hidden sm:flex w-full truncate justify-center">
											{item?.classrooms?.map(
												(classroom, index) => {
													return (
														<p key={index}>
															<span>
																{index > 0 &&
																	", "}
															</span>
															{classroom?.name}
														</p>
													)
												}
											)}
										</div>
										<div className="flex flex-row items-center gap-3">
											<button
												onClick={async () => {
													await axios
														.delete(
															`/api/students?id=${item?._id}`
														)
														?.then(async (res) => {
															toast.success(
																res?.data
																	?.message
															)
															await axios
																.get(
																	"/api/students"
																)
																?.then(
																	(res) => {
																		console.log(
																			res
																		)
																		setData(
																			res
																				?.data
																				?.data
																		)
																	}
																)
																?.catch(
																	(err) => {
																		console.log(
																			err
																		)
																	}
																)
															console.log(res)
														})
														?.catch((err) => {
															console.log(err)
															toast.error(
																err?.response
																	?.data
																	?.message
															)
														})
												}}
											>
												<TrashIcon className="size-6 text-sky-500" />
											</button>
											<button
												onClick={() => {
													router.push(
														`/teacher/student/${item?._id}`
													)
												}}
											>
												<EyeIcon className="size-6 text-sky-500" />
											</button>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</TeacherLayout>
	)
}
