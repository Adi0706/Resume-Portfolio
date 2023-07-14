import * as React from "react";
import Cprog from "../Images/c.png";
import Cpp from "../Images/c++.png";
import html from "../Images/html.png";
import css from "../Images/css.png";
import Js from "../Images/Js.png";
import react from "../Images/react.png";
import mui from "../Images/mui.png";
import git from "../Images/git.png";
import github from "../Images/github.png";
import vscode from "../Images/vscode.png";
import msoffice from "../Images/msoffice.png";

export default function SpacingGrid() {
  return (
    <section className="SkillSec">
      <div className="skills">
        <h2>MY SKILLS</h2>
        <ul className="skill-list">
          <li className="coding">
            <img src={Cprog} />
          </li>
          <li className="coding">
            <img src={Cpp} />
          </li>
          <li className="coding">
            <img src={html} />
          </li>
          <li className="coding">
            <img src={css} />
          </li>
          <li className="coding">
            <img src={Js} />
          </li>
          <li className="coding">
            <img src={react} style={{ width: "50px", height: "50px" }} />
          </li>
        </ul>
      </div>
      <div className="libraries">
        <h2>LIBRARIES/FRAMEWORKS AND TOOLS</h2>
        <ul className="skill-list">
          <li className="coding">
            <img src={mui} />
          </li>
          <li className="coding">
            <img src={git} />
          </li>
          <li className="coding">
            <img src={github} />
          </li>
          <li className="coding">
            <img src={vscode} />
          </li>
          <li className="coding">
            <img src={msoffice} />
          </li>
        </ul>
      </div>
      <div className="soft">
        <h2>SOFT SKILLS</h2>
        <ul className="skill-list">
          <li className="soft">COMMUNICATION</li>
          <li className="soft">CREATIVITY</li>
          <li className="soft">LEADERSHIP</li>
          <li className="soft">PROBLEM SOLVING</li>
        </ul>
      </div>
    </section>
  );
}






