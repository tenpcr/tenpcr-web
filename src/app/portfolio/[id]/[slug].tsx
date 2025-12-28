/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSideProps } from "next";
import axios from "axios";
import PortfolioView from "@/components/portfolio/PortfolioView";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query as { id: string };
  const apiBase = process.env.NEXT_PUBLIC_SERVER_BLOG_API;

  if (!apiBase) {
    return { props: { status: "error", data: null } };
  }

  // ----------------------------
  // 1) Fetch Main Post
  // ----------------------------
  const postRes = await axios
    .get(`${apiBase}/wp-json/wp/v2/portfolio/${id}?_embed`, {
      validateStatus: () => true,
    })
    .catch(() => null);

  if (!postRes || postRes.status !== 200) {
    return { props: { status: "error", data: null } };
  }

  const post = postRes.data;

  // ----------------------------
  // 2) Fetch Featured Image
  // ----------------------------
  let image = "/images/no-image.webp";

  if (post.featured_media) {
    const mediaRes = await axios
      .get(`${apiBase}/wp-json/wp/v2/media/${post.featured_media}`, {
        validateStatus: () => true,
      })
      .catch(() => null);

    if (mediaRes?.status === 200) {
      image = mediaRes.data?.guid?.rendered ?? image;
    }
  }

  const tags = post?._embedded?.["wp:term"]
    ?.flat()
    ?.filter((t: any) => t?.taxonomy === "portfolio-tags");

  // ----------------------------
  // 4) Fetch Catgories
  // ----------------------------
  const categoriesRes = await axios
    .get(`${apiBase}/wp-json/wp/v2/portfolio-categories?post=${id}`, {
      validateStatus: () => true,
    })
    .catch(() => null);

  const categories =
    categoriesRes?.status === 200
      ? categoriesRes?.data?.map((item: any) => ({ ...item })) ?? []
      : [];

  // ----------------------------
  // 5) Map Data
  // ----------------------------
  const mappedBlog = {
    ...post,
    title: post?.title?.rendered ?? "ไม่มีชื่อเรื่อง",
    detail: post?.content?.rendered ?? "",
    image,
    tags,
    categories,
    yoast_head_json: post?.yoast_head_json ?? null,
  };

  return {
    props: {
      status: "ok",
      data: mappedBlog,
      cssLink: `${apiBase}/wp-content/uploads/elementor/css/post-${id}.css`,
    },
  };
};

// ----------------------------
// Component
// ----------------------------

function PortfolioViewBySlug({
  data,
  cssLink,
}: {
  data: any;
  cssLink: string;
}) {
  if (!data) {
    return <div>ไม่พบข้อมูลบทความ หรือเซิร์ฟเวอร์ขัดข้อง</div>;
  }

  return <PortfolioView data={data} cssLink={cssLink} />;
}

export default PortfolioViewBySlug;
