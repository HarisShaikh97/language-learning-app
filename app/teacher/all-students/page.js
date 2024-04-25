import Link from "next/link"
import TeacherLayout from "@/components/teacher/layout/Layout"

export default function AllStudents() {
	const data = [
		{
			id: 1,
			name: "Anees Iqbal",
			phone: "+923351234567",
			email: "anees@gmail.com",
			class: "Arabic"
		},
		{
			id: 2,
			name: "Anees Iqbal",
			phone: "+923351234567",
			email: "anees@gmail.com",
			class: "Arabic"
		},
		{
			id: 3,
			name: "Anees Iqbal",
			phone: "+923351234567",
			email: "anees@gmail.com",
			class: "Arabic"
		},
		{
			id: 4,
			name: "Anees Iqbal",
			phone: "+923351234567",
			email: "anees@gmail.com",
			class: "Arabic"
		},
		{
			id: 5,
			name: "Anees Iqbal",
			phone: "+923351234567",
			email: "anees@gmail.com",
			class: "Arabic"
		},
		{
			id: 6,
			name: "Anees Iqbal",
			phone: "+923351234567",
			email: "anees@gmail.com",
			class: "Arabic"
		},
		{
			id: 7,
			name: "Anees Iqbal",
			phone: "+923351234567",
			email: "anees@gmail.com",
			class: "Arabic"
		},
		{
			id: 8,
			name: "Anees Iqbal",
			phone: "+923351234567",
			email: "anees@gmail.com",
			class: "Arabic"
		},
		{
			id: 9,
			name: "Anees Iqbal",
			phone: "+923351234567",
			email: "anees@gmail.com",
			class: "Arabic"
		},
		{
			id: 10,
			name: "Anees Iqbal",
			phone: "+923351234567",
			email: "anees@gmail.com",
			class: "Arabic"
		},
		{
			id: 11,
			name: "Anees Iqbal",
			phone: "+923351234567",
			email: "anees@gmail.com",
			class: "Arabic"
		},
		{
			id: 12,
			name: "Anees Iqbal",
			phone: "+923351234567",
			email: "anees@gmail.com",
			class: "Arabic"
		},
		{
			id: 13,
			name: "Anees Iqbal",
			phone: "+923351234567",
			email: "anees@gmail.com",
			class: "Arabic"
		},
		{
			id: 14,
			name: "Anees Iqbal",
			phone: "+923351234567",
			email: "anees@gmail.com",
			class: "Arabic"
		},
		{
			id: 15,
			name: "Anees Iqbal",
			phone: "+923351234567",
			email: "anees@gmail.com",
			class: "Arabic"
		},
		{
			id: 16,
			name: "Anees Iqbal",
			phone: "+923351234567",
			email: "anees@gmail.com",
			class: "Arabic"
		},
		{
			id: 17,
			name: "Anees Iqbal",
			phone: "+923351234567",
			email: "anees@gmail.com",
			class: "Arabic"
		},
		{
			id: 18,
			name: "Anees Iqbal",
			phone: "+923351234567",
			email: "anees@gmail.com",
			class: "Arabic"
		},
		{
			id: 19,
			name: "Anees Iqbal",
			phone: "+923351234567",
			email: "anees@gmail.com",
			class: "Arabic"
		},
		{
			id: 20,
			name: "Anees Iqbal",
			phone: "+923351234567",
			email: "anees@gmail.com",
			class: "Arabic"
		},
		{
			id: 21,
			name: "Anees Iqbal",
			phone: "+923351234567",
			email: "anees@gmail.com",
			class: "Arabic"
		},
		{
			id: 22,
			name: "Anees Iqbal",
			phone: "+923351234567",
			email: "anees@gmail.com",
			class: "Arabic"
		},
		{
			id: 23,
			name: "Anees Iqbal",
			phone: "+923351234567",
			email: "anees@gmail.com",
			class: "Arabic"
		},
		{
			id: 24,
			name: "Anees Iqbal",
			phone: "+923351234567",
			email: "anees@gmail.com",
			class: "Arabic"
		},
		{
			id: 25,
			name: "Anees Iqbal",
			phone: "+923351234567",
			email: "anees@gmail.com",
			class: "Arabic"
		},
		{
			id: 26,
			name: "Anees Iqbal",
			phone: "+923351234567",
			email: "anees@gmail.com",
			class: "Arabic"
		}
	]

	return (
		<TeacherLayout>
			<div className="size-full flex flex-col p-10">
				<div className="flex flex-row items-center justify-between h-20 w-full">
					<p className="text-lg font-semibold">All Students</p>
					<Link
						href={"/teacher/add-student"}
						className="p-3 rounded-lg bg-sky-300 border-b-2 hover:border-b-4 border-sky-500 text-white font-semibold transform-gpu ease-in-out duration-150"
					>
						Add Student
					</Link>
				</div>
				<div className="w-full max-h-[70vh] flex-1 flex flex-col gap-5 rounded-lg border border-sky-500 p-10">
					<div className="w-full grid grid-cols-4 text-lg font-semibold">
						<p>Name</p>
						<p>Email</p>
						<p>Phone no.</p>
						<p>Class</p>
					</div>
					<div className="size-full flex flex-col gap-3 overflow-y-auto scrollbar-none">
						{data?.map((item, key) => {
							return (
								<div
									className="w-full grid grid-cols-4 text-sm text-primary"
									key={key}
								>
									<p>{item?.name}</p>
									<p>{item?.email}</p>
									<p>{item?.phone}</p>
									<p>{item?.class}</p>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</TeacherLayout>
	)
}
