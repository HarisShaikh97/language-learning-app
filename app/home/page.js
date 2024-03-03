import Layout from "@/components/layout/Layout"
import DiscountBanner from "@/components/discount-banner/DiscountBanner"

export default function Home() {
  return (
    <Layout>
        <div className="min-h-full flex-1 flex flex-col items-center">
          <DiscountBanner />
          <div className="h-full w-full flex-1 flex flex-col items-center bg-cover bg-center" style={{backgroundImage: "url('/bg-image.svg')"}}>
            <div className="w-[95%] flex flex-row items-center justify-between py-5">
              <p className="text-3xl font-semibold">Weekly progress</p>
              <p className="font-bold text-gray-400">Feb 26 - March 09</p>
            </div>
            <div className="h-[350px] w-[350px] rounded-2xl bg-[#00a778] relative mt-10 mb-40 flex flex-col items-center">
              <div className="absolute -top-12 left-[15px] w-80 flex flex-row items-center justify-between">
                <div className="h-24 w-24 rounded-full bg-[#00a778] shadow-xl flex items-center justify-center">
                  <div className="h-[90px] w-[90px] rounded-full flex items-center justify-center bg-[#b1f7e3]">
                    <div className="h-[77.5px] w-[77.5px] rounded-full bg-[#00a778] flex items-center justify-center">
                      <p className="text-xl font-bold text-white">0/35</p>
                    </div>
                  </div>
                </div>
                <div className="h-20 w-20 rounded-full bg-[#e46962] shadow-xl flex items-center justify-center">
                  <div className="h-[75px] w-[75px] rounded-full flex items-center justify-center bg-[#f5bcb9]">
                    <div className="h-[65px] w-[65px] rounded-full bg-[#e46962] flex items-center justify-center">
                      <p className="font-bold text-white">0/5</p>
                    </div>
                  </div>
                </div>
                <div className="h-20 w-20 rounded-full bg-[#009fbb] shadow-xl flex items-center justify-center">
                  <div className="h-[75px] w-[75px] rounded-full flex items-center justify-center bg-[#cfeff5]">
                    <div className="h-[65px] w-[65px] rounded-full bg-[#009fbb] flex items-center justify-center">
                      <p className="font-bold text-white">0/5</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xl font-bold text-white mt-16">words</p>
              <p className="font-semibold text-white">Build vocabulary</p>
              <div className="absolute top-32 left-[15px] w-80 rounded-2xl bg-slate-800 border-b-8 border-amber-400 flex flex-col gap-5 px-5 py-5">
                <div className="flex flex-row items-center justify-between">
                  <p className="text-lg font-semibold text-white">Up next for you</p>
                  <div className="h-10 w-10 bg-[#00a778] border-2 border-white rounded-full"></div>
                </div>
                <p className="text-white">Learn new words</p>
                <div className="h-32 flex rounded-2xl bg-white hover:bg-gray-100 border-b-4 border-amber-400 relative p-3">
                  <div className="absolute top-3 right-0 bg-amber-300 h-24 w-12 rounded-s-full"></div>
                  <p className="font-semibold text-sm">Deciphering the Letters</p>
                </div>
                <button className="h-14 flex items-center justify-center bg-amber-400 hover:bg-amber-300 border-b-8 border-amber-500 rounded-2xl font-semibold">Continue</button>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}
