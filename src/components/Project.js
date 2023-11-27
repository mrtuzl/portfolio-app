import React from "react";
import pp2 from "../img/pp2.png";
import ProjectCard from "./ProjectCard";



const Project = () => {
  return <>
             <div className="container pt-5 ps-5 pe-5 mobile"> 
              <div className="row"> 
                <div className="col-lg-8 col-sm-12 mobile">  
                  <div className="row p-3"> 
                        <h1 className="mx-2"> Things I’ve made trying to put my dent in the universe. </h1>
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
            
                    <div className="col-lg-12 d-flex justify-content-evenly mobile-column">  
                      <div className="d-flex flex-column justify-content-center align-items-center">
                       <ProjectCard title="Calculator App"
                       description="This calculator app performs basic mathematical operations and offers a user-friendly mobile experience with alternative color schemes."
                       live="https://mrtuzl.github.io/calculator-app/dist/"
                       code="https://github.com/mrtuzl/calculator-app"
                       />

                      <ProjectCard title="Recipe App"
                       description="MealAPI powers this responsive app, letting users explore diverse recipes with intuitive navigation and easy access to ingredients and instructions."
                       live="https://mrtuzl.github.io/recipe-app/dist/"
                       code="https://github.com/mrtuzl/recipe-app"
                       />
                      
                      </div>

                      <div className="d-flex flex-column justify-content-center align-items-center">
                      <ProjectCard title="Weather App"
                       description="This weather app utilizes The Weather API to deliver real-time weather information in a streamlined and user-friendly mobile interface."
                       live="https://mrtuzl.github.io/weather-app/"
                       code="https://github.com/mrtuzl/weather-app"
                      />

                      <ProjectCard title="Reservation App"
                       description="Little Lemon is a responsive restaurant site, ensuring easy navigation, menu exploration, and seamless reservations for an enjoyable user experience."
                       live="https://mrtuzl.github.io/little-lemon-project/"
                       code="https://github.com/mrtuzl/little-lemon-project"
                       />
                      </div>
                    </div>
                  </div> 
                <div className="col-lg-4 col-sm-12  d-flex align-items-start justify-content-center mobile-hidden"> 
                    <img src={pp2} alt="pp" className="img-fluid img skew border border-3 border-white shadow"/> 
                </div>
            </div> 
        </div>
            
        </>;
};

export default Project;