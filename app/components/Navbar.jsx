"use client";

import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
    const { cart } = useContext(CartContext);

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
            </div>
        </nav>
    );
}