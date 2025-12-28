"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutExperience from "@/components/about/Experience";
import AboutEducation from "@/components/about/Education";
import { useTranslation } from "react-i18next";
import Head from "next/head";
import AboutAwards from "@/components/about/Awards";
import AboutSkills from "@/components/about/MySkills";
import { info_profiles } from "@/data/about/information";
import { Trans } from "react-i18next";

interface TabItem {
  label: string;
  slug: string;
}

export default function AboutClient() {
  const { t } = useTranslation();
  const [tab, setTab] = useState("experience");

  const tabLists: TabItem[] = [
    { label: t("experience"), slug: "experience" },
    { label: t("education"), slug: "education" },
    { label: t("my_skills"), slug: "my_skills" },
    { label: t("awards"), slug: "awards" },
  ];

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div className="py-[20px] md:py-[50px]">
          <div className="w-[1380px] max-w-full px-[20px] mx-auto flex flex-col md:flex-row gap-[20px]">
            <div className="flex-none w-[150px]">
              <div className="aspect-[1/1] rounded-full bg-gray-500 border-5 border-white shadow relative overflow-hidden">
                <img src={info_profiles?.avatar} className="w-full h-full" alt="tenpcr" />
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="font-regular text-[30px]">
                <div>{t("info_fullname")}</div>
                <div className="font-light text-[16px] text-gray-500">
                  @tenpcr
                </div>
              </div>
              <div className="text-gray-600 font-light leading-[1.8em] text-[20px]]">
                <Trans i18nKey={t("info_about.introduce")}></Trans>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1380px] max-w-full px-[20px] mx-auto">
          <div className="mt-[50px] flex flex-col gap-[10px]">
            <div className="flex flex-wrap border-t border-b border-gray-100 gap-[5px]">
              {tabLists?.map((tabItem: TabItem, indexItem: number) => (
                <button
                  key={indexItem}
                  className={`${
                    tabItem?.slug === tab
                      ? "border-blue-500 font-medium"
                      : "border-transparent font-light hover:bg-gray-50 active:bg-gray-100 hover:border-blue-500 active:border-blue-600"
                  } border-b-4 py-[10px] px-[15px] text-[20px] cursor-pointer`}
                  onClick={() => {
                    setTab(tabItem?.slug);
                  }}
                >
                  {tabItem?.label}
                </button>
              ))}
            </div>

            <div>
              <div className="font-regular text-[28px] py-[20px]">
                {tabLists.find((tabItem) => tabItem.slug === tab)?.label}
              </div>
            </div>

            {tab === "education" && <AboutEducation />}

            {tab === "experience" && <AboutExperience />}

            {tab === "my_skills" && <AboutSkills />}

            {tab === "awards" && <AboutAwards />}
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
