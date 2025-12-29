/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/Header";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import * as blogService from "@/services/blogService";
import BlogItem from "@/components/article/ArticleItem";
import PlaceholderLoading from "react-placeholder-loading";

interface ArticleLists {
  id: number;
  title: string;
  image: string;
  link?: string;
  slug: string;
  excerpt: string;
  date: string;
  _embedded?: any;
}

interface RawBlogItem {
  id: number;
  title: { rendered: string };
  link: string;
  featured_media: string;
  slug: string;
  excerpt: { rendered: string };
  date: string;
  _embedded?: any;
  yoast_head_json: any;
}

const blogPerPage: number = 12;
const urlPage: string = "/blog/";

function BlogMain() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  const currentPage: number = page ? parseInt(page as string) : 1;

  const [blogCount, setBlogCount] = useState<number>(0);
  const [blogLists, setBlogList] = useState<ArticleLists[]>([]);
  const [isFetched, setIsFetched] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const params = {
          per_page: blogPerPage,
          page: currentPage,
          _embed: true,
        };
        const response = await blogService.getBlogs(params);

        if (response?.status === 200) {
          setBlogCount(
            response?.headers["x-wp-total"]
              ? parseInt(response?.headers["x-wp-total"])
              : 0
          );

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
        console.log("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
        setIsFetched(true);
      }
    };

    if (currentPage > 0) {
      fetchBlogs();
    }
  }, [page]);

  const totalPageCount =
    blogCount / blogPerPage >= 1 ? Math.ceil(blogCount / blogPerPage) : 1;

  const showPages = (pageNumber: number) => {
    let startPage = 1;

    if (pageNumber > 2 && totalPageCount > 5) {
      startPage = pageNumber - 2;
    }

    if (pageNumber > totalPageCount) {
      startPage = 1;
    }

    const endPage = Math.min(startPage + 4, totalPageCount);

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };

  const renderBlogList = () => {
    if (isLoading) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
          {[1, 2, 3].map((item: any, index: number) => (
            <div
              key={index}
              className="h-full rounded-[15px] bg-whute text-center flex flex-col shadow-xl shadow-black/5 hover:shadow-blue-700/15 transition duration-300"
            >
              <div className="flex-none w-full aspect-[400/200] mx-auto rounded-t-[10px]">
                <PlaceholderLoading shape="rect" width="100%" height={200} />
              </div>
              <div className="shrink flex-1 flex flex-col justify-between gap-[15px] py-[20px] px-[20px]">
                <div className="flex flex-col gap-[20px]">
                  <div className="text-[22px] text-left text-gray-800 line-clamp-2">
                    <PlaceholderLoading shape="rect" width="100%" height={15} />
                  </div>
                  <div className="font-light text-[15px] text-left text-gray-400 line-clamp-3 leading-[1.75em]">
                    <PlaceholderLoading shape="rect" width="600%" height={15} />
                  </div>
                </div>
                <div className="font-light text-[16px] text-left mt-[20px] text-gray-500">
                  <PlaceholderLoading shape="rect" width="40%" height={15} />
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (!isLoading && isFetched && blogLists?.length > 0) {
      return (
        <div className="flex flex-col gap-[40px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] sm:gap-y-[30px] gap-x-[25px]">
            {blogLists?.map((itemBlog: any, indexBlog: number) => (
              <BlogItem articleItem={itemBlog} key={indexBlog} />
            ))}
          </div>
          <div className="flex justify-center">
            <div className="product-pagination flex flex-row gap-3">
              {currentPage > 1 && (
                <Link
                  href={
                    currentPage > 1 ? `${urlPage}?page=${currentPage - 1}` : ""
                  }
                >
                  <button className="p-3 border rounded h-[45px] min-w-[45px] flex items-center justify-center hover:bg-blue-50 text-gray-800 active:bg-blue-100 cursor-pointer">
                    <IoIosArrowBack />
                  </button>
                </Link>
              )}
              {showPages(currentPage).map((pageNumber) => (
                <div
                  key={pageNumber}
                  className={`${
                    currentPage === pageNumber ? "" : `hidden md:block`
                  }`}
                >
                  <Link href={`${urlPage}?page=${pageNumber}`}>
                    <button
                      className={`${
                        currentPage === pageNumber
                          ? "bg-blue-600 text-white font-semibold"
                          : "hidden md:block hover:bg-blue-50 text-gray-800 active:bg-blue-100 cursor-pointer"
                      } p-3 rounded  h-[45px] min-w-[45px] flex items-center justify-center`}
                    >
                      {pageNumber}
                    </button>
                  </Link>
                </div>
              ))}
              {currentPage < totalPageCount && (
                <Link
                  href={
                    currentPage < totalPageCount
                      ? `${urlPage}?page=${currentPage + 1}`
                      : ""
                  }
                >
                  <button className="p-3 border rounded h-[45px] min-w-[45px] flex items-center justify-center hover:bg-blue -50 text-gray-800 active:bg-blue-100 cursor-pointer">
                    <IoIosArrowForward />
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      );
    }

    if (!isLoading && isFetched && blogLists?.length > 0) {
      return (
        <div className="text-center p-[20px] bg-blue-50 border-1 border-blue-100 font-light text-[18px] text-blue-900">
          ไม่มีบทความล่าสุด
        </div>
      );
    }

    return;
  };

  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main>
        <div className="w-full px-[25px] py-[25px] md:py-[50px]  flex flex-col gap-[20px]">
          <div className=" w-full flex flex-col justify-center items-center">
            <h1 className="text-[30px] sm:text-[40px] md:text-[45px]">
              บทความ
            </h1>
          </div>

          <div className="w-[1280px] max-w-full mx-auto flex flex-col gap-[40px]">
            {renderBlogList()}
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default BlogMain;
