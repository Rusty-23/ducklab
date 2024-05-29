"use client";

import { useCurrentUser } from "@/context/currentUser";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const [isInvalid, setIsInvalid] = useState(false);
    const { currentUser, setLogin } = useCurrentUser();
    if (currentUser) {
        console.log(currentUser);
        useRouter().push("/");
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const username = data.get("username");
        const password = data.get("password");

        fetch(
            "http://localhost/xampploc/Llames/duck-labs/api/admin/instructor.php",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password, login: true }),
            }
        ).then((response) => {
            response.json().then((data) => {
                if (data.id) {
                    setLogin(data);
                } else {
                    setIsInvalid(true);
                }
            });
        });
    };
    return (
        <div className="login bg-gray-100">
            <div className="flex justify-center items-center h-screen">
                <form
                    className="bg-white shadow-md rounded"
                    onSubmit={handleSubmit}
                >
                    <h1 className="text-3xl font-bold mb-6 px-8 pt-8">Login</h1>
                    {isInvalid && (
                        <p className="bg-red-500 text-white mb-4 p-3">
                            Invalid username or password
                        </p>
                    )}
                    <div className="px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="username"
                            >
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                name="username"
                                type="text"
                                placeholder="Username"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                name="password"
                                type="password"
                                placeholder="password"
                                required
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
