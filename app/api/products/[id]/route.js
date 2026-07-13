import { prisma } from "@/app/lib/prisma";

export async function PUT(request, { params }) {
    try {
        const { id } = await params;

        const { title, description, price, image } =
            await request.json();

        const updatedProduct = await prisma.product.update({
            where: {
                id,
            },
            data: {
                title,
                description,
                price: Number(price),
                image,
            },
        });

        return Response.json(updatedProduct);

    } catch (error) {
        console.log(error);

        return Response.json(
            {
                message: "Internal Server Error",
            },
            {
                status: 500,
            }
        );
    }
}

export async function DELETE(request, { params }) {
    try {
        const { id } = await params;

        await prisma.product.delete({
            where: {
                id,
            },
        });

        return Response.json({
            message: "Product Deleted Successfully",
        });

    } catch (error) {
        console.log(error);

        return Response.json(
            {
                message: "Internal Server Error",
            },
            {
                status: 500,
            }
        );
    }
}