"use client"

export default function SortFilter({
    sort,
    setSort,
}) {
    return (
        <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
        >
            <option value="default">
                Default
            </option>

            <option value="price-low">
                Price: Low to High
            </option>

            <option value="price-high">
                Price: High to Low
            </option>

            <option value="a-z">
                Name: A to Z
            </option>

            <option value="z-a">
                Name: Z to A
            </option>


        </select>
    )
}