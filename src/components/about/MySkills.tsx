import { skillsLogo } from "@/data/about/mySkills";
import { MySkillsType } from "@/types/mySkills";

function AboutSkills() {
  return (
    <div className="flex grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-[10px]">
      {skillsLogo?.map((mySkillsItem: MySkillsType, mySkillsNumber: number) => (
        <div
          key={mySkillsNumber}
          title={mySkillsItem?.name}
          className="group border border border-gray-100 hover:shadow-md p-[10px] rounded flex flex-col gap-[5px]"
        >
          <div className="overflow-hidden">
            <img
              src={mySkillsItem?.logoUrl}
              className="aspect-[1/1] object-contain  group-hover:scale-[1.3] transition-all duration-300"
              alt={mySkillsItem?.name}
            />
          </div>
          <div className="line-clamp-2 font-light text-gray-600">
            {mySkillsItem?.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutSkills;
