"use client";

import { useState } from "react";
import AddCourse from "./add";
import { useCurrentUser } from "@/context/currentUser";

export default function Course() {
    const { currentUser } = useCurrentUser();
    const [addCourseOpen, setAddCourseOpen] = useState(true);
    return (
        <div className="course">
            <h1 className="text-3xl font-bold mb-3">Course</h1>
            <div className="flex justify-end mb-3 gap-3 w-full">
                <button
                    className="bg-green-900 rounded px-3 pt-1.5 text-white shadow hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out" 
                    onClick={() => {setAddCourseOpen(true)}}
                >
                    <span className="material-icons">add</span>
                </button>
                <AddCourse state={addCourseOpen} instructor={currentUser} onClose={() => {setAddCourseOpen(false)}}/>
            </div>
            <div className="">
                <table className="table-fixed w-full border border-gray-300 border-collapse rounded shadow overflow-hidden my-3">
                    <thead>
                        <tr className="bg-green-800 text-left text-white">
                            <th className="w-3/12">Code</th>
                            <th className="w-4/12">Title</th>
                            <th className="w-3/12">Professor</th>
                            <th className="w-2/12">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="py-3">PROG1</td>
                            <td className="py-3">Programming I</td>
                            <td className="py-3">Lloyd Russel Llames</td>
                            <td className="py-3">
                                <div className="justify-center items-center gap-4">
                                    <button>
                                        <span className="material-icons">
                                            edit
                                        </span>
                                    </button>
                                    <button>
                                        <span className="material-icons">
                                            delete
                                        </span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
