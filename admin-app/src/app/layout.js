"use client";

import "./globals.css";
import SideBar from "@/layout/sidebar/sidebar";
import NavBar from "@/layout/navbar";
import CurrentUserContextProvider from "@/context/currentUser";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Duck Labs</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>
                <CurrentUserContextProvider>
                    {children}
                </CurrentUserContextProvider>
            </body>
        </html>
    );
}
