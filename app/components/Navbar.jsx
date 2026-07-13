"use client";

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";


export default function Navbar() {
    const { cart } = useContext(CartContext);
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function getUser() {
            const res = await fetch("/api/me");

            if (res.ok) {
                const data = await res.json();
                setUser(data);
            }
        }

        getUser();
    }, []);

    async function handleLogout() {
        const res = await fetch("/api/logout", {
            method: "POST",
        });

        const data = await res.json();

        alert(data.message);

        if (res.ok) {
            window.location.href = "/";
        }
    }

    return (
        <nav>
            <div>
                <Link href="/">
                    🛍️ <strong>TechMart</strong>
                </Link>
            </div>

            <div>
                <Link href="/">Home</Link>

                <Link href="/products">Products</Link>

                <Link href="/cart">
                    Cart ({cart.length})
                </Link>

                <Link href="/signin">Sign In</Link>

                <Link href="/signup">Sign Up</Link>

                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </nav>
    );
}