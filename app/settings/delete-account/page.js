import { XMarkIcon } from "@heroicons/react/16/solid"

export default function DeleteAccount() {
    return (
        <div className="w-[650px] rounded-lg bg-white my-10 flex flex-col gap-3 items-center p-3">
            <p className="text-xl font-semibold">Set Password</p>
            <div className="h-[1px] w-full border border-dashed"/>
            <p className="w-full text-sm">To assure the highest level of data protection, deleting your account will delete all personal identifiable information linked with the account. It{"'"}s an irreversible action that can not be undone.</p>
            <div className="h-[1px] w-full border border-dashed"/>
            <div className="flex flex-row items-center gap-3 w-full">
                <input type="checkbox" />
                <p className="font-semibold text-sm font-sans">I'm sure I want to delete my account</p>
            </div>
            <button className="h-12 w-full rounded-lg bg-red-400 flex flex-row items-center justify-center gap-2">
                <XMarkIcon className="h-6 w-6 text-white" />
                <p className="text-white font-semibold text-lg">Delete Account</p>
            </button>
        </div>
    )
}