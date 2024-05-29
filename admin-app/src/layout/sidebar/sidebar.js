"use client";
import SidebarItem from "./item";
import { usePathname } from "next/navigation";
import { paths } from "@/paths";

export default function SideBar() {
    return (
        <aside className="my-3 mx-4">
            <div className="bg-gradient-to-br from-green-800 to-green-900  h-[calc(100vh-32px)] rounded-xl">
                <div className="border-b border-white">
                    <a className="flex items-center gap-4 py-6 px-8" href="#">
                        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
                            Duck Labs
                        </h6>
                    </a>
                </div>
                <div className="m-4">
                    <ul className="mb-4 flex flex-col gap-1">
                        {paths.map((path) => (
                            <SidebarItem
                                key={path.label}
                                label={path.label}
                                href={path.href}
                                isActive={path.href === usePathname()}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    );
}
