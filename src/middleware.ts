import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Get cookies
    const token = req.cookies.get("authorization")?.value;
    const role = req.cookies.get("role")?.value;

    // Protect home routes
    if (pathname.startsWith("/home")) {
        if (!token) {
            return NextResponse.redirect(new URL("/auth/login", req.url));
        }
        if (role === "doctor") {
            return NextResponse.redirect(new URL("/doctor-home", req.url));
        }
    }

    // Protect doctor-home routes
    if (pathname.startsWith("/doctor-home")) {
        if (!token) {
            return NextResponse.redirect(new URL("/doctor-auth/login", req.url));
        }
        if (role === "user") {
            return NextResponse.redirect(new URL("/home", req.url));
        }
    }

    return NextResponse.next();
}

// Define which paths middleware should run on
export const config = {
    matcher: [
        "/home/:path*",
        "/doctor-home/:path*",
    ],
};