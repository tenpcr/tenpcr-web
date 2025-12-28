/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArticleItemTypes } from "../../types/article.types";
import Link from "next/link";

function ArticleItem({ articleItem }: { articleItem: ArticleItemTypes }) {
  return (
    <div className="h-full w-full my-[10px] shadow hover:shadow-lg hover:shadow-gray-200 active:opacity-70 rounded-[10px] flex-shrink-0 cursor-pointer bg-white">
      <Link href={`/blog/${articleItem?.slug || "content"}-${articleItem?.id}`}>
        <div className="flex flex-col h-full">
         
            <div className="flex-none aspect-[400/200] rounded-t bg-gray-200 relative overflow-hidden">
              <img
                className="w-full h-full object-cover	"
                src={articleItem?.thumbnail}
                alt={articleItem?.title}
              />
            </div>

            <div className="py-[15px] px-[20px] flex-1 shrink-1 flex flex-col justify-between gap-[15px] h-full">
              <div className="font-normal line-clamp-2 min-h-[42px] text-[#37171c] flex flex-col gap-[15px]">
                <span className="line-clamp-2 leading-[1.6em] text-[18px] md:text-[18px] xl:text-[22px]">{articleItem?.title}</span>
                {articleItem?.yoast_head_json?.description && (
                  <p className="line-clamp-2 p-0 m-0 font-light text-[14px] text-gray-500 leading-[1.7em]">
                    {articleItem?.yoast_head_json?.description}
                  </p>
                )}
              </div>

              <div className="text-[13px] text-gray-600 line-clamp-1 mt-1">
                Article
              </div>
            </div>
          </div>
        
      </Link>
    </div>
  );
}

export default ArticleItem;
