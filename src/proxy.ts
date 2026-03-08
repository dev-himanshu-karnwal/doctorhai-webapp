import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { axiosInstance } from "@/lib/axios";
import { User, ApiResponse } from "@/types/api.types";

export async function proxy(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;
  const { pathname } = request.nextUrl;

  const isAuthRoute =
    pathname.startsWith("/login") || pathname.startsWith("/register");
  const isDashboardBase = pathname === "/dashboard";
  const isRoot = pathname === "/";

  if (token) {
    // If authenticated and trying to access auth routes, root, or base dashboard, redirect based on role
    if (isAuthRoute || isRoot || isDashboardBase) {
      try {
        const response = await axiosInstance.get<ApiResponse<{ user: User }>>(
          "/auth/me",
          {
            headers: {
              Cookie: `access_token=${token}`,
            },
          }
        );

        const role = response.data.data?.user?.account?.roles?.[0];

        if (role === "doctor") {
          return NextResponse.redirect(
            new URL("/dashboard/doctor", request.url)
          );
        } else if (role === "hospital") {
          return NextResponse.redirect(
            new URL("/dashboard/hospitals", request.url)
          );
        } else if (role === "admin") {
          return NextResponse.redirect(
            new URL("/dashboard/admin", request.url)
          );
        }
      } catch (error) {
        console.error("Error fetching user profile in proxy:", error);
      }

      // Fallback if role is not found or fetch fails
      if (isAuthRoute) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    }
  }

  // Protect dashboard routes - requires authentication
  const isDashboardRoute = pathname.startsWith("/dashboard");
  if (!token && isDashboardRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

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
