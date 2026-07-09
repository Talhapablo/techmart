"use client";

import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Image from "next/image";


export default function ProductCard({ product }) {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="card">
            <Image
                src={product.thumbnail}
                alt={product.title}
                width={200}
                height={200}
                style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "220px",
                }}
            />

            <h2>{product.title}</h2>

            <p className="rating">
                ⭐⭐⭐⭐☆
            </p>

            <h3 className="price">
                ${product.price}
            </h3>

            <div className="card-buttons">
                <Link href={`/products/${product.id}`}>
                    <button>
                        View Details
                    </button>
                </Link>

                <button onClick={() => addToCart(product)}>
                    Add To Cart
                </button>
            </div>
        </div>
    );
}