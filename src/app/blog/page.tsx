import BlogClient from "./BlogClient";
import type { Metadata } from "next";
import { Suspense } from "react";

const meta_title = "Blog";
const meta_description = "บทความด้านการพัฒนาซอฟต์แวร์และความรู้ด้านโปรแกรมมิ่ง";

export const generateMetadata = (): Metadata => ({
  metadataBase: process.env.NEXT_PUBLIC_MAIN_BASE_URL,
  title: meta_title,
  description: meta_description,
  keywords: ["contact", "tenpcr"],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: meta_title,
    description: meta_description,
    type: "website",
    url: "/blog",
    siteName: "TenPCR",
    images: [
      {
        url: "/images/tenpcr-cover.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta_title,
    description: meta_description,
    images: ["/images/tenpcr-cover.webp"],
  },
});

export default function BlogPage() {
  return (
    <Suspense fallback={<div></div>}>
      <BlogClient />
    </Suspense>
  );
}
