import React from "react";
import softSkillsObject from "./SoftSkillsObject.js";

const SoftSkills = () => {

  const SkillsReturn = () => {
    let skillsTitleArray = Object.keys(softSkillsObject);
    let skillsValueArrayOfArrays = Object.values(softSkillsObject);

    return skillsTitleArray.map((skillTitle) => {
      return (
        <div className={"skill-title"} key={skillTitle}>
          {skillTitle}
          {skillsValueArrayOfArrays.map((skillValueArray) => (
            <div key={skillsValueArrayOfArrays.indexOf(skillValueArray)}>
              <ul>
                {skillsValueArrayOfArrays.indexOf(skillValueArray) ===
                  skillsTitleArray.indexOf(skillTitle) &&
                  skillValueArray.map((skillValue) => <li key={skillValueArray.indexOf(skillValue)}>{skillValue}</li>)}
              </ul>
            </div>
          ))}
        </div>
      );
    });
  };

  return (
    <div>
      <SkillsReturn />
    </div>
  );
}

export default SoftSkills;
