"use client"

import Image from "next/image"
import { UserIcon, LockClosedIcon, XMarkIcon } from "@heroicons/react/16/solid"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"

export default function SettingsLayout({children}) {

    const router = useRouter()
    const pathname = usePathname()

    return (
        <div className="h-screen w-screen flex flex-col items-center bg-gray-100">
            <div className="h-16 w-full bg-primary pl-10 sm:pl-20 md:pl-40 flex items-center">
                <Link href="/home">
                    <Image src={"/logo2.png"} alt="logo" height={65} width={65} />
                </Link>
            </div>
            <div className="w-full flex-1 flex flex-col items-center overflow-y-auto scrollbar-none">
                <div className="min-h-64 sm:min-h-32 md:min-h-24 w-full border-b pl-10 sm:pl-20 md:pl-40 flex flex-col md:flex-row justify-center md:justify-start md:items-center gap-5 md:gap-16 bg-white">
                    <p className="text-2xl font-bold text-primary">Settings</p>
                    <div className="flex flex-row items-center gap-10">
                        <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
                            <button 
                                className={`flex flex-row items-center gap-2 p-3 hover:bg-gray-300 rounded-full ${pathname === "/settings/profile" && "bg-primary bg-opacity-35"}`} 
                                onClick={() => {
                                    if(pathname != "/settings/profile") {
                                        router.push("/settings/profile")
                                    }
                                }}
                            >
                                <UserIcon className="h-5 w-5 text-primary" />
                                <p className={`text-sm ${pathname === "/settings/profile" ? "font-bold" : "font-semibold"} text-primary`}>
                                    Profile
                                </p>
                            </button>
                            <button 
                                className={`flex flex-row items-center gap-2 p-3 hover:bg-gray-300 rounded-full ${pathname === "/settings/change-password" && "bg-primary bg-opacity-35"}`} 
                                onClick={() => {
                                    if(pathname != "/settings/change-password") {
                                        router.push("/settings/change-password")
                                    }
                                }}
                            >
                                <LockClosedIcon className="h-5 w-5 text-primary" />
                                <p className={`text-sm ${pathname === "/settings/change-password" ? "font-bold" : "font-semibold"} text-primary`}>
                                    Password
                                </p>
                            </button>
                            <button 
                                className={`flex flex-row items-center gap-2 p-3 hover:bg-red-300 rounded-full ${pathname === "/settings/delete-account" && "bg-red-400"}`} 
                                onClick={() => {
                                    if(pathname != "/settings/delete-account") {
                                        router.push("/settings/delete-account")
                                    }
                                }}
                            >
                                <XMarkIcon className="h-5 w-5 text-primary" />
                                <p className={`text-sm ${pathname === "/settings/delete-account" ? "font-bold" : "font-semibold"} text-primary`}>
                                    Delete account
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex-1 w-full flex items-center justify-center">{children}</div>
                <div className="w-full flex flex-col items-center">
                    <div
                        className="bg-[url('/footer-curve.svg')] bg-no-repeat bg-center h-16 w-full"
                        style={{ backgroundSize: "100% 100%" }}
                    />
                    <div className="w-full bg-primary flex flex-col md:flex-row gap-5 md:gap-16 pb-10 md:pb-0 md:pt-10">
                        <div className="flex flex-col items-center gap-5 md:pl-20">
                            <Image
                                src={"/logo2.png"}
                                alt="logo"
                                height={200}
                                width={200}
                            />
                            <div></div>
                        </div>
                        <div className="flex flex-col gap-10 pl-10 md:pl-0">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
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