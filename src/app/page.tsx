import { Suspense } from "react";
import MainClient from "./MainClient";
import type { Metadata } from "next";

const meta_title = "Pachara Peerakuntanet";
const meta_description =
  "With over 13 years of experience in graphic design, video production, digital marketing, event organization, and web development.";

export const generateMetadata = (): Metadata => ({
  metadataBase: process.env.NEXT_PUBLIC_MAIN_BASE_URL,
  title: meta_title,
  description: meta_description,
  keywords: [
    "tenpcr",
    "ten",
    "เท็น",
    "pachara peerakuntanet",
    "พชร พีรกุลธเนศ",
    "full stack developer",
    "programmer",
    "software engineer",
  ],
  alternates: {
    canonical: process.env.NEXT_PUBLIC_MAIN_BASE_URL,
  },
  openGraph: {
    title: meta_title,
    description: meta_description,
    type: "website",
    url: process.env.NEXT_PUBLIC_MAIN_BASE_URL,
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
      <MainClient />
    </Suspense>
  );
}
