import React from "react";
import mrtuzl from "../img/mrtuzl.png";
import pp from "../img/pp.png";
import { ImLinkedin } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { SiStackoverflow } from "react-icons/si";
import About from "./About";


const Home = () => {
  return <>
           <div className="container p-5"> 
              <div className="row"> 
                <div className="col-lg-8 col-sm-12 p-5"> 
                    <img src={pp} alt="pp" className="img-fluid img-p mx-3 border border-3 border-white shadow"/> 
                    <h1 className="p-3"> Front-end web app developer, and content creator.</h1>
                    <p className="mx-3 prompt"> 
                    I am a front-end developer with expertise in technologies such as React, 
                    highlighting my proficiency in this field. I have experience building scalable, 
                    secure, and reliable web applications using various frameworks like Bootstrap 
                    and tools like Webpack. I enjoy tackling complex problems and am dedicated to 
                    learning new skills. Crafting high-quality code following best practices and 
                    industry standards is my forte. Beyond development, I possess the ability to 
                    create content and edit videos using Adobe Creative Cloud tools such as Premiere
                     Pro and Photoshop. I thrive on new challenges and opportunities for continual 
                     growth as a developer.
                    </p>
                    <div className="social p-3  d-flex align-items-center"> 
                    <ImLinkedin size={25} color="gray" /> 
                    <ImGithub size={25} color="gray" className="mx-3"/> 
                    <RiInstagramFill size={30} color="gray" />
                    <SiStackoverflow size={25} color="gray" className="mx-3"/>
                    </div>
               
                </div>
                <div className="col-lg-4 col-sm-12 p-5 d-flex align-items-center"> 
                    <img src={mrtuzl} alt="mrtuzl" className="img-fluid img"/> 
                </div>
              </div>
            </div>
            <About/>
        </>;
};

export default Home;