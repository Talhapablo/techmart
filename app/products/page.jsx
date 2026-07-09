import { getProducts, getCategories } from "../lib/api";

export default async function ProductsPage() {
    const products = await getProducts();
    const categories = await getCategories();

    return (
        <div>
            <h1>Products Test</h1>

            <p>Products: {products.length}</p>

            <p>Categories: {categories.length}</p>

            <pre>{JSON.stringify(products[0], null, 2)}</pre>
        </div>
    );
}
