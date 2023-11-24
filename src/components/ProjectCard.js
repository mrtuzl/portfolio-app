import React from "react";
import { HiLink } from "react-icons/hi2";
const ProjectCard = (props) => {
  return <>
           <div className="card rounded-3 p-3 m-3 border-0">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text prompt">{props.description}</p>
                        <HiLink/> 
                        <a href="#" className="text-decoration-none m-1">View Project</a>
                </div>
                <div className="d-flex"> 
                    <img src={props.img} alt={props.img} className="logo m-1" width="20px"/> 
                    <img src={props.img} alt={props.img} className="logo m-1" width="20px"/> 
                    <img src={props.img} alt={props.img} className="logo m-1" width="20px"/> 
                </div>
            </div>
        
           
        </>;
};

export default ProjectCard;