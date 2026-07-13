import { prisma } from "@/app/lib/prisma";

export async function GET() {
  try {
    const users = await prisma.user.findMany();

    return Response.json(users);
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}