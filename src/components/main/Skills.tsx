/* eslint-disable @typescript-eslint/no-explicit-any */
import { MySkillsType } from "@/types/mySkills";
import { skillsLogo } from "@/data/about/mySkills";
import Marquee from "react-fast-marquee";

function Skills() {

  return (
    <div className="py-[30px] bg-linear-to-l from-black to-blue-800">
      <Marquee>
        <div className="flex flex-row gap-[0px] xl:gap-[40px]">
        {skillsLogo?.map((item: MySkillsType, index: number) => (
          <img
            key={index}
            src={item.logoWhite}
            title={item.name}
            alt={item.name}
            className="h-[20px] md:h-[20px] xl:h-[30px] opacity-90 hover:opacity-100 grayscale hover:grayscale-0 transition duration-300 mr-[40px]"
          />
        ))}</div>
      </Marquee>

    </div>
  );
}

export default Skills;
