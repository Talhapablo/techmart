"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";

export default function EditProductPage({ params }) {
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const { id } = use(params);

    useEffect(() => {
        async function getProduct() {
            const res = await fetch("/api/products");

            const products = await res.json();

            const product = products.find((p) => p.id === id);

            if (product) {
                setTitle(product.title);
                setDescription(product.description);
                setPrice(product.price);
                setImage(product.image);
            }
        }

        getProduct();
    }, [id]);

    async function handleUpdate() {
        const res = await fetch(`/api/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                description,
                price,
                image,
            }),
        });

        if (res.ok) {
            alert("Product Updated Successfully");
            router.push("/products");
        } else {
            alert("Something went wrong");
        }
    }

    return (
        <div className="container">
            <h1>Edit Product</h1>

            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <br /><br />

            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />

            <br /><br />

            <button onClick={handleUpdate}>
                Update Product
            </button>
        </div>
    );
}