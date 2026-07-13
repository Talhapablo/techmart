"use client"

import { useState } from "react"

export default function AddProductPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    async function handleSubmit() {
        const res = await fetch("/api/products", {
            method: "POST",
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

        const data = await res.json();

        alert("Product Added!");

        console.log(data);
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>Add Product</h1>

            <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <br /><br />

            <input
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
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />

            <br /><br />

            <button onClick={handleSubmit}>
                Add Product
            </button>
        </div>
    );
}
