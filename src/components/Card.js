import React from "react";
const Card = (props) => {
    const lowercaseTitle = props.title.toLowerCase();
  return <>
           <div className="card card-sm m-3 shadow-sm card-hover">
                <div className="progress-stacked">
                    <div className={`progress ${lowercaseTitle}`} role="progressbar" aria-label="Segment one" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
                        <div className={`progress-bar ${lowercaseTitle}`}></div>
                    </div>
                </div>
            <div className="row g-0 d-flex">
                <div className="col-4 d-flex justify-content-center align-items-center">
                    <img src={props.img} className="img-fluid logo m-1 grow-on-hover" alt={props.img}/>
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title prompt">{props.title}</h5>
                        <p className="card-text"><small className="text-body-secondary prompt">{props.content}</small></p>
                    </div>
                </div>
            </div>
        </div>
           
        </>;
};

export default Card;