import React, { useState } from "react";

import Image from "next/image";

import { listSkills } from "../../data/skills";
import { Skill } from "../../types/skills";

import style from "./style.module.scss";

const MySkills = () => {
  const [skills] = useState<Skill[]>(listSkills);

  return (
    <div className={`${style.skills} container-spacing`}>
      <h2 className="title">Skills</h2>
      <div className={style.skills_column}>
        {skills.map((skill) => (
          <div className={style.skills_column_language} key={skill.id}>
            {typeof skill.imgSrc === "string" ? (
              <Image
                src={skill.imgSrc}
                alt={skill.text}
                width={56}
                height={56}
                className="w-14 h-14"
              />
            ) : (
              <skill.imgSrc className={style.skills_column_language_icon} />
            )}
            <span>{skill.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
