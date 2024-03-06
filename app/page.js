"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Login() {

    const router = useRouter()

    return (
        <div className="h-screen w-screen flex flex-col items-center">
            <div className="h-20 w-full bg-primary bg-opacity-15 flex items-center px-5">
                <Image src={"/logo2.png"} alt="logo" height={100} width={100} />
            </div>
            <p className="text-5xl text-primary font-extrabold w-[450px] text-center my-10">Log in to have fun and learn faster</p>
            <div className="flex flex-col items-center gap-5 w-[450px]">
                <button className="h-10 w-full rounded-full bg-[#4285F4] hover:bg-opacity-75 relative flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full bg-white absolute left-1 top-1 flex items-center justify-center">
                        <Image src={"/google-logo.svg"} alt="logo" height={35} width={35} />
                    </div>
                    <p className="text-white">Sign in with Google</p>
                </button>
                <button className="h-10 w-full rounded-full bg-[#3B5998] hover:bg-opacity-75 relative flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full bg-white absolute left-1 top-1 flex items-center justify-center">
                        <Image src={"/facebook-logo.svg"} alt="logo" height={22.5} width={22.5} />
                    </div>
                    <p className="text-white">Sign in with Facebook</p>
                </button>
                <button className="h-10 w-full rounded-full bg-black hover:bg-opacity-75 relative flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full bg-white absolute left-1 top-1 flex items-center justify-center">
                        <Image src={"/apple-logo.svg"} alt="logo" height={25} width={25} />
                    </div>
                    <p className="text-white">Sign in with Apple</p>
                </button>
            </div>
            <p className="mt-5">or</p>
            <div className="flex flex-col gap-3 w-[450px] mt-5">
                <p className="text-primary text-xs font-bold">Username or Email:</p>
                <div className="h-14 w-full rounded-2xl border-2 border-primary px-3 flex items-center justify-center">
                    <input type="text" placeholder="example@email.com" className="text-xs" style={{outline: 'none', width: '100%'}} />
                </div>
            </div>
            <div className="flex flex-col gap-3 w-[450px] mt-5">
                <p className="text-primary text-xs font-bold">Password:</p>
                <div className="h-14 w-full rounded-2xl border-2 border-primary px-3 flex items-center justify-center">
                    <input type="password" placeholder="**********" className="text-xs" style={{outline: 'none', width: '100%'}} />
                </div>
            </div>
            <div className="flex justify-end w-[450px] mt-5">
                <p className="text-primary underline text-xs cursor-pointer">I forgot my password!</p>
            </div>
            <button className="flex items-center justify-center bg-primary bg-opacity-25 h-14 w-[450px] rounded-lg mt-5 border-b-4 border-gray-400 text-gray-600 hover:text-black transition duration-1000 font-bold"  onClick={() => {router.push("/home")}}>Sign in</button>
            <Link href={"/select-language"} className="underline mt-5">Don{"'"}t have an account? Sign up now!</Link>
        </div>
    )
}