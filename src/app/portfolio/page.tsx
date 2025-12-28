import { Suspense } from "react";
import PortflioClient from "./PortflioClient";
import type { Metadata } from "next";

const meta_title = "Portfolio";
const meta_description = "รวมผลงาน, โปรเจกต์ และตัวอย่างงานของ Tenpcr";

export const generateMetadata = (): Metadata => ({
  metadataBase: process.env.NEXT_PUBLIC_MAIN_BASE_URL,
  title: meta_title,
  description: meta_description,
  keywords: ["portfolio", "tenpcr", "project", "work", "web", "app"],
  alternates: {
    canonical: process.env.NEXT_PUBLIC_MAIN_BASE_URL + "/portfolio",
  },
  openGraph: {
    title: meta_title,
    description: meta_description,
    type: "website",
    url: process.env.NEXT_PUBLIC_MAIN_BASE_URL + "/portfolio",
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

export default function PortfolioPage() {
  return (
    <Suspense fallback={<div></div>}>
      <PortflioClient />
    </Suspense>
  );
}
