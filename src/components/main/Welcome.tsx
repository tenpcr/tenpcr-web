"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "../../hooks/useInView";
import { useEffect, useState } from "react";

function Welcome() {
  const { t } = useTranslation();
  const [ref, isInView] = useInView<HTMLDivElement>({
    threshold: 0.2,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div className="flex flex-row items-center  w-full bg-linear-to-l from-black to-blue-900 bg-no-repeat bg-center bg-cover w-full relative">
      <div className="absolute top-0 left-0 w-full h-full z-[9] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-0"
        >
          <source
            src={`${process.env.NEXT_PUBLIC_SERVER_BLOG_API}/bg-video-001.webm`}
            type="video/webm"
          />
          <source
            src={`${process.env.NEXT_PUBLIC_SERVER_BLOG_API}/bg-video-001.mp4`}
            type="video/mp4"
          />
        </video>
        <div className="absolute top-0 left-0 bg-black/50 w-full h-full z-[9] overflow-hidden"></div>
      </div>

      <div className="w-[100%] xl:w-[1380px] max-w-full gap-[50px] px-[40px] xl:px-[20px] max-w-full md:mx-auto text-white py-[50px] flex flex-col-reverse xl:flex-row z-[99]">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}} // animate เมื่อเข้า viewport
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-[80%] xl:w-[40%] flex items-center"
        >
          <div>
            <div className="text-[35px] xl:text-[50px] leading-[1.3em] font-medium">
              {t("info_fullname")}
            </div>
            <div className="mt-[5px] text-[22px] xl:text-[30px]  font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#0241F1] to-blue-300">
              Full-Stack Developer
            </div>
            <div className="mt-[15px] text-[18px] md:text-[20px] font-light leading-[1.7em] text-gray-100">
              {t("info_about.short_about")}
            </div>
            <div className="flex flex-wrap gap-x-[15px] gap-y-[15px] mt-[50px]">
              <Link href="/about">
                <div className="text-white rounded-[5px] bg-blue-600 w-fit py-[13px] px-[20px] hover:bg-blue-700 active:bg-blue-800 cursor-pointer">
                  {t("about_me")}
                </div>
              </Link>

              <Link href="/contact">
                <button className="flex flex-row items-center gap-[10px] rounded-[5px] border-gray-800 border-1 w-fit py-[13px] px-[20px] text-gray-800 hover:text-gray-600 bg-white hover:bg-gray-100 active:bg-gray-200 cursor-pointer">
                  {t("contact")} <FaArrowRight />
                </button>
              </Link>
            </div>{" "}
          </div>
        </motion.div>

        <div className="w-[100%] xl:w-[60%] relative">
          <div className=" w-full h-full ">
            <div className="grid grid-cols-3 grid-rows-3 gap-4">
              <div className="flex justify-end items-end animate-floating animation-delay-0">
                {" "}
                <div className="w-full h-full bg-linear-to-r from-gray-50/30 to-transparent flex justify-center items-center text-white font-light rounded-[10px] text-[clamp(12px,2vw,25px)] transition delay-100 duration-300 hover:-translate-y-1 hover:scale-107 cursor-default">
                  Tech
                </div>
              </div>
              <div className="row-span-2 flex items-en opacity-80 hover:opacity-90 animate-floating animation-delay-200 p-[10px] bg-linear-to-r from-blue-500/30 to-transparent rounded-[10px] transition delay-100 duration-300 hover:-translate-y-1 hover:scale-107">
                <img
                  className="w-full h-full shadow-md rounded-[10px] object-cover"
                  src="/images/system/02.webp"
                  alt="Image Ten 1"
                />
              </div>
              <div className="col-start-2 row-start-3 opacity-80 hover:opacity-90 animate-floating animation-delay-3000 p-[10px] bg-white/20 rounded-[10px] transition delay-100 duration-300 hover:-translate-y-1 hover:scale-107">
                <img
                  className="w-full h-full shadow-md rounded-[10px] object-cover"
                  src="/images/system/05.webp"
                  alt="Image Ten 2"
                />
              </div>
              <div className="col-start-1 row-start-3 animate-floating">
                <div className="w-full h-full float-right bg-linear-to-r from-blue-500/30 to-transparent flex justify-center items-center text-white font-light rounded-[10px] text-[clamp(12px,2vw,25px)] transition delay-100 duration-300 hover:-translate-y-1 hover:scale-107 cursor-default">
                  Digital
                  <br /> Marketing
                </div>
              </div>

              <div className="col-start-1 row-start-2 opacity-80 hover:opacity-90 animate-floating animation-delay-400 p-[10px] bg-linear-to-r from-blue-500/30 to-transparent rounded-[10px] transition delay-100 duration-300 hover:-translate-y-1 hover:scale-107">
                <img
                  className="w-full shadow-md rounded-[10px] object-cover "
                  src="/images/system/03.webp"
                  alt="Image Ten 3"
                />
              </div>
              <div className="col-start-3 row-start-1 opacity-80 hover:opacity-90 animate-floating animation-delay-500 p-[10px] bg-linear-to-r from-blue-500/30 to-transparent rounded-[10px] transition delay-100 duration-300 hover:-translate-y-1 hover:scale-107">
                <img
                  className="w-full h-full  shadow-md rounded-[10px] object-cover "
                  src="/images/system/01.webp"
                  alt="Image Ten 4"
                />
              </div>
              <div className="col-start-3 row-start-2 opacity-80 hover:opacity-90 animate-floating animation-delay-6000 p-[10px] bg-linear-to-r from-blue-500/30 to-transparent rounded-[10px] transition delay-100 duration-300 hover:-translate-y-1 hover:scale-107">
                <img
                  className="w-full h-full shadow-md rounded-[10px] object-cover"
                  src="/images/system/04.webp"
                  alt="Image Ten 5"
                />
              </div>
              <div className="row-start-3 flex justify-start animate-floating animation-delay-700">
                <div className="w-full  bg-linear-to-r from-gray-500/30 to-transparent flex justify-center items-center text-white font-light rounded-[10px] text-[clamp(12px,2vw,25px)] transition delay-100 duration-300 hover:-translate-y-1 hover:scale-107 cursor-default">
                  Media
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
