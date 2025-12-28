"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useState } from "react";
import { InputText } from "@/components/form/InputText";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { info_profiles } from "@/data/about/information";
import Link from "next/link";

interface InputContact {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

function Contact() {
  const { t } = useTranslation();
  const [inputContact, setInputContact] = useState<InputContact>({});

  const handleInputChange =
    (field: keyof InputContact) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInputContact((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    };

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div className="bg-linear-to-r from-blue-800 to-blue-900 pt-[50px] pb-[80px]">
          <div className="w-[1380px] max-w-full px-[20px] mx-auto">
            <h1 className="text-[45px] font-regular text-center text-white text-shadow-md">
              {t("contact")}
            </h1>
          </div>
        </div>
        <div className="mb-[50px]">
          <div className="w-[900px] max-w-full px-[20px] mx-auto mt-[-40px] bg-white rounded-[20px] p-[20px] shadow-md">
            <div className="p-[10px] mt-[20px] flex flex-col xl:flex-row gap-[40px]">
              <div className="w-full xl:w-[50%] flex flex-col gap-[10px]">
                {info_profiles?.email && (
                  <div className="flex flex-row gap-[10px] items-center">
                    <div className="flex">
                      <div className="rounded-full p-[10px] bg-gray-50">
                        <MdOutlineMailOutline size={20} />
                      </div>
                    </div>
                    <div className="font-light">
                      <Link
                        href={
                          info_profiles?.email
                            ? `mailto:${info_profiles?.email}`
                            : "/"
                        }
                        target="_blank"
                      >
                        {info_profiles?.email}
                      </Link>
                    </div>
                  </div>
                )}

                {info_profiles?.social_media?.linkedin && (
                  <div className="flex flex-row gap-[10px] items-center">
                    <div className="flex">
                      <div className="rounded-full p-[10px] bg-gray-50">
                        <FaLinkedinIn size={20} />
                      </div>
                    </div>
                    <div className="font-light">
                      <Link
                        href={info_profiles?.social_media?.linkedin ?? "/"}
                        target="_blank"
                      >
                        {info_profiles?.social_media?.linkedin}
                      </Link>
                    </div>
                  </div>
                )}

                {info_profiles?.social_media?.github && (
                  <div className="flex flex-row gap-[10px] items-center">
                    <div className="flex">
                      <div className="rounded-full p-[10px] bg-gray-50">
                        <FaGithub size={20} />
                      </div>
                    </div>
                    <div className="font-light">
                      <Link
                        href={info_profiles?.social_media?.github ?? "/"}
                        target="_blank"
                      >
                        {info_profiles?.social_media?.github}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="w-full xl:w-[50%] flex flex-col gap-[15px]">
                <div>
                  <InputText
                    value={inputContact?.name}
                    placeholder={t("name")}
                    onChange={handleInputChange("name")}
                  />
                </div>

                <div>
                  <InputText
                    value={inputContact?.phone}
                    placeholder={t("phone")}
                    onChange={handleInputChange("phone")}
                  />
                </div>

                <div>
                  <InputText
                    value={inputContact?.email}
                    placeholder={t("email")}
                    onChange={handleInputChange("email")}
                  />
                </div>

                <div>
                  <textarea
                    className="p-[15px] bg-gray-50 w-full text-[18px]"
                    value={inputContact?.message}
                    placeholder={t("message")}
                    onChange={handleInputChange("message")}
                    rows={5}
                  />
                </div>
                <div className="flex justify-center">
                  <button className="rounded-full py-[12px] px-[15px] bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white cursor-pointer">
                    {t("send_message")}
                  </button>
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

export default Contact;
