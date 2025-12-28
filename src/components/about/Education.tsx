import { EducationType  } from "@/types/education";
import { educationLists } from "@/data/about/education";
import { useTranslation } from "react-i18next";

function AboutEducation() {
const { t } = useTranslation();
  return (
    <div>
      {educationLists?.map(
        (educationItem: EducationType, educationIndex: number) => (
          <div
            key={educationIndex}
            className="font-light py-[20px] border-b border-gray-100"
          >
            <div className="font-medium text-[20px]">
              {t(educationItem.degree)}
            </div>
            <div>{t(educationItem.institution)}</div>
            <div>{t(educationItem.major)}</div>
          </div>
        )
      )}
    </div>
  );
}


export default AboutEducation;