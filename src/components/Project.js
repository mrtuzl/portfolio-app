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
import pp2 from "../img/pp2.png";
import ProjectCard from "./ProjectCard";



const Project = () => {
  return <>
             <div className="container pt-5 ps-5 pe-5"> 
              <div className="row"> 
                <div className="col-lg-4 col-sm-12  d-flex align-items-start justify-content-center"> 
                    <img src={pp2} alt="pp" className="img-fluid img skew border border-3 border-white shadow"/> 
                </div>
                <div className="col-lg-8 col-sm-12">  
                  <div className="row p-3"> 
                        <h1 className="p-3 mx-2"> Things I’ve made trying to put my dent in the universe. </h1>
                        <p className="p-3 promp justify"> 
                        I've worked on a variety of projects over the years and 
                        I'm proud of the progress I've made. Many of these projects are 
                        open-source and available for others to explore and contribute to. 
                        If you're interested in any of the projects I've worked on, please 
                        feel free to check out the code and suggest any improvements or enhancements 
                        you might have in mind. Collaborating with others is a great way to learn 
                        and grow, and I'm always open to new ideas and feedback.
                        </p>
                </div>
            
                    <div className="col-lg-12 d-flex justify-content-evenly">  
                      <div>
                       <ProjectCard title="Calculator App"
                       description="Bla Bla"
                       img={logoJavascript}/>

                      <ProjectCard title="Weather App"
                       description="Bla Bla"
                       img={logoJavascript}/>
                      </div>
                      <div>

                      <ProjectCard title="Recipe App"
                       description="Bla Bla"
                       img={logoJavascript}/>


                      <ProjectCard title="Reservation App"
                       description="Bla Bla"
                       img={logoJavascript}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
        </>;
};

export default Project;