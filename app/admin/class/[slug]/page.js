"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import axios from "axios"
import { FallingLines } from "react-loader-spinner"
import toast from "react-hot-toast"
import AdminLayout from "@/components/admin/layout/Layout"

export default function Class({ params }) {
	const router = useRouter()

	const [data, setData] = useState()
	const [isLoading, setIsLoading] = useState()

	useEffect(() => {
		;(async () => {
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

	const handleDelete = async () => {
		setIsLoading(true)
		await axios
			.delete(`/api/classroom?id=${params?.slug}`)
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
			<div className="flex-1 p-10 flex flex-col gap-10">
				<div className="w-full flex flex-row items-center justify-between">
					<p className="text-3xl">Class: {data?.name}</p>
					<button
						className="h-12 w-40 flex items-center justify-center rounded-lg bg-sky-300 border-b-2 hover:border-b-4 border-sky-500 text-white font-semibold transform-gpu ease-in-out duration-150"
						onClick={handleDelete}
					>
						{isLoading ? (
							<FallingLines
								color="#ffffff"
								width="50"
								visible={true}
								ariaLabel="falling-circles-loading"
							/>
						) : (
							"Delete"
						)}
					</button>
				</div>
				<div className="p-5 border border-sky-300 rounded-lg shadow-xl w-full">
					<p>Description: {data?.description}</p>
				</div>
				<p className="text-3xl">Teacher:</p>
				<div className="h-fit max-w-96 p-5 md:p-16 sm:p-10 border border-sky-200 rounded-xl shadow-xl flex flex-col items-center gap-5">
					<Image
						src={data?.teacher?.image || "/profile.png"}
						alt="profile"
						height={150}
						width={150}
						className="rounded-full overflow-hidden"
					/>
					<div className="flex flex-col gap-2 items-center">
						<p className="text-xl font-semibold max-w-52 truncate">{`${
							data?.teacher?.firstName || ""
						} ${data?.teacher?.lastName || ""}`}</p>
						<p className="font-light">{data?.teacher?.email}</p>
						<p className="text-sm font-light">
							{data?.teacher?.phone}
						</p>
					</div>
				</div>
				<p className="text-3xl">Students:</p>
				<div className="w-full max-h-[70vh] flex-1 flex flex-col gap-5 rounded-lg border border-sky-500 py-10 px-5 md:px-10">
					<div className="w-full flex flex-row items-center">
						<div className="w-20 hidden md:flex" />
						<div className="w-full grid grid-cols-2 sm:grid-cols-3 text-lg font-semibold place-items-center">
							<p>Name</p>
							<p className="hidden lg:flex">Email</p>
							<p className="hidden computer:flex">Phone no.</p>
						</div>
					</div>
					<div className="size-full flex flex-col overflow-y-auto scrollbar-none">
						{data?.students?.map((item, key) => {
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
											className="rounded-full overflow-hidden size-10 object-cover"
										/>
									</div>
									<div className="w-full grid grid-cols-2 sm:grid-cols-3 text-sm text-primary place-items-center">
										<p className="truncate max-w-32">{`${item?.firstName} ${item?.lastName}`}</p>
										<p className="hidden lg:flex max-w-40 truncate">
											{item?.email}
										</p>
										<p className="hidden computer:flex">
											{item?.phone}
										</p>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</AdminLayout>
	)
}
