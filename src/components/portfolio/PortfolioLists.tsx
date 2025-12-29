/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import PortfolioItem from "./PorfolioItem";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PlaceholderLoading from "react-placeholder-loading";
import * as portfolioService from "@/services/portfolioService";
import { useTranslation } from "react-i18next";
import PortfolioTabs from "./PortfolioTabs";

interface PortfolioLists {
  id: number;
  title: string;
  image: string;
  link?: string;
  slug: string;
  excerpt: string;
  date: string;
}

interface RawPortfolioItem {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  link: string;
  featured_media: number;
  slug: string;
  excerpt: { rendered: string };
  date: string;
  _embedded?: any;
  meta_box?: any;
}

const portfolioPerPage = 16;

function PortfolioMain() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = useParams<{ slug: string }>();
  const page = searchParams.get("page");

  const { t } = useTranslation();

  const currentPage = page ? parseInt(page as string) : 1;

  const [termId, setTermId] = useState<number | null>(null);
  const [portfolioCount, setPortfolioCount] = useState(0);
  const [portfolioLists, setPortfolioList] = useState<PortfolioLists[]>([]);
  const [isFetched, setIsFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!params?.slug) {
      setTermId(null);
      return;
    }

    const fetchTermId = async () => {
      try {
        const res = await portfolioService.getPortfolioCategoryBySlug(
          params?.slug
        );

        if (res?.data?.length) {
          setTermId(res.data[0].id);
        } else {
          setTermId(null);
        }
      } catch (error) {
        console.log("Error fetching termId:", error);
        setTermId(null);
      }
    };

    fetchTermId();
  }, [params?.slug]);

  useEffect(() => {
    if (params?.slug && !termId) return;

    const fetchBlogs = async () => {
      setIsLoading(true);

      try {
        const params: any = {
          per_page: portfolioPerPage,
          page: currentPage,
          _embed: true,
        };

        if (termId) {
          params["portfolio-categories"] = termId;
        }

        const response = await portfolioService.getPortfolios(params);

        if (response?.status === 200) {
          setPortfolioCount(
            response.headers["x-wp-total"]
              ? parseInt(response.headers["x-wp-total"])
              : 0
          );

          const blogListData = await Promise.all(
            response.data.map(async (item: RawPortfolioItem) => {
              const title = item?.title?.rendered ?? "ไม่มีชื่อเรื่อง";
              const featured = item?._embedded?.["wp:featuredmedia"]?.[0];
              const image = featured?.source_url ?? "/images/no-image.webp";

              const tags = item?._embedded?.["wp:term"]
                ?.flat()
                ?.filter((t: any) => t?.taxonomy === "portfolio-tags");

              return {
                id: item.id,
                excerpt: item?.excerpt?.rendered ?? "",
                detail: item.content?.rendered ?? "",
                title,
                image,
                tags: tags || [],
                slug: item.slug,
                link: item.link,
                date: item.date,
                media_type: item?.meta_box?.portfolio_media_type || "f",
                youtube_id: item?.meta_box?.portfolio_youtube_video_id || "",
                imagesSrcList:
                  item?.meta_box?.portfolio_gallery_image_advanced?.length > 0
                    ? item?.meta_box?.portfolio_gallery_image_advanced?.map(
                        (item: any) => item.full_url
                      )
                    : [image],
                meta_box: item?.meta_box,
                button: [
                  {
                    label: "Open Link",
                    url: item?.meta_box?.portfolio_button_open_link,
                  },
                  {
                    label: "Download",
                    url: item?.meta_box?.portfolio_button_download_url,
                  },
                  {
                    label: "Source Code",
                    url: item?.meta_box?.portfolio_button_source_code_url,
                  },
                ],
              };
            })
          );

          setPortfolioList(blogListData);
        }
      } catch (error) {
        console.log("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
        setIsFetched(true);
      }
    };

    fetchBlogs();
  }, [currentPage, termId, params?.slug]);

  const totalPageCount =
    portfolioCount / portfolioPerPage >= 1
      ? Math.ceil(portfolioCount / portfolioPerPage)
      : 1;

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

  const getPageLink = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));

    return `${pathname}?${params.toString()}`;
  };

  const renderPortfolioList = () => {
    if (isLoading) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[20px]">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="h-full rounded-[15px] bg-white shadow-xl shadow-black/5"
            >
              <div className="aspect-[1/1]">
                <PlaceholderLoading shape="rect" width="100%" height="100%" />
              </div>
              <div className="p-[20px] flex flex-col gap-[15px]">
                <PlaceholderLoading shape="rect" width="80%" height={15} />
                <PlaceholderLoading shape="rect" width="100%" height={15} />
                <PlaceholderLoading shape="rect" width="40%" height={15} />
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (isFetched && portfolioLists.length > 0) {
      return (
        <div className="flex flex-col gap-[40px]">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-[20px]">
            {portfolioLists.map((item, index) => (
              <PortfolioItem itemPortfolio={item} key={`${index}_${item.id}`} />
            ))}
          </div>

          <div className="flex justify-center">
            <div className="flex gap-3">
              {currentPage > 1 && (
                <Link href={getPageLink(currentPage - 1)}>
                  <button className="p-3 border rounded h-[45px] min-w-[45px] flex items-center justify-center hover:bg-blue-50 text-gray-800 active:bg-blue-100 cursor-pointer">
                    <IoIosArrowBack />
                  </button>
                </Link>
              )}

              {showPages(currentPage).map((pageNumber) => (
                <Link key={pageNumber} href={getPageLink(pageNumber)}>
                  <button
                    className={`${
                      currentPage === pageNumber
                        ? "bg-blue-600 text-white font-semibold"
                        : "hidden md:block hover:bg-blue-50 text-gray-800 active:bg-blue-100 cursor-pointer"
                    } p-3 rounded h-[45px] min-w-[45px] flex items-center justify-center`}
                  >
                    {pageNumber}
                  </button>
                </Link>
              ))}

              {currentPage < totalPageCount && (
                <Link href={getPageLink(currentPage + 1)}>
                  <button className="p-3 border rounded h-[45px] min-w-[45px] flex items-center justify-center hover:bg-blue-50 text-gray-800 active:bg-blue-100 cursor-pointer">
                    <IoIosArrowForward />
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      );
    }

    if (isFetched) {
      return (
        <div className="text-center p-[20px] bg-blue-50 text-blue-900">
          ไม่มีผลงาน
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <main>
        <div className="w-full px-[25px] py-[40px]">
          <div className="w-[1280px] max-w-full mx-auto flex flex-col gap-[20px]">
            <h1 className="text-[30px]">{t("portfolio")}</h1>

            <PortfolioTabs tab={(params?.slug as string) || ""} />

            {renderPortfolioList()}
          </div>
        </div>
      </main>
    </>
  );
}

export default PortfolioMain;
