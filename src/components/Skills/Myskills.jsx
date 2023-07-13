import React from "react";
import "./Myskills.css";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithubSquare,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiMarkdown,
  SiMongodb,
  SiReact,
  SiExpress,
  SiNetlify,
  SiGit,
} from "react-icons/si";
function Skills() {
  return (
    <div className="skills-background">
      <div className="col-md-12">
        <div className="row">
          <div className="col-lg-4 skills-col">
            <div className="tools-and-technologies-title">
              Tools and Technologies
            </div>
            <div className="skills-card">
              <div className="skills-icon">
                <FaHtml5 className="html-icon" />
              </div>
              <div className="skills-name">HTML5</div>
            </div>
            <div className="skills-card">
              <div className="skills-icon">
                <FaCss3Alt className="css-icon" />
              </div>
              <div className="skills-name">CSS3</div>
            </div>
            <div className="skills-card">
              <div className="skills-icon">
                <FaJsSquare className="js-icon" />
              </div>
              <div className="skills-name">JavaScript</div>
            </div>
            <div className="skills-card">
              <div className="skills-icon">
                <FaBootstrap className="bootstrap-icon" />
              </div>
              <div className="skills-name">Bootstrap</div>
            </div>
            <div className="skills-card">
              <div className="skills-icon">
                <SiReact className="react-icon" />
              </div>
              <div className="skills-name">React.js</div>
            </div>
            <div className="skills-card">
              <div className="skills-icon">
                <SiMarkdown className="markdwn-icon" />
              </div>
              <div className="skills-name">Markdown</div>
            </div>
            <div className="skills-card">
              <div className="skills-icon">
                <SiMongodb className="mongodb-icon" />
              </div>
              <div className="skills-name">MongoDB</div>
            </div>
            <div className="skills-card">
              <div className="skills-icon">
                <SiExpress className="express-icon" />
              </div>
              <div className="skills-name">Express.js</div>
            </div>
            <div className="skills-card">
              <div className="skills-icon">
                <FaNodeJs className="node-icon" />
              </div>
              <div className="skills-name">Node.js</div>
            </div>
            <div className="skills-card">
              <div className="skills-icon">
                <FaGithubSquare className="github-icon" />
              </div>
              <div className="skills-name">GitHub</div>
            </div>
            <div className="skills-card">
              <div className="skills-icon">
                <SiNetlify className="netlify-icon" />
              </div>
              <div className="skills-name">Netlify</div>
            </div>

            <div className="skills-card">
              <div className="skills-icon">
                <SiGit className="git-icon" />
              </div>
              <div className="skills-name">Git</div>
            </div>
          </div>

          {/* PROGRESS BAR */}

          <div className="col-lg-8 ratings-card">
            <div className="skills-title">Skills</div>
            <div className="row skills-row">
              <div className="col-lg-5 progress-1st-col">
                <div className="skill">
                  <h5 className="skills-name">JavaScript</h5>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated js-progress"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                {/* ------------------------- */}
                <div className="skill">
                  <h5 className="skills-name">React.js</h5>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated react-progress"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                {/* ------------------------- */}
                <div className="skill">
                  <h5 className="skills-name">Express.js</h5>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated express-progress"
                      role="progressbar"
                      style={{ width: "40%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                {/* ------------------------- */}
                <div className="skill">
                  <h5 className="skills-name">Node.js</h5>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated node-progress"
                      role="progressbar"
                      style={{ width: "40%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                {/* ------------------------- */}
                <div className="skill">
                  <h5 className="skills-name">MongoDB</h5>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated mongodb-progress"
                      role="progressbar"
                      style={{ width: "55%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 progress-2nd-col">
                {/* ------------------------- */}
                <div className="skill">
                  <h5 className="skills-name">HTML5</h5>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated html-progress"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                {/* ------------------------- */}
                <div className="skill">
                  <h5 className="skills-name">CSS3</h5>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated css-progress"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                {/* ------------------------- */}

                <div className="skill">
                  <h5 className="skills-name">Bootstrap</h5>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bootstrap-progress"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                {/* ------------------------- */}
                <div className="skill">
                  <h5 className="skills-name">Github</h5>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated github-progress"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                {/* ------------------------- */}
                <div className="skill">
                  <h5 className="skills-name">Git</h5>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated git-progress"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
