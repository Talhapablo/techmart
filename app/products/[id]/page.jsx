import { prisma } from "@/app/lib/prisma";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const { id } = await params;

    const product = await prisma.product.findUnique({
        where: {
            id,
        },
    });

    return {
        title: product.title,
        description: product.description,
    };
}

export default async function ProductDetailPage({ params }) {
    const { id } = await params;

    const product = await prisma.product.findUnique({
        where: {
            id,
        },
    });

    if (!product) {
        notFound();
    }

    return (
        <div className="container">
            <h1>Product Details</h1>

            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    );
}