import { StarIcon } from "@heroicons/react/16/solid"

export default function DiscountBanner() {
    return (
        <div className="flex flex-row items-center justify-between h-14 w-[95%] rounded-xl bg-amber-50 hover:bg-amber-100 px-5">
            <div className="flex flex-row items-center gap-5">
                <StarIcon className="h-6 w-6 text-black" />
                <p className="text-lg font-semibold">20% off Pro!</p>
                <p className="text-lg font-light">
                    Full access to all languages
                </p>
            </div>
            <div className="flex flex-row items-center gap-5">
                <p className="text-lg font-light">$104.79/year</p>
                <p className="text-lg font-semibold line-through">
                    $130.99/year
                </p>
                <button className="px-5 py-1 rounded-xl border bg-white font-semibold hover:text-gray-500">
                    Upgrade to Pro
                </button>
            </div>
        </div>
    )
}
