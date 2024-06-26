"use client"

import { useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
	ListBulletIcon,
	HomeIcon,
	PresentationChartBarIcon,
	UserGroupIcon,
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
				collapsed ? "w-24" : "w-24 sm:w-60"
			} border-r flex flex-col gap-16 pt-10 relative`}
		>
			<button
				className="h-7 w-7 rounded-full border-2 border-primary absolute -right-[14px] bottom-[150px] bg-white hidden sm:flex items-center justify-center z-50"
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
				height={125}
				width={125}
				className="pl-2 sm:pl-5"
			/>
			<div className="flex-1 flex flex-col">
				{pathname === "/admin/home" ? (
					<div className="flex flex-row items-center justify-between h-16 bg-gray-100">
						<div className="flex flex-row sm:gap-5 items-center pl-5">
							<HomeIcon className="size-5 text-primary" />
							{!collapsed && (
								<p className="hidden sm:flex text-md text-primary font-semibold">
									Home
								</p>
							)}
						</div>
						<div className="h-full w-2 bg-sky-400 rounded-s-full" />
					</div>
				) : (
					<Link
						href={"/admin/home"}
						className="flex flex-row sm:gap-5 items-center h-16 pl-5 hover:bg-gray-50"
					>
						<HomeIcon className="size-5 text-primary" />
						{!collapsed && (
							<p className="hidden sm:flex text-md text-primary font-semibold">
								Home
							</p>
						)}
					</Link>
				)}
				{pathname === "/admin/all-students" ? (
					<div className="flex flex-row items-center justify-between h-16 bg-gray-100">
						<div className="flex flex-row sm:gap-5 items-center pl-5">
							<ListBulletIcon className="size-5 text-primary" />
							{!collapsed && (
								<p className="hidden sm:flex text-md text-primary font-semibold">
									All Students
								</p>
							)}
						</div>
						<div className="h-full w-2 bg-sky-400 rounded-s-full" />
					</div>
				) : (
					<Link
						href={"/admin/all-students"}
						className="flex flex-row sm:gap-5 items-center h-16 pl-5 hover:bg-gray-50"
					>
						<ListBulletIcon className="size-5 text-primary" />
						{!collapsed && (
							<p className="hidden sm:flex text-md text-primary font-semibold">
								All Students
							</p>
						)}
					</Link>
				)}
				{pathname === "/admin/all-classes" ? (
					<div className="flex flex-row items-center justify-between h-16 bg-gray-100">
						<div className="flex flex-row sm:gap-5 items-center pl-5">
							<PresentationChartBarIcon className="size-5 text-primary" />
							{!collapsed && (
								<p className="hidden sm:flex text-md text-primary font-semibold">
									All Classes
								</p>
							)}
						</div>
						<div className="h-full w-2 bg-sky-400 rounded-s-full" />
					</div>
				) : (
					<Link
						href={"/admin/all-classes"}
						className="flex flex-row sm:gap-5 items-center h-16 pl-5 hover:bg-gray-50"
					>
						<PresentationChartBarIcon className="size-5 text-primary" />
						{!collapsed && (
							<p className="hidden sm:flex text-md text-primary font-semibold">
								All Classes
							</p>
						)}
					</Link>
				)}
				{pathname === "/admin/all-teachers" ? (
					<div className="flex flex-row items-center justify-between h-16 bg-gray-100">
						<div className="flex flex-row sm:gap-5 items-center pl-5">
							<UserGroupIcon className="size-5 text-primary" />
							{!collapsed && (
								<p className="hidden sm:flex text-md text-primary font-semibold">
									All Teachers
								</p>
							)}
						</div>
						<div className="h-full w-2 bg-sky-400 rounded-s-full" />
					</div>
				) : (
					<Link
						href={"/admin/all-teachers"}
						className="flex flex-row sm:gap-5 items-center h-16 pl-5 hover:bg-gray-50"
					>
						<UserGroupIcon className="size-5 text-primary" />
						{!collapsed && (
							<p className="hidden sm:flex text-md text-primary font-semibold">
								All Teachers
							</p>
						)}
					</Link>
				)}
				{pathname === "/admin/learning-mode" ? (
					<div className="flex flex-row items-center justify-between h-16 bg-gray-100">
						<div className="flex flex-row sm:gap-5 items-center pl-5">
							<AcademicCapIcon className="size-5 text-primary" />
							{!collapsed && (
								<p className="hidden sm:flex text-md text-primary font-semibold">
									Learning Mode
								</p>
							)}
						</div>
						<div className="h-full w-2 bg-sky-400 rounded-s-full" />
					</div>
				) : (
					<Link
						href={"/admin/learning-mode"}
						className="flex flex-row sm:gap-5 items-center h-16 pl-5 hover:bg-gray-50"
					>
						<AcademicCapIcon className="size-5 text-primary" />
						{!collapsed && (
							<p className="hidden sm:flex text-md text-primary font-semibold">
								Learning Mode
							</p>
						)}
					</Link>
				)}
			</div>
		</div>
	)
}
