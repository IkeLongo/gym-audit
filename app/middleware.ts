import { NextRequest, NextResponse } from "next/server";

function extractGymSlug(host: string) {
  // Strip port if present
  const cleanHost = host.split(":")[0];

  const parts = cleanHost.split(".");
  // Expect: [slug, audit, rivercitycreatives, com]
  if (parts.length < 4) return null;

  const [sub, second] = parts;

  if (second !== "audit") return null;
  if (!sub || sub === "audit") return null;

  return sub;
}

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const slug = extractGymSlug(host);

  console.log("MIDDLEWARE HIT:", { host, slug, path: req.nextUrl.pathname });

  if (!slug) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = url.pathname === "/" ? `/g/${slug}` : `/g/${slug}${url.pathname}`;

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/",
    "/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
