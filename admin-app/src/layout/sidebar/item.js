"use client";
import Link from "next/link";

export default function SidebarItem({ label, href="#", isActive }) {
    const defaultClasses =
        "middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg w-full flex items-center gap-4 px-4 capitalize";
    return (
        <Link
            className={`${defaultClasses} ${
                isActive
                    ? "bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85]"
                    : "text-white hover:bg-white/10 active:bg-white/30"
            }`}
            href={href}
        >
            {label}
        </Link>
    );
}
