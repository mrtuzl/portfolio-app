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
const About = () => {
  return <>
           <div className="container pt-5 ps-5 pe-5 mobile"> 
              <div className="row"> 
                <div className="col-xl-8 col-lg-12 col-sm-12 mobile "> 
                   <div className="row p-3"> 
                        <h1 className="mx-2"> A little about me.</h1>
                        <p className="p-3 prompt justify"> 
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
                    <div className="d-flex flex-column">
                      <div className="d-flex justify-content-evenly align-items-center mobile-column"> 
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
                      </div>

                      <div className="d-flex justify-content-evenly align-items-center mobile-column">
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
                      </div>

                      <div className="d-flex justify-content-evenly align-items-center mobile-column"> 
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
                      </div>

                      <div className="d-flex justify-content-evenly align-items-center mobile-column"> 
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
             <div className="col-xl-4 d-flex align-items-start justify-content-center mobile-hidden tablet-hidden"> 
                <img src={pp} alt="pp" className="img-fluid img skew border border-3 border-white shadow"/> 
             </div>
           </div>
         </div>
       </>;
};

export default About;