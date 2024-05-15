"use client"

import { AreaChart, Area, YAxis, XAxis, ResponsiveContainer } from "recharts"
import AdminLayout from "@/components/admin/layout/Layout"

export default function Home() {
	const classes = [
		{
			month: "Jan",
			quantity: 5
		},
		{
			month: "Feb",
			quantity: 8
		},
		{
			month: "Mar",
			quantity: 9
		},
		{
			month: "Apr",
			quantity: 7
		},
		{
			month: "May",
			quantity: 11
		},
		{
			month: "Jun",
			quantity: 13
		},
		{
			month: "Jul",
			quantity: 10
		},
		{
			month: "Aug",
			quantity: 15
		},
		{
			month: "Sep",
			quantity: 13
		},
		{
			month: "Oct",
			quantity: 12
		},
		{
			month: "Nov",
			quantity: 14
		},
		{
			month: "Dec",
			quantity: 16
		}
	]

	const students = [
		{
			month: "Jan",
			quantity: 15
		},
		{
			month: "Feb",
			quantity: 35
		},
		{
			month: "Mar",
			quantity: 20
		},
		{
			month: "Apr",
			quantity: 32
		},
		{
			month: "May",
			quantity: 21
		},
		{
			month: "Jun",
			quantity: 19
		},
		{
			month: "Jul",
			quantity: 43
		},
		{
			month: "Aug",
			quantity: 36
		},
		{
			month: "Sep",
			quantity: 27
		},
		{
			month: "Oct",
			quantity: 41
		},
		{
			month: "Nov",
			quantity: 52
		},
		{
			month: "Dec",
			quantity: 49
		}
	]

	const teachers = [
		{
			month: "Jan",
			quantity: 8
		},
		{
			month: "Feb",
			quantity: 12
		},
		{
			month: "Mar",
			quantity: 14
		},
		{
			month: "Apr",
			quantity: 11
		},
		{
			month: "May",
			quantity: 17
		},
		{
			month: "Jun",
			quantity: 15
		},
		{
			month: "Jul",
			quantity: 10
		},
		{
			month: "Aug",
			quantity: 16
		},
		{
			month: "Sep",
			quantity: 12
		},
		{
			month: "Oct",
			quantity: 9
		},
		{
			month: "Nov",
			quantity: 17
		},
		{
			month: "Dec",
			quantity: 15
		}
	]

	return (
		<AdminLayout>
			<div className="h-fit w-full p-10 mt-10 grid grid-cols-2 gap-10">
				<div className="flex flex-col gap-5">
					<p className="text-xl font-semibold text-primary">
						Students
					</p>
					<div className="h-80 w-full">
						<ResponsiveContainer width="100%" height="100%">
							<AreaChart width={500} height={300} data={students}>
								<YAxis />
								<XAxis dataKey="month" />
								<Area
									type="bump"
									dataKey="quantity"
									fill="#2D9CDB"
									stroke="#2D9CDB"
								/>
							</AreaChart>
						</ResponsiveContainer>
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<p className="text-xl font-semibold text-primary">
						Teachers
					</p>
					<div className="h-80 w-full">
						<ResponsiveContainer width="100%" height="100%">
							<AreaChart width={500} height={300} data={teachers}>
								<YAxis />
								<XAxis dataKey="month" />
								<Area
									type="bump"
									dataKey="quantity"
									fill="#7D9CDB"
									stroke="#7D9CDB"
								/>
							</AreaChart>
						</ResponsiveContainer>
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<p className="text-xl font-semibold text-primary">
						Classes
					</p>
					<div className="h-80 w-full">
						<ResponsiveContainer width="100%" height="100%">
							<AreaChart width={500} height={300} data={classes}>
								<YAxis />
								<XAxis dataKey="month" />
								<Area
									type="bump"
									dataKey="quantity"
									fill="#fD9CDB"
									stroke="#fD9CDB"
								/>
							</AreaChart>
						</ResponsiveContainer>
					</div>
				</div>
			</div>
		</AdminLayout>
	)
}
