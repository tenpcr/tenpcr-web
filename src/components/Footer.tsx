import {
  FaLinkedinIn,
  FaYoutube,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithub,
} from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Link from "next/link";
import { info_profiles } from "@/data/about/information";

function Footer() {
  return (
    <div className="w-full bg-gray-50">
      <div className="w-[1380px] max-w-full mx-auto py-[50px] px-[20px] flex flex-col gap-[20px]">
        <div className="flex flex-col xl:flex-row xl:justify-between gap-[20px]">
          <div>
            <Link href="/">
              <img src="/images/logo.svg" className="h-[35px]" alt="tenpcr" />
            </Link>
          </div>
          <div></div>
          <div className="flex flex-wrap gap-[10px] items-center">
            {info_profiles?.social_media?.linkedin && (
              <Link
                href={info_profiles?.social_media?.linkedin}
                target="_blank"
              >
                <div className="rounded-full bg-blue-700 text-white h-[40px] aspect-[1/1] flex justify-center items-center">
                  <FaLinkedinIn size={22} />{" "}
                </div>
              </Link>
            )}

            {info_profiles?.social_media?.github && (
              <Link href={info_profiles?.social_media?.github} target="_blank">
                <div className="rounded-full bg-blue-700 text-white h-[40px] aspect-[1/1] flex justify-center items-center">
                  <FaGithub size={22} />
                </div>
              </Link>
            )}

            {info_profiles?.social_media?.youtube && (
              <Link href={info_profiles?.social_media?.youtube} target="_blank">
                <div className="rounded-full bg-blue-700 text-white h-[40px] aspect-[1/1] flex justify-center items-center">
                  <FaYoutube size={22} />
                </div>
              </Link>
            )}

            {info_profiles?.social_media?.facebook && (
              <Link
                href={info_profiles?.social_media?.facebook}
                target="_blank"
              >
                <div className="rounded-full bg-blue-700 text-white h-[40px] aspect-[1/1] flex justify-center items-center">
                  <FaFacebookSquare size={22} />
                </div>
              </Link>
            )}

            {info_profiles?.social_media?.instagram && (
              <Link
                href={info_profiles?.social_media?.instagram}
                target="_blank"
              >
                <div className="rounded-full bg-blue-700 text-white h-[40px] aspect-[1/1] flex justify-center items-center">
                  <FaInstagramSquare size={22} />
                </div>
              </Link>
            )}

            {info_profiles?.social_media?.tiktok && (
              <Link href={info_profiles?.social_media?.tiktok} target="_blank">
                <div className="rounded-full bg-blue-700 text-white h-[40px] aspect-[1/1] flex justify-center items-center">
                  <AiFillTikTok size={22} />
                </div>
              </Link>
            )}
          </div>
        </div>
        <div className="border-t border-gray-300 text-gray-500 py-[15px] font-light">
          Copyright @2025 TenPCR All right reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
