import { cookies } from "next/headers";

export async function POST() {
  try {
    const cookieStore = await cookies();

    cookieStore.delete("token");

    return Response.json({
      message: "Logout successful",
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