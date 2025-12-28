/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { info_profiles } from "@/data/about/information";
import { useTranslation } from "react-i18next";
import Link from "next/link";

interface MediaModalType {
  title?: string;
  detail?: string;
  tools?: any;
  mediaItems: any;
  detailItems: any;
  show: boolean;
  onClose: any;
  button?: any;
  type?: string;
  youtube?: string;
}

export default function MediaModal({
  title,
  detail,
  mediaItems,
  detailItems,
  button,
  tools,
  show,
  onClose,
  type,
  youtube,
}: MediaModalType) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const { t } = useTranslation();

  const modalClose = () => {
    onClose();
    setCurrentIndex(0);
    document.body.style.overflow = "auto";
  };

  const afterOpenModal = () => {
    document.body.style.overflow = "hidden";
    setCurrentIndex(0);
  };

  const handlePreviousMedia = () => {
    setCurrentIndex((prevCurrentIndex) =>
      currentIndex < 1 ? mediaItems?.length - 1 : prevCurrentIndex - 1
    );
  };

  const handleNextMedia = () => {
    setCurrentIndex((prevCurrentIndex) =>
      currentIndex >= mediaItems?.length - 1 ? 0 : prevCurrentIndex + 1
    );
  };

  useEffect(() => {
    console.log("mediaItems", mediaItems);
  }, [mediaItems]);

  useEffect(() => {
    console.log("detailItems", detailItems);
  }, [detailItems]);

  const YoutubePlayer = ({ youtube_id }: any): any => {
    return (
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${youtube_id}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    );
  };

  return (
    <>
      <Modal
        isOpen={show}
        onAfterOpen={afterOpenModal}
        onRequestClose={modalClose}
        style={customStyles}
        contentLabel=""
        ariaHideApp={false}
      >
        <div className="flex flex-col md:flex-row h-full">
          <div className="h-[60%] md:h-full flex-1 shrink bg-black justify-center items-center flex relative">
            {type === "video" ? (
              <YoutubePlayer youtube_id={youtube ?? ""} />
            ) : (
              <img
                src={mediaItems[currentIndex]}
                className="w-auto h-auto max-h-full max-w-full"
              />
            )}
            {mediaItems?.length > 1 && (
              <div
                className="absolute left-0 text-[#ffffff] h-full w-[80px] flex justify-center items-center"
                onClick={handlePreviousMedia}
              >
                <button className="opacity-75 flex justify-center items-center p-[10px] rounded-full bg-gray-700 hover:bg-gray-500 active:bg-gray-600 aspect-[1/1] w-[50px] top-[10px] left-[10px] cursor-pointer">
                  <IoIosArrowBack size={30} />
                </button>
              </div>
            )}
            {mediaItems?.length > 1 && (
              <div
                className="absolute right-0 text-[#ffffff] h-full w-[80px] flex justify-center items-center"
                onClick={handleNextMedia}
              >
                <button className="opacity-75  flex justify-center items-center p-[10px] rounded-full bg-gray-700 hover:bg-gray-500 active:bg-gray-600 aspect-[1/1] w-[50px] top-[10px] left-[10px] cursor-pointer">
                  <IoIosArrowForward size={30} />
                </button>
              </div>
            )}
            <button
              className="opacity-75 flex justify-center items-center p-[10px] rounded-full text-white bg-gray-800 hover:bg-gray-700 active:bg-gray-900 absolute h-[45px] w-[45px] top-[10px] left-[10px] cursor-pointer"
              onClick={modalClose}
            >
              <IoClose size={30} />
            </button>
          </div>
          <div className="h-[40%] md:h-full w-full sm:w-[300px] xl:w-[450px] flex-none bg-white p-[20px] flex flex-col gap-[20px] overflow-y-auto">
            <div className=" max-w-full flex flex-row gap-[10px]">
              <div className="flex-none w-[50px]">
                <div className="aspect-[1/1] rounded-full bg-gray-500 relative overflow-hidden">
                  <img src={info_profiles?.avatar} className="w-full h-full" />
                </div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div className="font-regular text-[18px]">
                  <div>{t("info_fullname")}</div>
                  <div className="font-light text-[16px] text-gray-400">
                    @tenpcr
                  </div>
                </div>
              </div>
            </div>

            <div className="font-light text-gray-700 flex flex-col gap-[10px]">
              {title && (
                <div className="font-medium text-[20px] py-[5px]">{title}</div>
              )}

              <div
                dangerouslySetInnerHTML={{ __html: detail || "" }}
                className="text-[16px] leading-[1.75em]"
              />
            </div>

            {tools?.length > 0 && (
              <div className="flex flex-wrap gap-[10px] py-[10px] ">
                {tools?.map((toolItem: any, toolIndex: number) => (
                  <div
                    key={toolIndex}
                    className="border  border-gray-200 rounded-full py-[5px] px-[15px]"
                  >
                    {toolItem}
                  </div>
                ))}
              </div>
            )}
            {button?.length > 0 && (
              <div className="flex flex-wrap gap-[10px] py-[10px] border-t border-b border-gray-200">
                {button?.map((buttonItem: any, buttonIndex: number) => (
                  <div key={buttonIndex}>
                    <Link href={buttonItem?.url} target="_blank">
                      <button className="py-[10px] px-[15px] bg-gray-100 hover:bg-gray-200 active:bg-gray-300 rounded-[10px] cursor-pointer text-gray-500">
                        {buttonItem?.label}
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}

const customStyles = {
  content: {
    width: "100%",
    height: "calc(100vh - 0px)",
    maxWidth: "100%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "visible",
    padding: "0px",
    maxHeight: "calc(100vh)",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: "99999",
  },
};
