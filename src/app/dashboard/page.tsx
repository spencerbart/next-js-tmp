"use client";

import { useState } from "react";

export default function Dashboard() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleClick = async () => {
        await fetch("/api/dashboard/task", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                description: description
            })
        })
    }

    // const updateTaskHandler = async () => {
    //     const response = await fetch("/api/dashboard/task", {
    //         method: "PUT",
    //         body: JSON.stringify({
    //             name: name,
    //             description: description
    //         })
    //     })
    //     const data = await response.text()
    //     console.log(data)
    // }


    return (
        <div className="p-5">
            <h1>Dashboard</h1>
            <form className="flex flex-col gap-4 max-w-sm">
                <h2>Name</h2>
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <h2>Description</h2>
                <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
            </form>
            <button onClick={handleClick} className="px-3 py-2 hover:bg-slate-300">Add Task</button>
            {/* <button onClick={updateTaskHandler}>Update Task</button> */}
        </div>
    )
}