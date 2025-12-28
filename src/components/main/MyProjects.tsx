"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "../../hooks/useInView";
import { myProjects } from "@/data/about/myProjects";
import { MyProjectTypes } from "@/types/myProjects";
import Link from "next/link";

function MainLayoutMyProjects() {
  const { t } = useTranslation();
  const [tabIndex, setTabIndex] = useState(0);
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
    <div className="bg-[url(/images/bg-main-01.webp)] bg-opacity-10 bg-cover bg-no-repeat bg-linear-to-r from-blue-700 to-blue-900 pt-[50px] pb-[70px] flex flex-col gap-[20px]">
      <div className="flex w-[1380px] px-[20px] max-w-full mx-auto flex justify-center">
        <div className="text-[30px] md:text-[40px] xl:text-[40px] text-white font-normal">
          {t("my_projects")}
        </div>
      </div>

      <div className="w-[1380px] max-w-full mt-[10px] mx-auto flex flex-col gap-[30px] bg-white rounded-[10px] shadow-xl relative overflow-hidden">
        <div className="bg-white">
          <div className="w-full bg-gray-200 flex flex-row gap-[10px] items-center py-[3px]">
            <div className="p-[10px] flex flex-row gap-[7px]">
              <div className="bg-[#ed6150] rounded-full h-[15px] w-[15px]"></div>
              <div className="bg-[#f6b83c] rounded-full h-[15px] w-[15px]"></div>
              <div className="bg-[#55be44] rounded-full h-[15px] w-[15px]"></div>
            </div>

            <div className="font-medium text-[16px]">My projects</div>
          </div>

          <div className="flex flex-row w-full bg-gray-100">
            <div className="w-full pt-[10px] px-[10px] flex gap-[10px] w-full overflow-x-auto whitespace-nowrap">
              {myProjects?.map(
                (myProjectsItem: MyProjectTypes, myProjectsIndex: number) => (
                  <div
                    key={myProjectsIndex}
                    onClick={() => {
                      setTabIndex(myProjectsIndex);
                    }}
                    className={`${
                      tabIndex === myProjectsIndex
                        ? "bg-white font-medium"
                        : "text-gray-500 font-light cursor-pointer bg-gray-100 hover:bg-gray-50 active:bg-gray-100"
                    } rounded-t-[10px] py-[10px] px-[15px] `}
                  >
                    {myProjectsItem?.name}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="flex p-[50px]">
          {myProjects
            ?.filter((_, index) => index === tabIndex)
            .map((myProjectsItem: MyProjectTypes, index: number) => (
              <div key={index} className="flex flex-col md:flex-row gap-[50px]">
                <div className="w-full xl:w-[50%] transition delay-100 duration-300 hover:-translate-y-1 hover:scale-107">
                  {myProjectsItem?.images?.length > 0 && (
                    <img src={myProjectsItem?.images[0]?.src}  alt={myProjectsItem?.name} />
                  )}
                </div>
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full xl:w-[50%]"
                >
                  <div className="text-[22px] xl:text-[35px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400">
                    {myProjectsItem?.name}
                  </div>
                  <div className="text-gray-500 text-[16px] xl:text-[18px] font-extralight mt-[30px] leading-[1.7em]">
                    {myProjectsItem?.detail}
                  </div>
                  {myProjectsItem?.url && (
                    <div className="mt-[20px]">
                      <Link href={myProjectsItem?.url} target="_blank">
                        <button className="cursor-pointer rounded min-w-[200px] border border-blue-600 hover:bg-blue-700 active:bg-blue-800 py-[10px] px-[10px] text-[16px] text-blue-600 hover:text-white font-regular">
                          เข้าสู่เว็บไซต์
                        </button>
                      </Link>
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MainLayoutMyProjects;
