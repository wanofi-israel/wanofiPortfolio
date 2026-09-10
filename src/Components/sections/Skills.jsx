import React from 'react'
import Html from "../../assets/Htmllogo.png";
import Css from "../../assets/Csslogo.png";
import Js from "../../assets/jslogo.png";
import ReactLogo from "../../assets/Reactlogo.png";
import NodeLogo from "../../assets/Nodelogo.png";
import MongoLogo from "../../assets/MongoLogo.png";
import Xd from "../../assets/Xd.png";
import Indesign from "../../assets/Indesign.png";
import Figma from "../../assets/Figma.png";
import PythonLogo from "../../assets/pythonlogo.png";
import PostgressLogo from "../../assets/postgresqllogo.png";
function Skills({handelSkills}) {
  return (
    <section className="skills" id="skills">
        <h1 className="section-title skillsafter">Skills</h1>
        <div className="section-main">
          <div className="skill-left">
            <div className="button-div-outter">
              <div className="button-div" onClick={handelSkills}>
                <div className="text-border">
                  <h2 className="front-end">
                    Front
                    <br />
                    End
                  </h2>
                </div>
                <div className="text-border">
                  <h2 className="back-end">
                    Back
                    <br />
                    End
                  </h2>
                </div>
                <div className="text-border">
                  <h2 className="programing">
                    Programing
                  </h2>
                </div>
                <div className="text-border">
                  <h2 className="UI-UX">UI/UX</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="skill-right">
            <div className="skill-list frontend-list">
              <div className="skill-item-container">
                <img className="skill-item" src={Html} alt="html-logo" />
                <div className="skill-name">HTML</div>
              </div>
              <div className="skill-item-container">
                <img className="skill-item css" src={Css} alt="css-logo" />
                <div className="skill-name">CSS3</div>
              </div>
              
              <div className="skill-item-container">
                <img
                  className="skill-item react"
                  src={ReactLogo}
                  alt="react-logo"
                />
                <div className="skill-name">React</div>
              </div>
            </div>
            <div className="skill-list backend-list">
              <div className="skill-item-container">
                <img className="skill-item" src={NodeLogo} alt="node-logo" />
                <div className="skill-name">Node</div>
              </div>
              <div className="skill-item-container">
                <img
                  className="skill-item css"
                  src={MongoLogo}
                  alt="mongo-logo"
                />
                <div className="skill-name">MongoDB</div>
              </div>
              <div className="skill-item-container">
                <img
                  className="skill-item css"
                  src={PostgressLogo}
                  alt="postgresql-logo"
                />
                <div className="skill-name">PostgreSQL</div>
              </div>
            </div>
            <div className="skill-list programing-list">
              <div className="skill-item-container">
                <img className="skill-item" src={Js} alt="js-logo" />
                <div className="skill-name">JavaScript</div>
              </div>
              <div className="skill-item-container">
                <img className="skill-item" src={PythonLogo} alt="Python-logo" />
                <div className="skill-name">Python</div>
              </div>
            </div>
            <div className="skill-list uiux-list">
              <div className="skill-item-container">
                <img className="skill-item" src={Xd} alt="xd-logo" />
                <div className="skill-name">Adobe Xd</div>
              </div>
              <div className="skill-item-container">
                <img
                  className="skill-item css"
                  src={Indesign}
                  alt="indesign-logo"
                />
                <div className="skill-name">Adobe InDesign</div>
              </div>
              <div className="skill-item-container">
                <img className="skill-item css" src={Figma} alt="Figma-logo" />
                <div className="skill-name">Figma</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Skills
