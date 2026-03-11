import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { axiosInstance } from "@/lib/axios";
import { User, ApiResponse } from "@/types/api.types";

export async function proxy(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;
  const { pathname } = request.nextUrl;

  // const isAuthRoute =
  //   pathname.startsWith("/login") || pathname.startsWith("/register");
  // const isDashboardBase = pathname === "/dashboard";

  // // Handle Auth and Dashboard routes
  // if (token) {
  //   const isDashboardRoute = pathname.startsWith("/dashboard");

  //   // If authenticated and trying to access auth routes or any dashboard route
  //   if (isAuthRoute || isDashboardRoute) {
  //     try {
  //       const response = await axiosInstance.get<ApiResponse<{ user: User }>>(
  //         "/auth/me",
  //         {
  //           headers: {
  //             Cookie: `access_token=${token}`,
  //           },
  //         }
  //       );

  //       const role = response.data.data?.user?.account?.roles?.[0];

  //       // 1. Handle Auth Route Redirection (if logged in, go to your dashboard)
  //       if (isAuthRoute || isDashboardBase) {
  //         if (role === "doctor") {
  //           return NextResponse.redirect(
  //             new URL("/dashboard/doctor", request.url)
  //           );
  //         } else if (role === "hospital") {
  //           return NextResponse.redirect(
  //             new URL("/dashboard/hospitals", request.url)
  //           );
  //         } else if (role === "admin") {
  //           return NextResponse.redirect(
  //             new URL("/dashboard/admin", request.url)
  //           );
  //         }
  //       }

  //       // 2. Handle RBAC for Dashboard Routes
  //       if (isDashboardRoute) {
  //         if (pathname.startsWith("/dashboard/doctor") && role !== "doctor") {
  //           return NextResponse.redirect(new URL("/unauthorized", request.url));
  //         }
  //         if (
  //           pathname.startsWith("/dashboard/hospitals") &&
  //           role !== "hospital"
  //         ) {
  //           return NextResponse.redirect(new URL("/unauthorized", request.url));
  //         }
  //         if (pathname.startsWith("/dashboard/admin") && role !== "admin") {
  //           return NextResponse.redirect(new URL("/unauthorized", request.url));
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user profile in proxy:", error);
  //       // If fetch fails but we have a token, we might want to let it pass or redirect to login
  //       // For now, if dashboard route, redirect to login if we can't verify role
  //       if (isDashboardRoute) {
  //         return NextResponse.redirect(new URL("/login", request.url));
  //       }
  //     }
  //   }
  // }

  // // Protect dashboard routes - requires authentication (token check)
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
