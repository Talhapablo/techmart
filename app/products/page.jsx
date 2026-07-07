import { getProducts, getCategories } from "../lib/api"
import ProductList from "../components/ProductList";

export default async function ProductsPage() {
    const products = await getProducts();
    const categories = await getCategories();

    return (
        <div className="container">
            <h1>Products</h1>

            <ProductList
                products={products}
                categories={categories}
            />
        </div>
    );
}
