"use client"

import Image from "next/image"
import { UserIcon, LockClosedIcon, XMarkIcon } from "@heroicons/react/16/solid"
import { usePathname } from "next/navigation"

export default function SettingsLayout({children}) {

    const pathname = usePathname()

    return (
        <div className="h-screen w-screen flex flex-col items-center">
            <div className="h-16 w-full bg-primary pl-40 flex items-center">
                <Image src={"/logo2.png"} alt="logo" height={65} width={65} />
            </div>
            <div className="w-full flex-1 flex flex-col items-center overflow-y-auto scrollbar-none">
                <div className="min-h-24 w-full border-b pl-40 flex flex-row items-center gap-16">
                    <p className="text-2xl font-bold text-primary">Settings</p>
                    <div className="flex flex-row items-center gap-10">
                        <div className="flex flex-row gap-5 items-center">
                            <div className={`flex flex-row items-center gap-2 p-3 hover:bg-gray-300 rounded-full ${pathname === "/settings/profile" && "bg-primary bg-opacity-35"}`}>
                                <UserIcon className="h-5 w-5 text-primary" />
                                <p className="text-sm font-semibold text-primary">
                                    Profile
                                </p>
                            </div>
                            <div className="flex flex-row items-center gap-2 p-3 hover:bg-gray-300 rounded-full">
                                <LockClosedIcon className="h-5 w-5 text-primary" />
                                <p className="text-sm font-semibold text-primary">
                                    Password
                                </p>
                            </div>
                            <div className="flex flex-row items-center gap-2 p-3 hover:bg-red-300 rounded-full">
                                <XMarkIcon className="h-5 w-5 text-primary" />
                                <p className="text-sm font-semibold text-primary">
                                    Delete account
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 w-full">{children}</div>
                <div className="w-full flex flex-col items-center">
                    <div
                        className="bg-[url('/footer-curve.svg')] bg-no-repeat bg-center h-16 w-full"
                        style={{ backgroundSize: "100% 100%" }}
                    />
                    <div className="w-full bg-primary flex flex-row gap-16 py-10 pl-20">
                        <div className="flex flex-col items-center gap-5">
                            <Image
                                src={"/logo2.png"}
                                alt="logo"
                                height={200}
                                width={200}
                            />
                            <div></div>
                        </div>
                        <div className="flex flex-col gap-10">
                            <div className="grid grid-cols-4 space-x-10">
                                <div className="flex flex-col gap-3 text-sm font-light text-white">
                                    <p>About Us</p>
                                    <p>Team</p>
                                    <p>Jobs</p>
                                </div>
                                <div className="flex flex-col gap-3 text-sm font-light text-white">
                                    <p>Memrize Blog</p>
                                    <p>Engineering Blog</p>
                                    <p>Press</p>
                                </div>
                                <div className="flex flex-col gap-3 text-sm font-light text-white">
                                    <p>Contact us</p>
                                    <p>FAQ & Help</p>
                                </div>
                                <p className="text-sm font-light text-white">Phrasebooks</p>
                            </div>
                            <div className="flex flex-row gap-5 items-center text-xs text-white">
                                <p>Terms of Use</p>
                                <p>Privacy Policy</p>
                                <p>Cookie Policy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}