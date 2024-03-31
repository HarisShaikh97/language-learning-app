import Layout from "@/components/layout/Layout"
import LanguageCard from "@/components/language-card/LanguageCard"

export default function MyCourses() {
    return (
        <Layout>
            <div className="flex-1 min-h-full flex flex-col gap-5 p-10">
                <p className="text-2xl font-bold mt-10">Your Courses</p>
                <div className="w-full grid grid-flow-col gap-5">
                    <LanguageCard id={1} name="Arabic Course" flagImage="/arabic-flag.png" image="/bg-image-arabic.jpg" href="/course/1" />
                </div>
            </div>
        </Layout>
    )
}