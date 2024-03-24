"use client"

import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Signup() {

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();

        // Call signIn method from NextAuth with Google provider
        await signIn('google', { callbackUrl: '/home' });
    };

    const handleSignUp = async (e) => {
        e.preventDefault();

        const payload = {
            email: email,
            password: password
        }

        await axios.post("/api/user-signup", payload).then((res) => {
            console.log(res);
            router.push("/login")
        }).catch((err) => {console.log("Error:", err);})
    }

    return (
        <div className="h-screen max-w-screen flex flex-col items-center">
            <div className="h-20 w-full bg-primary bg-opacity-15 flex flex-row justify-between items-center pl-5 pr-10">
                <Image src={"/logo2.png"} alt="logo" height={100} width={100} />
                <Link href={"/login"} className=" h-12 w-28 rounded-2xl border-b-4 border-amber-500 bg-amber-400 font-bold flex items-center justify-center">Sign in</Link>
            </div>
            <div className="grid grid-cols-2 h-full w-full">
                <div className="bg-contain bg-no-repeat bg-center" style={{ backgroundImage: "url('/signup-image.png')" }} />
                <div className="flex flex-col items-center">
                    <p className="w-[350px] text-3xl text-center font-bold mt-10">Sign up and start learning</p>
                    <div className="flex flex-col items-center gap-5 w-[450px] mt-5">
                        <button onClick={handleGoogleSignIn} className="h-10 w-full rounded-full bg-[#4285F4] hover:bg-opacity-75 relative flex items-center justify-center">
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
                    <p className="mt-10">Or sign up with email</p>
                    <div className="flex flex-col gap-3 w-[450px]">
                        <p className="text-primary text-sm font-bold">Email</p>
                        <div className="h-14 w-full rounded-2xl border-2 border-primary px-3 flex items-center justify-center">
                            <input type="text" placeholder="example@email.com" value={email} onChange={(e) => {setEmail(e.target.value)}} className="text-sm" style={{ outline: 'none', width: '100%' }} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 w-[450px] mt-5">
                        <p className="text-primary text-sm font-bold">Password</p>
                        <div className="h-14 w-full rounded-2xl border-2 border-primary px-3 flex items-center justify-center">
                            <input type="password" placeholder="**********" value={password} onChange={(e) => {setpassword(e.target.value)}} className="text-sm" style={{ outline: 'none', width: '100%' }} />
                        </div>
                    </div>
                    <div className="w-[450px] mt-5">
                        <p className="text-lg font-bold">Make sure your password:</p>
                    </div>
                    <ul className="list-disc w-[400px] mt-5">
                        <li>is 6 characters or longer</li>
                        <li>has no spaces</li>
                    </ul>
                    <button className="flex items-center justify-center bg-primary bg-opacity-25 mb-10 min-h-14 w-[450px] rounded-2xl mt-5 border-b-4 border-gray-400 text-xl text-gray-600 hover:text-black transition duration-1000 font-bold" onClick={handleSignUp}>Sign up, it&apos;s free</button>
                </div>
            </div> 
        </div>
    )
}