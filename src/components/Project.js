import React from "react";
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
import { HiLink } from "react-icons/hi2";
import pp2 from "../img/pp2.png";



const Project = () => {
  return <>
             <div className="container pt-5 ps-5 pe-5"> 
              <div className="row  d-flex align-items-center"> 
                <div className="col-lg-3 col-sm-12"> 
                    <img src={pp2} alt="pp" className="img-fluid img skew border border-3 border-white shadow"/> 
                </div>
                <div className="col-lg-8 col-sm-12">  
                        <h1 className="mx-2"> Things I’ve made trying to put my dent in the universe. </h1>
                        <p className="mx-3 promp justify"> 
                        I've worked on a variety of projects over the years and 
                        I'm proud of the progress I've made. Many of these projects are 
                        open-source and available for others to explore and contribute to. 
                        If you're interested in any of the projects I've worked on, please 
                        feel free to check out the code and suggest any improvements or enhancements 
                        you might have in mind. Collaborating with others is a great way to learn 
                        and grow, and I'm always open to new ideas and feedback.
                        </p>
                </div>
                <div className="row"> 
                    <div className="col-lg-12 d-flex justify-content-evenly">  
                      <div>
                        <div className="card rounded-3 p-3 m-3 border-0">
                          <div className="card-body">
                            <h5 className="card-title">Calculator App</h5>
                            <p className="card-text prompt">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <HiLink/> 
                            <a href="#" className="text-decoration-none m-1">View Project</a>
                          </div>
                          <div className="d-flex"> 
                          <img src={logoReact} alt="react" className="logo m-1" width="20px"/> 
                          <img src={logoJavascript} alt="javascript" className="logo m-1" width="20px"/> 
                          <img src={logoHtml} alt="html" className="logo m-1" width="20px"/> 
                          </div>
                        </div>

                        <div className="card rounded-3 p-3 m-3 border-0">
                          <div className="card-body">
                            <h5 className="card-title">Weather App</h5>
                            <p className="card-text prompt">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <HiLink/> 
                            <a href="#" className="text-decoration-none m-1">View Project</a>
                          </div>
                              <div className="d-flex"> 
                              <img src={logoReact} alt="react" className="logo m-1" width="20px"/> 
                              <img src={logoJavascript} alt="javascript" className="logo m-1" width="20px"/> 
                              <img src={logoHtml} alt="html" className="logo m-1" width="20px"/> 
                              </div>
                        </div>
                     </div>

                     <div> 
                        <div className="card rounded-3 p-3 m-3 border-0">
                          <div className="card-body">
                            <h5 className="card-title">Recipe App</h5>
                            <p className="card-text prompt">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <HiLink/> 
                            <a href="#" className="text-decoration-none m-1">View Project</a>
                          </div>
                              <div className="d-flex"> 
                              <img src={logoReact} alt="react" className="logo m-1" width="20px"/> 
                              <img src={logoJavascript} alt="javascript" className="logo m-1" width="20px"/> 
                              <img src={logoHtml} alt="html" className="logo m-1" width="20px"/> 
                              </div>
                        </div>

                        <div className="card rounded-3 p-3 m-3 border-0">
                          <div className="card-body">
                            <h5 className="card-title">Reservation App</h5>
                            <p className="card-text prompt">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                             <HiLink/> 
                            <a href="#" className="text-decoration-none m-1">View Project</a>
                          </div>
                              <div className="d-flex"> 
                              <img src={logoReact} alt="react" className="logo m-1" width="20px"/> 
                              <img src={logoJavascript} alt="javascript" className="logo m-1" width="20px"/> 
                              <img src={logoHtml} alt="html" className="logo m-1" width="20px"/> 
                              </div>
                        </div>
                      </div>
                      </div>
                  </div>
                    </div>
              </div>
        </>;
};

export default Project;