"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductCard from "./productCard";
import CategoryFilter from "./CategoryFilter";
import SortFilter from "./SortFilter";

export default function ProductList({ products, categories }) {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [sort, setSort] = useState("default");

    // Filter products
    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "all" ||
            product.category === category;

        return matchesSearch && matchesCategory;
    });

    // Copy array before sorting
    const sortedProducts = [...filteredProducts];

    // Sorting
    if (sort === "price-low") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "price-high") {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sort === "a-z") {
        sortedProducts.sort((a, b) =>
            a.title.localeCompare(b.title)
        );
    } else if (sort === "z-a") {
        sortedProducts.sort((a, b) =>
            b.title.localeCompare(a.title)
        );
    }

    return (
        <>
            <SearchBar
                search={search}
                setSearch={setSearch}
            />

            <div className="filters">
                <CategoryFilter
                    category={category}
                    setCategory={setCategory}
                    categories={categories}
                />

                <SortFilter
                    sort={sort}
                    setSort={setSort}
                />
            </div>

            <div className="product-grid">
                {sortedProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </>
    );
}