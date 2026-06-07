import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const isStaticExport = process.env.NEXT_PUBLIC_STATIC === "1";
const handler = NextAuth(authOptions);

export const dynamic = isStaticExport ? "force-static" : "force-dynamic";

export function generateStaticParams() {
  return isStaticExport ? [{ nextauth: ["static"] }] : [];
}

export async function GET(...args: Parameters<typeof handler>) {
  if (isStaticExport) {
    return new Response("NextAuth is disabled in static export mode.", { status: 404 });
  }

  return handler(...args);
}

export async function POST(...args: Parameters<typeof handler>) {
  if (isStaticExport) {
    return new Response("NextAuth is disabled in static export mode.", { status: 404 });
  }

  return handler(...args);
}
