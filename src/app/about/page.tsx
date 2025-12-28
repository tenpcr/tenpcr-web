import AboutClient from "./AboutClient";
import type { Metadata } from "next";

const meta_title = "About me";
const meta_description =
  "a Full Stack Developer with experience in building both web and mobile applications, covering both front-end and back-end development.";

export const generateMetadata = (): Metadata => ({
  metadataBase: process.env.NEXT_PUBLIC_MAIN_BASE_URL,
  title: meta_title,
  description: meta_description,
  keywords: ["about", "tenpcr", "experience", "education", "skills", "awards"],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: meta_title,
    description: meta_description,
    type: "website",
    url: "/about",
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

export default function AboutPage() {
  return <AboutClient />;
}
