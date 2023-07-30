import React from "react";
import {
  SiApplemusic,
  SiJavascript,
  SiRubyonrails,
  SiPostgresql,
  SiMysql,
  SiReact,
  SiRedux,
  SiRuby,
  SiMui,
} from "react-icons/si";
import CodeCertifications from "../CodeCertifications";
import "./CodeSkills.css";

const codewarsURL = "https://www.codewars.com/users/elijahsamuels/badges/large";

const CodeSkills = () => {
  return (
    <div>
      <CodeCertifications />

      <h4>Skill Sets</h4>
      <div>
        <br />
        <div className="code-skills">
          <SiRuby fill={"rgb(255, 20, 90)"} className={"svg"} />
          <SiRubyonrails className={"svg"} />
          <SiApplemusic className={"svg"} />
        </div>
        <div className="code-skills">
          <SiJavascript className={"svg"} />
          <SiReact fill={"rgb(80, 80, 200)"} className={"svg"} />
          <SiRedux className={"svg"} />
        </div>
        <div className="code-skills">
          <SiMui className={"svg"} />
          <SiMysql className={"svg"} />
          <SiPostgresql className={"svg"} />
        </div>
        <div className="code-skills">
          <img src={codewarsURL} alt="codewars_image" />
        </div>
      </div>
    </div>
  );
};

export default CodeSkills;
