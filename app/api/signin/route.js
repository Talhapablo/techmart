import { cookies } from "next/headers";
import { prisma } from "@/app/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Validation
    if (!email || !password) {
      return Response.json(
        { message: "Email and Password are required" },
        { status: 400 }
      );
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    // User not found
    if (!user) {
      return Response.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Compare password
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return Response.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Generate JWT
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      "my-secret-key",
      {
        expiresIn: "7d",
      }
    );

    const cookieStore = await cookies();

    cookieStore.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
    });

    return Response.json({
        message: "Login succesful",
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