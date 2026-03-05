import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;

  const { pathname } = request.nextUrl;

  // // Prevent authenticated users from visiting login or register pages
  // const isAuthRoute =
  //   pathname.startsWith("/login") || pathname.startsWith("/register");
  // if (token && isAuthRoute) {
  //   // Usually redirect them to dashboard or home
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  // // Protect dashboard routes - requires authentication
  // const isDashboardRoute = pathname.startsWith("/dashboard");
  // if (!token && isDashboardRoute) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  // Allow all other routes to proceed normally
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico etc.
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
