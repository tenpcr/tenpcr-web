/* eslint-disable @typescript-eslint/no-explicit-any */

import ArticleView from "@/components/article/ArticleView";

type PageProps = {
  params: { slug: string };
};

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const id = slug.split("-").pop();
  const apiBase = process.env.NEXT_PUBLIC_SERVER_BLOG_API;

  if (!apiBase || !id) {
    return {
      title: "บทความ",
      description: "บทความจากเว็บไซต์",
    };
  }

  const res = await fetch(`${apiBase}/wp-json/wp/v2/posts/${id}?_embed`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return {
      title: "ไม่พบบทความ",
      description: "ไม่พบบทความ",
    };
  }

  const post = await res.json();
  const title = post.title?.rendered ?? "ไม่มีชื่อเรื่อง";
  const description =
    post.yoast_head_json?.description ||
    post.excerpt?.rendered?.replace(/<[^>]+>/g, "") ||
    title;
  const featured = post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const image = featured || "/images/tenpcr-cover.webp";

  return {
    metadataBase: process.env.NEXT_PUBLIC_MAIN_BASE_URL,
    title,
    description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_MAIN_BASE_URL}/blog/${
        post.slug ? `${post?.slug}-${post?.id}` : `content-${post?.id}`
      }`,
    },
    openGraph: {
      title,
      description,
      url: `${process.env.NEXT_PUBLIC_MAIN_BASE_URL}/blog/${
        post.slug ? `${post?.slug}-${post?.id}` : `content-${post?.id}`
      }`,
      siteName: "TenPCR",
      type: "article",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "TenPCR",
      images: [image],
    },
  };
}

export default async function BlogViewById({ params }: PageProps) {
  const { slug } = await params;

  const parts = slug.split("-");
  const id = parts.pop();

  const apiBase = process.env.NEXT_PUBLIC_SERVER_BLOG_API;

  if (!apiBase || !id) {
    return <div>ไม่พบข้อมูลบทความ หรือเซิร์ฟเวอร์ขัดข้อง</div>;
  }

  // ----------------------------
  // 1) Load Main Blog Post
  // ----------------------------
  const postRes = await fetch(
    `${apiBase}/wp-json/wp/v2/posts/${id}?_embed`,
    { cache: "no-store" } // เทียบเท่า getServerSideProps
  );

  if (!postRes.ok) {
    return <div>ไม่พบข้อมูลบทความ หรือเซิร์ฟเวอร์ขัดข้อง</div>;
  }

  const post = await postRes.json();

  // ----------------------------
  // 2) Featured Image
  // ----------------------------
  const featured = post?._embedded?.["wp:featuredmedia"]?.[0];
  const image = featured?.source_url ?? "/images/no-image.webp";

  // ----------------------------
  // 3) Tags
  // ----------------------------
  let tags: any[] = [];

  const tagRes = await fetch(`${apiBase}/wp-json/wp/v2/tags?post=${id}`, {
    cache: "no-store",
  });

  if (tagRes.ok) {
    const tagData = await tagRes.json();
    tags = tagData?.map((item: any) => ({ name: item?.name })) ?? [];
  }

  // ----------------------------
  // 4) Map Data
  // ----------------------------
  const mappedBlog = {
    ...post,
    title: post.title?.rendered ?? "ไม่มีชื่อเรื่อง",
    detail: post.content?.rendered ?? "",
    tags,
    thumbnail: image,
    yoast_head_json: post.yoast_head_json ?? null,
  };

  const cssLink = `${apiBase}/wp-content/uploads/elementor/css/post-${id}.css?ver=${Date.now()}`;

  return <ArticleView data={mappedBlog} cssLink={cssLink} />;
}
