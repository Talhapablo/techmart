import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
      return Response.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(token, "my-secret-key");

    console.log(decoded);

    const user = await prisma.user.findUnique({
  where: {
    id: decoded.id,
  },
  select: {
    id: true,
    name: true,
    email: true,
    createdAt: true,
  },
});

    return Response.json(user);

  } catch (error) {
    console.log(error);

    return Response.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}