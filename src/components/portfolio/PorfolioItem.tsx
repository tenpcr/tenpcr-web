import { useDispatch } from "react-redux";
import { openMediaModal } from "@/redux/slices/mediaModalSlice";

/* eslint-disable @typescript-eslint/no-explicit-any */
function PortfolioItem({ itemPortfolio }: { itemPortfolio: any }) {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(
          openMediaModal({
            title: itemPortfolio?.title,
            detail: itemPortfolio?.detail,
            button: itemPortfolio?.button?.filter((btn: any) => btn.url && btn.label),
            tools: itemPortfolio?.tags?.map((tag: any) => tag.name) ?? [],
            imagesSrcList: itemPortfolio?.imagesSrcList,
            imagesDetailList: itemPortfolio?.title,
            youtube: itemPortfolio?.youtube_id,
            type: itemPortfolio?.media_type,
          })
        );
      }}
      className="group flex flex-col bg-[#ffffff] rounded-[10px] shadow hover:shadow-xl cursor-pointer group"
    >
      <div className="aspect-[1/1] overflow-hidden">
        <img
          src={itemPortfolio?.image}
          className="h-full w-full object-cover bg-[#f5f5f5] rounded-t-[10px] group-hover:scale-[1.1] transition-all duration-300"
          alt={itemPortfolio?.title}
        />
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: itemPortfolio?.title }}
        className="truncate py-[20px] px-[20px] text-[16px] group-hover:text-blue-500 font-medium line-clamp-1"
      ></div>
    </div>
  );
}

export default PortfolioItem;
