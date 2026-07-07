import { notFound } from "next/navigation"
import { getProduct } from "../../lib/api"

export async function generateMetadata({ params }) {
    const { id } = await params;

    const product = await getProduct(id);

    return {
        title: product.title,
        description: product.description,
    };
}

export default async function ProductDetailPage({ params }) {
    const { id } = await params;

    const product = await getProduct(id);

    if (!product) {
        notFound();
    }

    return (
        <div className="container">
            <h1>Product Details</h1>

            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
}