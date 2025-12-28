/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ReactNode, Fragment } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

import { TbAlphabetThai } from "react-icons/tb";
import { RiEnglishInput } from "react-icons/ri";
import { RiMenu3Line } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";
import { slide as BurgerMenu } from "react-burger-menu";
import { toastify } from "../utils/notification";

interface LanguageType {
  icon: ReactNode;
  label: string;
  code: string;
}

function Header() {
  const { t, i18n } = useTranslation();

  const languageLists: LanguageType[] = [
    {
      icon: <TbAlphabetThai size={20} />,
      label: "ภาษาไทย",
      code: "th",
    },
    {
      icon: <RiEnglishInput size={20} />,
      label: "English",
      code: "en",
    },
  ];

  const changeLanguage = (languageCode?: string): void => {
    if (!languageCode) return;
    i18n.changeLanguage(languageCode);
  };

  return (
    <div>
      <div className=" w-full max-w-full pl-[15px] shadow fixed bg-white z-[9999] top-0 h-[60px] flex items-center">
        <div className="w-[1380px] max-w-full mx-auto text-[50px] flex justify-between gap-[20px] relative">
          <div className="font-medium text-[30px] flex-none flex items-center">
            <Link href="/">
              <img src="/images/logo.svg" className="h-[35px]" alt="tenpcr" />
            </Link>
          </div>
          <div className="items-center hidden xl:flex ">
            <ul className="flex flex-row gap-[45px] text-[18px] right-0 items-center font-light text-gray-700">
              <li>
                <Link href="/">{t("home")}</Link>
              </li>
              <li>
                <Link href="/about">{t("about")}</Link>
              </li>
              <li>
                <Link href="/portfolio">{t("portfolio")}</Link>
              </li>
              <li>
                <Link href="/blog">{t("blog")}</Link>
              </li>
              <li>
                <div className="flex flex-row gap-[15px]">
                  <Link href="/contact">
                    <button className="rounded-[20px] bg-blue-600 hover:bg-blue-700 active:bg-blue-800 py-[8px] px-[15px] text-[16px] text-white font-medium cursor-pointer">
                      {t("contact")}
                    </button>
                  </Link>

                  <Menu as="div" className="w-full">
                    <MenuButton className="rounded-[20px] border border-gray-300 text-gray-500 py-[8px] px-[13px] text-[14px] font-regular cursor-pointer hover:bg-gray-50 active:bg-gray-100 flex flex-row gap-[5px]">
                      <div>{i18n.language?.toUpperCase()}</div>
                      <div className="flex items-center">
                        <FaCaretDown size={20} />
                      </div>
                    </MenuButton>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <MenuItems className="cursor-default flex flex-col max-w-full z-50 origin-top-right absolute right-0 mt-[12px]  rounded-md shadow-lg py-1 bg-white ring-1 ring-gray-200 ring-opacity-5 outline-none ">
                        {languageLists?.map((languageItem: LanguageType) => (
                          <MenuItem key={languageItem.code}>
                            <button
                              onClick={() => {
                                changeLanguage(languageItem.code);
                                toastify("success", t('language_changed_successfully'));
                              }}
                            >
                              <div
                                className={`${
                                  languageItem?.code === i18n.language
                                    ? "font-semibold text-blue-500"
                                    : "font-light text-gray-500"
                                } flex flex-row p-[10px] hover:bg-blue-50 text-[15px] gap-[10px] cursor-pointer`}
                              >
                                <div className="flex justify-center items-center">
                                  {languageItem?.icon}
                                </div>
                                <div>{languageItem?.label}</div>
                              </div>
                            </button>
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Transition>
                  </Menu>
                </div>
              </li>
            </ul>
          </div>

          <div className="items-center  w-[50px] mt-[-15px] block xl:hidden">
            <BurgerMenu
              customBurgerIcon={<RiMenu3Line size={20} />}
              styles={styles}
              right
            >
              <ul className="flex flex-col w-full">
                <Link href="/">
                  <li
                    className="menu-item py-[10px] px-[10px] font-light"
                    title={t("home")}
                  >
                    {t("home")}
                  </li>
                </Link>
                <Link href="/about">
                  <li
                    className="menu-item py-[10px] px-[10px] hover:bg-gray-50 font-light"
                    title={t("about")}
                  >
                    {t("about")}
                  </li>
                </Link>
                <Link href="/portfolio">
                  <li
                    className="menu-item py-[10px] px-[10px] hover:bg-gray-50 font-light"
                    title={t("portfolio")}
                  >
                    {t("portfolio")}
                  </li>
                </Link>
                <Link href="/blog">
                  <li
                    className="menu-item py-[10px] px-[10px] hover:bg-gray-50 font-light"
                    title={t("blogs")}
                  >
                    {t("blog")}
                  </li>
                </Link>
                <Link href="/contact">
                  <button className="w-full mt-[10px] rounded-[20px] bg-blue-600 hover:bg-blue-700 active:bg-blue-800 py-[10px] px-[15px] text-[16px] text-white font-medium cursor-pointer">
                    {t("contact")}
                  </button>
                </Link>
                <li className="menu-item py-[10px] px-[10px] font-light relative justify-center flex mt-[20px]">
                  <div className="rounded-[5px] flex flex-row w-fit overflow-hidden">
                    <div
                      className={`${
                        i18n.language === "th"
                          ? "text-white bg-linear-to-b from-gray-400 to-gray-300"
                          : "bg-linear-to-b from-gray-100 to-gray-300"
                      } py-[5px] px-[10px] cursor-pointer`}
                      onClick={() => {
                        changeLanguage("th");
                        toastify("success", t('language_changed_successfully'));
                      }}
                    >
                      TH
                    </div>
                    <div
                      className={`${
                        i18n.language === "en"
                          ? "text-white bg-linear-to-b from-gray-400 to-gray-300"
                          : "bg-linear-to-b from-gray-100 to-gray-300"
                      } py-[5px] px-[10px] cursor-pointer`}
                      onClick={() => {
                        changeLanguage("en");
                        toastify("success", t('language_changed_successfully'));
                      }}
                    >
                      EN
                    </div>
                  </div>
                </li>
              </ul>
            </BurgerMenu>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    top: "16px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#fff",
    padding: "10px 0px",
    fontSize: "1.2rem",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    padding: "0.8em",
    color: "#666",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    position: "fixed",
    background: "rgba(0, 0, 0, 0.3)",
  },
};
