/* eslint-disable @typescript-eslint/no-explicit-any */
import Footer from "../Footer";
import NavBar from "../Header";
import dynamic from "next/dynamic";
import he from "he";
import Link from "next/link";

const RenderWithXmpBlocks = dynamic(
  () => import("../RenderWithXmpBlocks"),
  {
    ssr: false,
  }
);

const defaultTitle = "ไม่มีชื่อเรื่อง";

function PortfolioView({ data, cssLink }: { data: any; cssLink: string }) {
  return (
    <div className="bg-white">
      <header>
        <NavBar />
      </header>

      <main>
        <div
          className={` w-full px-[25px] bg-gray-800 relative top-0 flex items-center pt-[100px] md:pt-[150px] pb-[60px] md:pb-[80px]`}
        >
          <div className="w-[1280px] max-w-full mx-auto flex flex-col gap-[20px] items-center justify-center">
            <h1 className="text-[30px] md:text-[45px] xl:text-[45px] font-medium leading-[1.3em] text-white">
              {data?.title ?? "ไม่มีชื่อ"}
            </h1>
          </div>
        </div>

        <div className="w-full px-[25px] pt-[10px] pb-[40px] xl:pt-[10px] xl:pb-[60px]">
          <div className="w-[1280px] max-w-full mx-auto flex flex-col">
            <div className="py-[30px] flex flex-col gap-[10px]">
              <div className=" flex flex-wrap justify-center  text-[16px] text-gray-500 font-light items-center">
                <div className="py-[5px] px-[15px]">
                  <Link href="/">หน้าแรก</Link>
                </div>

                <div className="flex items-center">
                  <div>/</div>
                  <div className="py-[5px] px-[15px]">
                    <Link href="/showcase">ผลงานของเรา</Link>
                  </div>
                </div>

                {data?.categories
                  ?.sort((a: any, b: any) => a.parent - b.parent)
                  ?.map((category: any, indexCategory: number) => (
                    <div key={indexCategory} className="flex items-center">
                      <div>/</div>
                      <div className="py-[5px] px-[15px]">{category?.name}</div>
                    </div>
                  ))}
              </div>
            </div>

            {data?.image && (
              <img
                src={data?.image}
                width="100%"
                height="auto"
                className="w-full md:w-[50%] mx-auto"
                alt={data?.title ?? "ไม่มีชื่อ"}
              />
            )}

            {data?.acf?.button_url && (
              <div className="flex justify-center my-[20px]">
                <Link href={data?.acf?.button_url} legacyBehavior>
                  <a target="_blank">
                    <button className="px-[20px] py-[12px] bg-gray-100 hover:bg-gray-200 active:bg-gray-300 rounded-[10px] cursor-pointer text-[18px]">
                      {data?.acf?.button_label || "เปิดลิงก์"}
                    </button>
                  </a>
                </Link>
              </div>
            )}

            <div className="py-[20px]">
              <RenderWithXmpBlocks html={data?.detail} />
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
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PortfolioView;
