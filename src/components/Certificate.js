import React from "react";
const Certificate = (props) => {
    const lowercaseTitle = props.title.toLowerCase();
  return <>
         


        <div className="card card-md m-2 shadow-sm card-hover">
             <img src={props.img} className="img-fluid m-1" alt={props.img}/>
            <div className="card-body">
                <h5 className="card-title prompt">{props.title}</h5>
                <p className="card-text"><small className="text-body-secondary prompt">{props.content}</small></p>
            </div>
            </div>
           
        </>;
};

export default Certificate;