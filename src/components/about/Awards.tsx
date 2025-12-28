import { awardsLists } from "@/data/about/awards";
import { AwardsType } from "@/types/awards";
import { ImageType } from "@/types/images";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

function AboutExperience() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex flex-col gap-[40px]">
        {awardsLists?.map((awardsItem: AwardsType, awardsIndex: number) => (
          <div
            key={awardsIndex}
            className="group rounded border border-gray-100 p-[40px] hover:shadow-lg"
          >
            <div
              className={`${
                awardsIndex % 2 === 0
                  ? "flex-col-reverse md:flex-row"
                  : "flex-col-reverse md:flex-row-reverse"
              } flex gap-[40px]`}
            >
              <div className="w-full md:w-[50%] flex flex-col gap-[15px]">
                <div className="font-medium text-[20px] text-blue-600">
                  {awardsItem.period}
                </div>

                <div className="flex flex-col">
                  <div className="font-medium text-[26px] text-gray-700">
                    {t(awardsItem?.name)}
                  </div>
                </div>

                <div className="text-gray-600 font-extralight mt-[15px]">
                  <Trans i18nKey={awardsItem.detail ?? ""}></Trans>
                </div>
              </div>
              <div className="w-full md:w-[50%]">
                <div>
                  {awardsItem?.images?.map(
                    (itemImg: ImageType, indexImg: number) => (
                      <img
                        key={indexImg}
                        src={itemImg?.src}
                        className="aspect-[9/5] rounded-[20px] object-cover group-hover:scale-[1.05] transition-all duration-300"
                        alt={t(awardsItem?.name)}
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutExperience;
