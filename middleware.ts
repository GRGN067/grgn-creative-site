import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isStaticFile =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".");

  if (isStaticFile) {
    return NextResponse.next();
  }

  const hasLangPrefix = pathname.startsWith("/tr") || pathname.startsWith("/en");

  if (!hasLangPrefix) {
    const url = request.nextUrl.clone();
    url.pathname = `/tr${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};