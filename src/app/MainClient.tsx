"use client";

import { useTranslation } from "react-i18next";
import Skills from "@/components/main/Skills";
import Header from "@/components/Header";
import Welcome from "@/components/main/Welcome";
import MyProjects from "@/components/main/MyProjects";
import Blog from "@/components/main/Blog";
import Footer from "@/components/Footer";

import Head from "next/head";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Services from "@/components/main/Services";
import Gallery from "@/components/main/Gallery";

function MainPage() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <header>
        <Head>
          <title>
            {t("web_title_with_page_name", {
              page_name: t("home"),
              web_name: t("web_name"),
            })}
          </title>
          <link
            rel="stylesheet"
            id="elementor-frontend-css"
            href="https://web.f5.in.th/wp-content/plugins/elementor/assets/css/frontend-lite.min.css?ver=3.23.4"
            type="text/css"
            media="all"
          />
        </Head>
        <Header />
      </header>
      <main>
        <Welcome />

        <Skills />

        <div className="py-[90px] bg-linear-to-b from-blue-50 to-transparent">
          <div className="w-[1380px] flex justify-center  max-w-full mx-auto  px-[30px] xl:px-[20px] text-center text-[30px] xl:text-[50px] font-light  flex-col gap-[20px]">
            <div className="font-light text-gray-900">
              <Typewriter
                options={{
                  strings: [t("slogan")],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <div className="text-[20px] text-gray-400 font-light leading-[1.7em]">
              -{" "}
              <span className="text-gray-500 font-medium underline-offset-5 underline decoration-4 decoration-[#0241F1]">
                {t("info_fullname")},
              </span>{" "}
              Full-Stack Developer
            </div>
          </div>
        </div>

        <Services />

        <MyProjects />

        <Gallery />

        <Blog />

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-[70px]">
          <div className="w-[1380px] max-w-full mx-auto py-[100px] px-[40px] xl:px-[20px] flex flex-col gap-[25px]">
            <div className="text-[35px] xl:text-[55px] font-extralight text-center">
              Creating new things together, one step at a time
            </div>

            <div className="flex gap-[20px] justify-center">
              <Link href="/contact">
                <button className="rounded-full flex flex-row items-center gap-[10px] bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white py-[10px] px-[20px] text-[18px] font-light cursor-pointer">
                  Let’s work together <FaArrowRight />
                </button>
              </Link>
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

export default MainPage;
