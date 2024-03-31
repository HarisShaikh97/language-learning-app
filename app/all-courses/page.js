"use client"

import Layout from "@/components/layout/Layout"
import LanguageCard from "@/components/language-card/LanguageCard"
import coursesData from "@/utils/Data"

export default function AllCourses() {
    return (
        <Layout>
            <div className="flex-1 min-h-full flex flex-col gap-5 p-10">
                <p className="text-2xl font-bold mt-10">Select to add a Course</p>
                <div className="w-full grid grid-flow-row md:grid-cols-3 gap-5">
                    {coursesData?.map((item, key) => {
                        return <LanguageCard id={1} name={item?.title} flagImage={item?.flagImage} image={item?.image} href="/my-courses" key={key} />
                    })}
                </div>
            </div>
        </Layout>
    )
}