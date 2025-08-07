import React, {useContext} from "react";
import "./DevOpsMethodologies.scss";
import {Fade} from "react-reveal";
import {devopsMethodologies} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function DevOpsMethodologies() {
  const {isDark} = useContext(StyleContext);
  if (!devopsMethodologies.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="devops">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {devopsMethodologies.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {devopsMethodologies.subTitle}
            </p>
            <div>
              {devopsMethodologies.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
