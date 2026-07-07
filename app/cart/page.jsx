"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Image from "next/image";

export default function CartPage() {
    const {
        cart,
        setCart,
        increaseQuantity,
        decreaseQuantity,
    } = useContext(CartContext);

    function removeFromCart(id) {
        const updatedCart = cart.filter(
            (product) => product.id !== id
        );

        setCart(updatedCart);
    }

    function clearCart() {
        setCart([]);
    }

    const totalPrice = cart.reduce(
        (total, product) =>
            total + product.price * product.quantity,
        0
    );

    return (
        <div className="container">
            <h1>🛒 Shopping Cart</h1>

            {cart.length === 0 ? (
                <div className="card">
                    <p>Your cart is currently empty.</p>
                </div>
            ) : (
                <>
                    {cart.map((product) => (
                        <div key={product.id} className="card cart-item">

                            <Image
                                src={product.image}
                                alt={product.title}
                                width={120}
                                height={120}
                                style={{
                                    ObjectFit: "contain",
                                }}
                            />

                            <h3>{product.title}</h3>

                            <p className="rating">
                                ⭐⭐⭐⭐☆
                            </p>

                            <h3 className="price">
                                ${product.price}
                            </h3>

                            <div className="cart-controls">
                                <button
                                    onClick={() =>
                                        decreaseQuantity(product.id)
                                    }
                                >
                                    -
                                </button>

                                <span className="quantity">
                                    {product.quantity}
                                </span>

                                <button
                                    onClick={() =>
                                        increaseQuantity(product.id)
                                    }
                                >
                                    +
                                </button>
                            </div>

                            <button
                                onClick={() =>
                                    removeFromCart(product.id)
                                }
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    <div className="card">
                        <h2>Total: ${totalPrice.toFixed(2)}</h2>

                        <br />

                        <button onClick={clearCart}>
                            Empty Cart
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}