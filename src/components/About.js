import React from "react";
import pp from "../img/pp.png";
import logoHtml from "../img/html.svg"; 
import logoCss from "../img/css.svg";
import logoJavascript from "../img/javascript.svg";
import logoReact from "../img/react.svg";
import logoBootstrap from "../img/bootstrap.svg";
import logoSass from "../img/sass.svg"; 
import logoWebpack from "../img/webpack.svg";
import logoGit from "../img/git.svg";
import logoXd from "../img/xd.svg";
import logoFigma from "../img/figma.svg";
import logoPs from "../img/ps.png";
import logoPr from "../img/pr.png";
import Card from "./Card";
import Certificate from "./Certificate";
import cer1 from "../img/cer1.png";
import cer2 from "../img/cer2.png";
import cer3 from "../img/cer3.png";
import cer4 from "../img/cer4.png";
import cer5 from "../img/cer5.png";
import cer6 from "../img/cer6.png";
import cer7 from "../img/cer7.png";
import cer8 from "../img/cer8.png";
import cer9 from "../img/cer9.png";
import cer10 from "../img/cer10.png";
import cer11 from "../img/cer11.png";


const About = () => {
  return <>
           <div className="container pt-5 ps-5 pe-5 mobile bg-white"> 
              <div className="row p-3 pt-5"> 
                <div className="col-xl-8 col-lg-12 col-sm-12 mobile"> 
                        <h1 className="mx-2"> A little about me.</h1>
                        <p className="p-3 prompt justify mobile"> 
                        Hello! I'm Mert Mehmet Uzel, a Junior Frontend Developer and Educational Technology Specialist. 
                        I completed my undergraduate studies in Computer Education and Instructional Technology at
                        Hacettepe University, and I had an unforgettable experience with the Erasmus+ Program at 
                        Vilnius University.
                        During my time as a part-time Frontend Developer at Hacettepe University - 
                        Continuing Education Center, I honed my skills in HTML5, CSS3, Javascript and 
                        WordPress. Creating websites and updating content was both enjoyable and 
                        instructive for me. Balancing my life with hobbies like mobile photography, 
                        theatre, literature, and travel, I continue to focus on continuous learning 
                        and new projects. If you're interested in checking out my projects or 
                        collaborating, please feel free to reach out!
                        </p>
                        </div>
                    <div className="col-xl-4 d-flex align-items-start justify-content-center mobile-hidden tablet-hidden"> 
                       <img src={pp} alt="pp" className="img-fluid img skew border border-3 border-white shadow"/> 
                    </div>
                 
                  <div className="col-xl-12"> 
                    <div className="row p-1"> 
                    <div className="d-flex flex-column">
                    <h1 className="my-2"> Skills.</h1>
                      <div className="d-flex flex-wrap justify-content-start align-items-center my-2"> 
                        <a href="https://www.w3.org/html/" target="_blank" rel="noopener noreferrer">
                            <Card title="HTML"
                              img={logoHtml}
                              content="100%"/>
                        </a>
                        <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noopener noreferrer">
                            <Card title="CSS"
                              img={logoCss}
                              content="100%"/>
                        </a>
                        <a href="https://ecma-international.org/publications-and-standards/standards/ecma-262/" target="_blank" rel="noopener noreferrer">
                            <Card title="Javascript"
                              img={logoJavascript}
                              content="80%"/>
                        </a>

                        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                            <Card title="React JS"
                              img={logoReact}
                              content="75%"/>
                         </a>
                         <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                            <Card title="Bootstrap"
                              img={logoBootstrap}
                              content="75%"/>
                        </a>
                        <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
                            <Card title="SASS"
                              img={logoSass}
                              content="90%"/>
                        </a>

                        <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">
                            <Card title="Webpack"
                              img={logoWebpack}
                              content="50%"/>
                        </a>
                        <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                            <Card title="Git"
                              img={logoGit}
                              content="60%"/>
                        </a>
                        <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
                            <Card title="Figma"
                              img={logoFigma}
                              content="85%"/>
                        </a>

                        <a href="https://helpx.adobe.com/tr/xd/get-started.html" target="_blank" rel="noopener noreferrer">
                            <Card title="Xd"
                              img={logoXd}
                              content="100%"/>
                       </a>
                       <a href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noopener noreferrer">
                            <Card title="Photoshop"
                              img={logoPs}
                              content="60%"/>
                       </a>
                       <a href="https://www.adobe.com/products/premiere.html" target="_blank" rel="noopener noreferrer">
                            <Card title="Premiere"
                              img={logoPr}
                              content="100%"/>
                       </a>

                      </div>

                      
                   </div>
                  </div>

                <div className="row p-1"> 
                   <div className="d-flex flex-column">
                   <h1 className="my-2"> Certificates.</h1>

                      <div className="d-flex flex-wrap justify-content-start align-items-center my-2"> 
                          <a href="https://coursera.org/verify/S359DPHLAD8A" target="_blank" rel="noopener noreferrer">
                                <Certificate title="Johns Hopkins University"
                                  img={cer1}
                                  content="HTML, CSS and JS for Web Developers"/>
                          </a>

                          <a href="https://coursera.org/verify/professional-cert/X7FH6HQWS2BW" target="_blank" rel="noopener noreferrer">
                                <Certificate title="Meta"
                                  img={cer2}
                                  content="Front-End Developer"/>
                          </a>

                          <a href="https://coursera.org/verify/LLURJFF79H5M" target="_blank" rel="noopener noreferrer">
                                <Certificate title="Meta"
                                  img={cer3}
                                  content="Introduction for Front-End Development"/>
                          </a>

                          <a href="https://coursera.org/verify/WDWV3GHFE74E" target="_blank" rel="noopener noreferrer">
                                <Certificate title="Meta"
                                  img={cer4}
                                  content="Programming with Javascript"/>
                          </a>

                          <a href="https://coursera.org/verify/NATU7J4EGJ69" target="_blank" rel="noopener noreferrer">
                                <Certificate title="Meta"
                                  img={cer5}
                                  content="Version Control"/>
                          </a>

                          <a href="https://coursera.org/verify/W7CHH28H8URV" target="_blank" rel="noopener noreferrer">
                                <Certificate title="Meta"
                                  img={cer6}
                                  content="HTML and CSS in Depth"/>
                          </a>

                          <a href="https://coursera.org/verify/CF8ZRWFWZEE6" target="_blank" rel="noopener noreferrer">
                                <Certificate title="Meta"
                                  img={cer7}
                                  content="React Basics"/>
                          </a>

                          <a href="https://coursera.org/verify/9TAHAMXCLVKM" target="_blank" rel="noopener noreferrer">
                                <Certificate title="Meta"
                                  img={cer8}
                                  content="Advanced React"/>
                          </a>

                          <a href="https://coursera.org/verify/6SFVVAZP32WQ" target="_blank" rel="noopener noreferrer">
                                <Certificate title="Meta"
                                  img={cer9}
                                  content="Principles of UX/UI Design"/>
                          </a>

                          <a href="https://coursera.org/verify/MU7GKQSQX5RA" target="_blank" rel="noopener noreferrer">
                                <Certificate title="Meta"
                                  img={cer10}
                                  content="Front-End Developer Capstone"/>
                          </a>

                          <a href="https://coursera.org/verify/XEAEJ5PJTUZL" target="_blank" rel="noopener noreferrer">
                                <Certificate title="Meta"
                                  img={cer11}
                                  content="Coding Interview Preparation"/>
                          </a>
                          </div>

                      


                  </div>
              </div>
            </div>
            
           </div>
         </div>
       </>;
};

export default About;