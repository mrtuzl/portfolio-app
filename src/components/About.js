import React from "react";
import pp from "../img/pp.png";
import { ImLinkedin } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { SiStackoverflow } from "react-icons/si";  
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
const About = () => {
  return <>
           <div className="container pt-5 ps-5 pe-5"> 
              <div className="row"> 
                <div className="col-lg-8 col-sm-12"> 
                   <div className="row"> 
                        <h1 className="p-3 mx-2"> I’m Mert Uzel. I live in Ankara, where I design the future.</h1>
                        <p className="mx-3"> 
                        I've worked on a variety of projects over the years and 
                        I'm proud of the progress I've made. Many of these projects 
                        are open-source and available for others to explore and contribute to.
                        If you're interested in any of the projects I've worked on, 
                        please feel free to check out the code and suggest any improvements
                        or enhancements you might have in mind. Collaborating with others 
                        is a great way to learn and grow, and I'm always open to new ideas and feedback.
                        </p>
                    </div>
                    <div className="row"> 
                        <div className="col-lg-5 col-sm-12 social p-3 d-flex flex-column"> 
                          <div>
                              <a href="https://www.linkedin.com/in/mertmehmetuzel/" className="text-decoration-none">
                                <ImLinkedin size={25} color="gray" className="m-3 grow-on-hover" /> 
                                <span className="prompt fw-bold text-secondary"> Follow on LinkedIn</span> </a>
                              </div>
                              <div> 
                              <a href="https://github.com/mrtuzl/" className="text-decoration-none">
                                <ImGithub size={25} color="gray" className="m-3 grow-on-hover"/> 
                                <span className="prompt fw-bold text-secondary"> Follow on Github</span> </a>
                              </div>
                              <div>
                                <a href="https://www.instagram.com/mertuzelofficial/" className="text-decoration-none">
                                <RiInstagramFill size={30} color="gray" className="m-3 grow-on-hover" /> 
                                <span className="prompt fw-bold text-secondary"> Follow on Instagram</span> </a>
                              </div>
                              <div>
                                <a href="https://stackoverflow.com/" className="text-decoration-none"> 
                                <SiStackoverflow size={25} color="gray" className="m-3 grow-on-hover"/> 
                                <span className="prompt fw-bold text-secondary"> Follow on Stack Overflow</span> </a> 
                              </div>
                          </div>
                        <div className="col-lg-7 col-sm-12  text-center d-flex flex-column justify-content-center"> 
                            <span className="prompt fw-bolder"> Software Development Skills </span> 
                            <div className="my-3"> 
                              <img src={logoHtml} alt="html" className="logo m-1 grow-on-hover"/> 
                              <img src={logoCss} alt="css" className="logo m-1 grow-on-hover"/> 
                              <img src={logoJavascript} alt="javascript" className="logo m-1 grow-on-hover"/> 
                              <img src={logoReact} alt="react" className="logo m-1 grow-on-hover"/> 
                              <img src={logoBootstrap} alt="bootstrap" className="logo m-1 grow-on-hover"/> 
                            </div>
                            <div> 
                              <img src={logoSass} alt="sass" className="logo m-1 grow-on-hover"/> 
                              <img src={logoWebpack} alt="webpack" className="logo m-1 grow-on-hover"/> 
                              <img src={logoGit} alt="git" className="logo m-1 grow-on-hover"/> 
                              <img src={logoXd} alt="xd" className="logo m-1 grow-on-hover"/> 
                              <img src={logoFigma} alt="figma" className="logo m-1 grow-on-hover"/> 
                            </div>
                      
                    </div>
                    </div>
                    
               
                </div>
                <div className="col-lg-4 col-sm-12  d-flex align-items-center"> 
                <img src={pp} alt="pp" className="img-fluid img skew border border-3 border-white shadow"/> 
                </div>
              </div>
            </div>
        </>;
};

export default About;