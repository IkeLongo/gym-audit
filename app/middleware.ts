import { NextRequest, NextResponse } from "next/server";

function extractGymSlug(host: string) {
  // host example: maximstrong.audit.rivercitycreatives.com
  const parts = host.split(".");
  if (parts.length < 4) return null;

  const [sub, second] = parts;

  // Only handle *.audit.rivercitycreatives.com
  if (second !== "audit") return null;

  // If someone visits audit.rivercitycreatives.com (no gym slug)
  if (!sub || sub === "audit") return null;

  return sub;
}

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const slug = extractGymSlug(host);

  if (!slug) return NextResponse.next();

  const url = req.nextUrl.clone();

  // Rewrite every path to be under /g/[slug]
  // / -> /g/slug
  // /pricing -> /g/slug/pricing
  url.pathname = url.pathname === "/" ? `/g/${slug}` : `/g/${slug}${url.pathname}`;

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)"],
};
