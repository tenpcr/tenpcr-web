/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as API from "@/utils/apis";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "../../hooks/useInView";

interface ArticleLists {
  id: number;
  slug?: string;
  title: string;
  thumbnail: string;
  link?: string;
}

interface RawBlogItem {
  id: number;
  slug?: string;
  title: { rendered: string };
  link: string;
  featured_media: string;
  _embedded?: any;
  excerpt: { rendered: string };
  date: string;
  yoast_head_json: any;
}

const imgErrorHandle = (
  event: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  event.currentTarget.src = "/images/no-image.webp";
};

function MainLayoutBlog() {
  const { t } = useTranslation();
  const [blogLists, setBlogList] = useState<ArticleLists[]>([]);
  const [ref, isInView] = useInView<HTMLDivElement>({
    threshold: 0.2,
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const params = { per_page: 4, _embed: true };
        const response = await API.getBlogList(params);

        if (response?.status === 200) {
          const blogListData = await Promise.all(
            response.data.map(async (item: RawBlogItem) => {
              const title = item?.title?.rendered ?? "ไม่มีชื่อเรื่อง";
              const featured = item?._embedded?.["wp:featuredmedia"]?.[0];
              const image = featured?.source_url ?? "/images/no-image.webp";

              return {
                id: item?.id,
                excerpt: item?.excerpt?.rendered ?? "",
                title,
                thumbnail: image,
                slug: item?.slug,
                link: item?.link,
                date: item?.date,
                yoast_head_json: item?.yoast_head_json ?? null,
              };
            })
          );

          setBlogList(blogListData);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      {blogLists?.length > 0 && (
        <div className="w-[1380px] max-w-full px-[20px] mx-auto mt-[70px]">
          <div className="flex justify-center flex-col gap-[20px]">
            <div className="text-[35px]">{t("blog")}</div>

            <div>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : {}} // animate เมื่อเข้า viewport
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-[20px]"
              >
                {" "}
                {blogLists.map((blogItem: ArticleLists, blogIndex: number) => (
                  <Link
                    href={`/blog/${blogItem?.slug || "content"}-${
                      blogItem?.id
                    }`}
                    key={`${blogIndex}_blog?.id`}
                  >
                    <div className="group rounded-[20px] transition delay-100 duration-300 hover:-translate-y-1 hover:scale-107">
                      <div className="aspect-[200/100]">
                        <img
                          src={blogItem?.thumbnail}
                          className="aspect-[200/100] object-cover rounded-[5px]"
                          onError={imgErrorHandle}
                          alt={blogItem?.title}
                        />
                      </div>
                      <div className="py-[20px] ">
                        <div className="text-[22px] line-clamp-2 h-[60px]">
                          {blogItem?.title}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}{" "}
              </motion.div>
            </div>

            <div className="flex justify-center mt-[10px]">
              <Link href="/blog">
                <button className="cursor-pointer rounded-full min-w-[200px] border border-blue-500 hover:bg-blue-500 active:bg-blue-600 py-[10px] px-[15px] text-[16px] text-blue-500 hover:text-white font-regular">
                  More
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MainLayoutBlog;
