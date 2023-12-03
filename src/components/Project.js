import React, { useState } from "react";
import pp2 from "../img/pp2.png";
import ProjectCard from "./ProjectCard";
import Calculator from "./Calculator";
import Recipe from "./Recipe";
import Weather from "./Weather";
import Reservation from "./Reservation";
import { PiArrowUpRightBold } from "react-icons/pi";



const Project = () => {
  const[project, setProject]=useState("");

  if (project === "calculator") {
      return(
        <>
        <Calculator/>
        </>
      );
  } else if(project === "recipe"){
      return(
        <>
        <Recipe/>
        </>
      );
  }
    else if(project === "weather"){
      return(
        <>
        <Weather/>
        </>
      );
  }
    else if(project === "reservation"){
      return(
        <>
        <Reservation/>
        </>
      );
  }
  else {
    return <>
    <div className="container pt-5 ps-5 pe-5 bg-white mobile"> 
     <div className="row pt-5"> 
       <div className="col-xl-8 col-lg-12 col-sm-12 mobile">  
         <div className="row p-3"> 
               <h1 className="mx-2"> My works. </h1>
               <p className="p-3 prompt justify"> 
               Many of these projects are 
               open-source and available for others to explore and contribute to. 
               If you're interested in any of the projects I've worked on, please 
               feel free to check out the code and suggest any improvements or enhancements 
               you might have in mind. Collaborating with others is a great way to learn 
               and grow, and I'm always open to new ideas and feedback.
               </p>
       </div>
   
           <div className="col-lg-12 d-flex justify-content-evenly mobile-column">  
             <div className="d-flex flex-column justify-content-center align-items-center">
            
            <div> 
              <ProjectCard title="Calculator App"
              description="This calculator app performs basic mathematical operations and offers a user-friendly mobile experience with alternative color schemes."
              live="https://mrtuzl.github.io/calculator-app/dist/"
              code="https://github.com/mrtuzl/calculator-app"
              />
              <button className="btn btn-white shadow rounded prompt mx-3"
              onClick={() => setProject("calculator")}> Preview <PiArrowUpRightBold size={20}/> </button>
              </div>

    
             <div> 
             <ProjectCard title="Recipe App"
              description="MealAPI powers this responsive app, letting users explore diverse recipes with intuitive navigation and easy access to ingredients and instructions."
              live="https://mrtuzl.github.io/recipe-app/dist/"
              code="https://github.com/mrtuzl/recipe-app"
              />
             <button className="btn btn-white shadow rounded prompt mx-3"
              onClick={() => setProject("recipe")}> Preview <PiArrowUpRightBold size={20}/> </button>
              </div>
             </div>


             <div className="d-flex flex-column justify-content-center align-items-center">
             
             <div> 
             <ProjectCard title="Weather App"
              description="This weather app utilizes The Weather API to deliver real-time weather information in a streamlined and user-friendly mobile interface."
              live="https://mrtuzl.github.io/weather-app/"
              code="https://github.com/mrtuzl/weather-app"
             />
             <button className="btn btn-white shadow rounded prompt mx-3"
              onClick={() => setProject("weather")}> Preview <PiArrowUpRightBold size={20}/> </button>
              </div>
             
             <div> 
             <ProjectCard title="Reservation App"
              description="Little Lemon is a responsive restaurant site, ensuring easy navigation, menu exploration, and seamless reservations for an enjoyable user experience."
              live="https://mrtuzl.github.io/little-lemon-project/"
              code="https://github.com/mrtuzl/little-lemon-project"
              />
               <button className="btn btn-white shadow rounded prompt mx-3"
              onClick={() => setProject("reservation")}> Preview <PiArrowUpRightBold size={20}/> </button>
                </div>
             </div>
           </div>
         </div> 
       <div className="col-xl-4 d-flex align-items-start justify-content-center mobile-hidden tablet-hidden"> 
           <img src={pp2} alt="pp" className="img-fluid img skew border border-3 border-white shadow"/> 
       </div>
   </div> 
</div>
   
</>;
  }
 
};

export default Project;