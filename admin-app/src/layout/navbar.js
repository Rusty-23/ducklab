"use client";

import BreadCrumbs from "@/layout/breadcrumbs";
import { usePathname } from "next/navigation";
import { paths } from "@/paths";
import { useCurrentUser } from "@/context/currentUser";

export default function NavBar() {
  const activePath = paths.find((path) => path.href === usePathname());
  const { setLogin } = useCurrentUser();
  return (
    <nav className="block w-full max-w-full bg-transparent shadow-none rounded-xl transition-all px-0 py-1">
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          {activePath && (
            <>
              <BreadCrumbs label={activePath.label} />
              <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-gray-900">
                {activePath.label}
              </h6>
            </>
          )}
        </div>
        <div className="flex items-center gap-4">
          <button>
            <span className="material-icons">account_circle</span>
          </button>
          <button onClick={() => setLogin(null)}>
            <span className="material-icons">logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
