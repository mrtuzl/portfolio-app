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
import Card from "./Card";
const About = () => {
  return <>
           <div className="container pt-5 ps-5 pe-5 mobile"> 
              <div className="row"> 
                <div className="col-lg-8 col-sm-12 mobile"> 
                   <div className="row p-3"> 
                        <h1 className="mx-2"> I’m Mert Uzel. I live in Ankara, where I design the future.</h1>
                        <p className="p-3 prompt justify"> 
                        I've worked on a variety of projects over the years and 
                        I'm proud of the progress I've made. Many of these projects 
                        are open-source and available for others to explore and contribute to.
                        If you're interested in any of the projects I've worked on, 
                        please feel free to check out the code and suggest any improvements
                        or enhancements you might have in mind. Collaborating with others 
                        is a great way to learn and grow, and I'm always open to new ideas and feedback.
                        </p>
                    </div>
                    <div className="d-flex flex-column p-3"> 
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
                      </div>

                      <div className="d-flex justify-content-evenly align-items-center mobile-column">
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
                      </div>

                      <div className="d-flex justify-content-evenly align-items-center mobile-column"> 
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
                      </div>

                      <div className="d-flex justify-content-evenly align-items-center mobile-column"> 
                       <a href="https://helpx.adobe.com/tr/xd/get-started.html" target="_blank" rel="noopener noreferrer">
                            <Card title="Xd"
                              img={logoXd}
                              content="100%"/>
                       </a>
                       <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
                            <Card title="Figma"
                              img={logoFigma}
                              content="85%"/>
                        </a>
                      </div>
                   </div>
               </div>
             <div className="col-lg-4 col-sm-12  d-flex align-items-start justify-content-center mobile-hidden"> 
                <img src={pp} alt="pp" className="img-fluid img skew border border-3 border-white shadow"/> 
             </div>
           </div>
         </div>
       </>;
};

export default About;