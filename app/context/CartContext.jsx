"use client";

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");

        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    function addToCart(product) {
        const existingProduct = cart.find(
            (item) => item.id === product.id
        );

        if (existingProduct) {
            const updatedCart = cart.map((item) =>
                item.id === product.id
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                    : item
            );

            setCart(updatedCart);
        } else {
            setCart([
                ...cart,
                {
                    ...product,
                    quantity: 1,
                },
            ]);
        }
    }

    function increaseQuantity(id) {
        const updatedCart = cart.map((item) =>
            item.id === id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                }
                : item
        );

        setCart(updatedCart);
    }

    function decreaseQuantity(id) {
        const updatedCart = cart
            .map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity - 1,
                    }
                    : item
            )
            .filter((item) => item.quantity > 0);

        setCart(updatedCart);
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}