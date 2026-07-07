"use client"

export default function CategoryFilter({
    category,
    setCategory,
    categories,
}) {
    return (
        <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
        >
            <option value="all">
                All Categories
            </option>

            {categories.map((cat) => (
                <option key={cat} value={cat}>
                    {cat}
                </option>
            ))}
        </select>
    )
}