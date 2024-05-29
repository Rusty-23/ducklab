"use client";

import "@/app/globals.css";
import SideBar from "@/layout/sidebar/sidebar";
import NavBar from "@/layout/navbar";
import { useCurrentUser } from "@/context/currentUser";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
    const { currentUser } = useCurrentUser();
    const router = useRouter();

    if (!currentUser) {
        return router.push("/login");
    }

    return (
        <div className="min-h-screen bg-gray-50 flex gap-4">
            <div className="w-72">
                <SideBar />
            </div>
            <div className="flex-1 px-3">
                <NavBar />
                {children}
            </div>
        </div>
    );
}
