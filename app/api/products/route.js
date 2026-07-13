import { prisma } from "@/app/lib/prisma";


export async function GET() {
    try {
        const products = await prisma.product.findMany();

        return Response.json(products);
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



export async function POST(request) {
    try {
        const { title, description, price, image } =
            await request.json();

        // Validation
        if (!title || !description || !price || !image) {
            return Response.json(
                {
                    message: "All fields are required",
                },
                {
                    status: 400,
                }
            );
        }

        const product = await prisma.product.create({
            data: {
                title,
                description,
                price: Number(price),
                image,
            },
        });

        return Response.json(product, {
            status: 201,
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