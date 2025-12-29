/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { articleDateTimeFormat } from "../../utils/dateTime.helper";
import { FaRegClock, FaFacebook } from "react-icons/fa";
import { SiLine } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";
import dynamic from "next/dynamic";
import Head from "next/head";

const RenderWithXmpBlocks = dynamic(() => import("../RenderWithXmpBlocks"), {
  ssr: false,
});

interface ArticleProps {
  data?: any;
  cssLink?: string;
}

function ArticleView({ data, cssLink }: ArticleProps) {
  return (
    <div>
      <header>
        <Header />
        <Head>
          <link
            rel="stylesheet"
            id="elementor-frontend-css"
            href="https://web.f5.in.th/wp-content/plugins/elementor/assets/css/frontend-lite.min.css?ver=3.23.4"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="elementor-post-531-css"
            href={`${
              process.env.NEXT_PUBLIC_SERVER_BLOG_API
            }/wp-content/uploads/elementor/css/post-${
              data?.id
            }.css?ver=${Date.now()?.toString()}`}
            type="text/css"
            media="all"
          />
        </Head>
      </header>
      <main>
        <div>
          <div className="px-[20px] py-[30px] w-[1280px] max-w-full mx-auto">
            <div className="ContentWebRow">
              <div className="contentweb">
                <div className="hidden text-[15px] xl:block text-gray-600 font-light mb-[10px]">
                  <Link href="/">หน้าแรก</Link> {" / "}
                  <Link href="/blog">บทความ</Link> {" / "}
                  {data?.title ?? "ไม่มีชื่อเรื่อง"}
                </div>

                <div className="flex flex-col lg:flex-row gap-[40px]">
                  <div className="shrink">
                    <div className="border-b border-gray-200 pb-[10px] mb-[30px]">
                      <h1
                        className="text-[25px] xl:text-[35px] font-medium"
                        dangerouslySetInnerHTML={{ __html: data?.title }}
                      ></h1>

                      <div className="font-light text-[14px] lg:text-[16px] text-gray-500 py-[10px] flex flex-wrap items-center">
                        <span className="flex flex-wrap items-center gap-[5px]">
                          <FaRegClock />
                          {data?.date &&
                            articleDateTimeFormat(data?.date?.toString())}
                        </span>
                      </div>
                    </div>

                    <div className="mb-[30px]">
                      <img
                        src={data?.thumbnail}
                        className="w-full aspect-[400/200] object-cover rounded-[10px]"
                        alt={data?.title}
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-[10px] border-t border-b border-gray-200 py-[10px]">
                      <div className="text-[14px] font-medium">
                        แชร์เรื่องนี้
                      </div>

                      <Link
                        href={`https://social-plugins.line.me/lineit/share?url=${process.env.NEXT_PUBLIC_MAIN_BASE_URL}/blog/${data?.slug}-${data?.id}`}
                        target="_blank"
                        aria-label="แชร์ทางไลน์"
                      >
                        <div className="bg-[#27c925] text-white rounded-full p-[0px] flex justify-center items-center h-[40px] aspect-[1/1]">
                          <SiLine size={20} />
                        </div>
                      </Link>

                      <Link
                        href={`https://x.com/intent/post?text=${data?.title}%20${process.env.NEXT_PUBLIC_MAIN_BASE_URL}/blog/${data?.slug}-${data?.id}`}
                        target="_blank"
                        aria-label="แชร์ทางเอ็กซ์"
                      >
                        <div className="bg-gray-800 text-white rounded-full p-[0px] flex justify-center items-center h-[40px] aspect-[1/1]">
                          <FaXTwitter size={20} />
                        </div>
                      </Link>

                      <Link
                        href={`https://www.facebook.com/sharer.php?u=${process.env.NEXT_PUBLIC_MAIN_BASE_URL}/blog/${data?.slug}-${data?.id}`}
                        target="_blank"
                        aria-label="แชร์ทางดฟซบุ๊ก"
                      >
                        <div className="bg-[#3b5998] text-white rounded-full p-[0px] flex justify-center items-center h-[40px] aspect-[1/1]">
                          <FaFacebook size={20} />
                        </div>
                      </Link>
                    </div>

                    <div className="cashcarddetail-left mt-[25px]">
                      <RenderWithXmpBlocks html={data?.detail || ""} />
                    </div>

                    {data?.tags?.length > 0 && (
                      <div className="py-[20px] flex flex-col gap-[10px]">
                        <div> Tags:</div>

                        <div className=" flex flex-wrap gap-[10px] text-[16px] text-gray-500 font-light">
                          {data?.tags?.map((tag: any, indexTag: number) => (
                            <div
                              key={indexTag}
                              className="py-[5px] px-[15px] rounded-full bg-slate-50 border-1 border-gray-100"
                            >
                              {tag?.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="w-full lg:w-[350px] flex-none "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default ArticleView;
