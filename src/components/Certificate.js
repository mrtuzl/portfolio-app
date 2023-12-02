import React from "react";
const Certificate = (props) => {
    const lowercaseTitle = props.title.toLowerCase();
  return <>
         


        <div class="card card-sm m-2 shadow-sm card-hover">
             <img src={props.img} className="img-fluid m-1" alt={props.img}/>
            <div class="card-body">
                <h5 className="card-title prompt">{props.title}</h5>
                <p className="card-text"><small className="text-body-secondary prompt">{props.content}</small></p>
            </div>
            </div>
           
        </>;
};

export default Certificate;