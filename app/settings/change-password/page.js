import { CheckIcon } from "@heroicons/react/16/solid"

export default function ChangePassword() {
    return (
        <div className="w-[650px] rounded-lg bg-white my-10 flex flex-col gap-3 items-center p-3">
            <p className="text-xl font-semibold">Set Password</p>
            <div className="h-[1px] w-full border border-dashed"/>
            <p className="w-full text-sm">You don&apos;t have a password yet - you&apos;ll need to set one up.</p>
            <p className="w-full text-sm font-bold">New Password:</p>
            <ul className="pl-10 list-disc text-sm w-full">
                <li>Your password must contain at least 6 characters.</li>
                <li>Your password must not contain space characters.</li>
            </ul>
            <input className="h-10 w-full rounded-lg border" />
            <p className="w-full text-sm font-bold">New Password:</p>
            <input className="h-10 w-full rounded-lg border" />
            <button className="h-10 w-full rounded-lg bg-sky-300 border-b-2 border-sky-400 flex flex-row items-center justify-center gap-2">
                <CheckIcon className="h-6 w-6 text-white" />
                <p className="text-white font-semibold text-lg">Set</p>
            </button>
        </div>
    )
}