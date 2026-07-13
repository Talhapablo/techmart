import { NextResponse } from "next/server";

export function middleware(request) {
    const token = request.cookies.get("token")?.value;
    const pathname = request.nextUrl.pathname;


    if (pathname.startsWith("/cart") && !token) {
        return NextResponse.redirect(
            new URL("/signin", request.url)
        );
    }

    if (
        token &&
        (pathname.startsWith("/signin") ||
            pathname.startsWith("/signup"))
    ) {
        return NextResponse.redirect(
            new URL("/", request.url)
        );
    }

    return NextResponse.next();
}