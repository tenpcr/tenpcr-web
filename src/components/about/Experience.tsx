import { experience } from "@/data/about/experience";
import { ExperienceType } from "@/types/experience";
import { ImageType } from "@/types/images";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

function AboutExperience() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex flex-col gap-[40px]">
        {experience?.map(
          (experienceItem: ExperienceType, experienceIndex: number) => (
            <div
              key={experienceIndex}
              className="group rounded border border-gray-100 p-[40px] hover:shadow-lg"
            >
              <div
                className={`${
                  experienceIndex % 2 === 0
                    ? "flex-col-reverse md:flex-row"
                    : "flex-col-reverse md:flex-row-reverse"
                } flex gap-[40px]`}
              >
                <div className="w-full md:w-[50%] flex flex-col gap-[15px]">
                  <div className="font-medium text-[20px] text-blue-600">
                    {experienceItem.period}
                  </div>

                  <div className="flex flex-col">
                    <div className="font-medium text-[26px] text-gray-700">
                      {t(experienceItem?.position)}
                    </div>
                    <div className="font-regular text-[18px] text-gray-700">
                      {t(experienceItem?.company)}
                    </div>
                  </div>

                  <div className="text-gray-600 font-extralight mt-[15px]">
                    <Trans i18nKey={experienceItem.detail ?? ""}></Trans>
                  </div>
                </div>
                <div className="w-full md:w-[50%]">
                  <div>
                    {experienceItem?.images?.map(
                      (itemImg: ImageType, indexImg: number) => (
                        <img
                          key={indexImg}
                          src={itemImg?.src}
                          className="aspect-[9/5] rounded-[20px] object-cover group-hover:scale-[1.05] transition-all duration-300"
                          alt={`${t(experienceItem?.position)} - ${t(
                            experienceItem?.company
                          )}`}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>

              <div></div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default AboutExperience;
