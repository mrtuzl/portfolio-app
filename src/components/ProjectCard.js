import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { TbExternalLink } from "react-icons/tb";
import logoJavascript from "../img/javascript.svg";
import logoReact from "../img/react.svg";
import logoBootstrap from "../img/bootstrap.svg";
import logoSass from "../img/sass.svg"; 

const ProjectCard = (props) => {

  return <>
           <div className="card rounded-3 m-3 p-2 border-0 shadow card-hover">
                <div className="card-body ">
                    <h5 className="card-title prompt fw-bold">{props.title}</h5>
                    <p className="card-text prompt">{props.description}</p>
                        <div className="d-flex  mobile-column justify-content-start">
                                <div> 
                                    <AiOutlineGithub/> 
                                    <a href={props.code} className="text-decoration-none text-secondary align-middle p-2">View Code</a>
                                </div>
                                <div> 
                                    <TbExternalLink/> 
                                    <a href={props.live} className="text-decoration-none text-secondary align-middle p-2">Live Demo</a>
                                </div>
                        </div> 
                </div>
                <div className="m-3 d-flex "> 
              
                <img src={logoJavascript} alt="projectlogo" className="logo m-1" width="20px"/> 
                <img src={logoReact} alt="projectlogo" className="logo m-1" width="20px"/> 
                <img src={logoBootstrap} alt="projectlogo" className="logo m-1" width="20px"/> 
                <img src={logoSass} alt="projectlogo" className="logo m-1" width="20px"/> 

                </div>
            </div>
        
           
        </>;
};

export default ProjectCard;