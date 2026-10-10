import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";

const COOKIE_NAME = "NEXT_LOCALE";

function detectLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(COOKIE_NAME)?.value;
  if (isLocale(cookie)) return cookie;

  const header = request.headers.get("accept-language") ?? "";
  for (const chunk of header.split(",")) {
    const code = chunk.split(";")[0]?.trim().toLowerCase() ?? "";
    if (code.startsWith("kk") || code.startsWith("kz")) return "kz";
    if (code.startsWith("ru")) return "ru";
    if (code.startsWith("en")) return "en";
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];

  if (isLocale(first)) {
    return NextResponse.next();
  }

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, API routes and any request containing a file extension.
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
