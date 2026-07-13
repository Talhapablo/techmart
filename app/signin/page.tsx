"use client";

import { useState } from "react";

export default function SigninPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSignin() {
        const res = await fetch("/api/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await res.json();

        alert(data.message);

        if (res.ok) {
        }
    }

    return (
        <div className="container">
            <div className="card">
                <h1>Sign In</h1>

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />
                <br />

                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br />
                <br />

                <button onClick={handleSignin}>
                    Sign In
                </button>
            </div>
        </div>
    );
}