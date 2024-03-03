"use client"

import SideNav from "../sidenav/SideNav"
import Header from "../header/Header"

export default function Layout({ children }) {    
    return (
        <div className="h-screen w-screen flex flex-row">
            <SideNav />
            <div className="w-full flex-1 flex flex-col">
                <Header />
                <div className="flex-1 overflow-y-auto scrollbar-none">{children}</div>
            </div>
        </div>
    )
} 