import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const baseUrl = process.env.NEXT_PUBLIC_MAIN_BASE_URL || "https://example.com";
  const endpointUrl = process.env.NEXT_PUBLIC_SERVER_BLOG_API;

  try {
    const response = await axios.get(`${endpointUrl}/wp-json/wp/v2/posts?per_page=100`);
    const blogs = response.data;

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${blogs
    .map(
      (blog: any) => `
  <url>
    <loc>${baseUrl}/blog/${blog?.slug}-${blog?.id}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("")}
</urlset>`;

    return new NextResponse(sitemap, {
      headers: { "Content-Type": "application/xml" },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("Error generating sitemap", { status: 500 });
  }
}