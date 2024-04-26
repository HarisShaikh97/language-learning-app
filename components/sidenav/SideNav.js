"use client"

import { useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
	RectangleStackIcon,
	PresentationChartLineIcon,
	PresentationChartBarIcon,
	AcademicCapIcon,
	ChevronLeftIcon,
	ChevronRightIcon
} from "@heroicons/react/16/solid"

export default function SideNav() {
	const pathname = usePathname()

	const [collapsed, setCollapsed] = useState(false)

	return (
		<div
			className={`h-full ${
				collapsed ? "w-24" : "w-24 lg:w-60"
			} border-r flex flex-col gap-16 pt-10 relative`}
		>
			<button
				className="size-7 rounded-full border-2 border-primary absolute -right-[14px] bottom-[150px] bg-white hidden lg:flex items-center justify-center z-10"
				onClick={() => {
					setCollapsed(!collapsed)
				}}
			>
				{collapsed ? (
					<ChevronRightIcon className="h-5 w-5 text-primary" />
				) : (
					<ChevronLeftIcon className="h-5 w-5 text-primary" />
				)}
			</button>
			<Image
				src={"/logo2.png"}
				alt="logo"
				height={150}
				width={150}
				className="pl-2 lg:pl-5"
			/>
			<div className="flex-1 flex flex-col">
				{pathname === "/home" ? (
					<div className="flex flex-row items-center justify-between h-16 bg-gray-100">
						<div className="flex flex-row lg:gap-5 items-center pl-5">
							<RectangleStackIcon className="size-5 text-primary" />
							{!collapsed && (
								<p className="hidden lg:flex text-lg text-primary font-semibold">
									Home
								</p>
							)}
						</div>
						<div className="h-full w-2 bg-sky-400 rounded-s-full" />
					</div>
				) : (
					<Link
						href={"/home"}
						className="flex flex-row lg:gap-5 items-center h-16 pl-5 hover:bg-gray-50"
					>
						<RectangleStackIcon className="size-5 text-primary" />
						{!collapsed && (
							<p className="hidden lg:flex text-lg text-primary font-semibold">
								Home
							</p>
						)}
					</Link>
				)}
				{pathname === "/my-classes" ? (
					<div className="flex flex-row items-center justify-between h-16 bg-gray-100">
						<div className="flex flex-row lg:gap-5 items-center pl-5">
							<PresentationChartLineIcon className="size-5 text-primary" />
							{!collapsed && (
								<p className="hidden lg:flex text-lg text-primary font-semibold">
									My Classes
								</p>
							)}
						</div>
						<div className="h-full w-2 bg-sky-400 rounded-s-full" />
					</div>
				) : (
					<Link
						href={"/my-classes"}
						className="flex flex-row lg:gap-5 items-center h-16 pl-5 hover:bg-gray-50"
					>
						<PresentationChartLineIcon className="size-5 text-primary" />
						{!collapsed && (
							<p className="hidden lg:flex text-lg text-primary font-semibold">
								My Classes
							</p>
						)}
					</Link>
				)}
				{pathname === "/all-classes" ? (
					<div className="flex flex-row items-center justify-between h-16 bg-gray-100">
						<div className="flex flex-row lg:gap-5 items-center pl-5">
							<PresentationChartBarIcon className="size-5 text-primary" />
							{!collapsed && (
								<p className="hidden lg:flex text-lg text-primary font-semibold">
									All Classes
								</p>
							)}
						</div>
						<div className="h-full w-2 bg-sky-400 rounded-s-full" />
					</div>
				) : (
					<Link
						href={"/all-classes"}
						className="flex flex-row lg:gap-5 items-center h-16 pl-5 hover:bg-gray-50"
					>
						<PresentationChartBarIcon className="size-5 text-primary" />
						{!collapsed && (
							<p className="hidden lg:flex text-lg text-primary font-semibold">
								All Classes
							</p>
						)}
					</Link>
				)}
				{pathname === "/learning-mode" ? (
					<div className="flex flex-row items-center justify-between h-16 bg-gray-100">
						<div className="flex flex-row lg:gap-5 items-center pl-5">
							<AcademicCapIcon className="size-5 text-primary" />
							{!collapsed && (
								<p className="hidden lg:flex text-lg text-primary font-semibold">
									Learning Mode
								</p>
							)}
						</div>
						<div className="h-full w-2 bg-sky-400 rounded-s-full" />
					</div>
				) : (
					<Link
						href={"/learning-mode"}
						className="flex flex-row lg:gap-5 items-center h-16 pl-5 hover:bg-gray-50"
					>
						<AcademicCapIcon className="size-5 text-primary" />
						{!collapsed && (
							<p className="hidden lg:flex text-lg text-primary font-semibold">
								Learning Mode
							</p>
						)}
					</Link>
				)}
			</div>
		</div>
	)
}
