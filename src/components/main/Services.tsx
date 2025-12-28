"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "../../hooks/useInView";
import { useEffect, useState } from "react";
import { serviceData } from "@/data/about/services";

function MainLayoutServices() {
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
    <div className="py-[70px] flex flex-col gap-[30px] bg-[url(/images/bg-main-02.webp)] bg-bottom bg-cover bg-no-repeat ">
      <div className="flex w-[1380px] px-[20px] max-w-full mx-auto flex justify-center">
        <div className="text-[30px] md:text-[40px] xl:text-[45px] border-b-4 border-blue-600 text-gray-800">
          {t("services")}
        </div>
      </div>
      <div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-[1380px] max-w-full px-[30px] xl:px-[20px] mx-auto max-w-full  grid grid-cols-1 sm:grid-cols-3 gap-[20px]"
        >
          {serviceData?.map(
            (
              skillItem: { icon: string; head: string; description?: string },
              skillNumber: number
            ) => (
              <div
                key={skillNumber}
                className="items-start bg-white border-t-5 border-white hover:border-blue-600 hover:shadow-lg transition delay-100 duration-300 hover:-translate-y-1 hover:scale-107 flex-col p-[35px] gap-[20px] rounded-[10px] shadow-xl shadow-gray-200 text-[22px] flex items-center text-gray-800"
              >
                <div className="">
                  <img
                    src={skillItem?.icon}
                    className="h-[70px] aspect-[1/1] object-contain"
                    alt={t(skillItem?.head)}
                  />
                </div>
                <div className="text-[25px]">{t(skillItem?.head)}</div>
                <div className="text-[17px] font-light text-gray-500">
                  {t(skillItem.description ?? "")}
                </div>
              </div>
            )
          )}{" "}
        </motion.div>
      </div>
    </div>
  );
}

export default MainLayoutServices;
