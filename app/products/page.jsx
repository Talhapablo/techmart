import ProductList from "../components/ProductList";

export default async function ProductsPage() {
    const res = await fetch("http://localhost:3000/api/products", {
        cache: "no-store",
    });

    const products = await res.json();

    return (
        <div className="container">
            <h1>Products</h1>

            <ProductList products={products} />
        </div>
    );
}