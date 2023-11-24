import React from "react";
const Card = (props) => {
    const lowercaseTitle = props.title.toLowerCase();
  return <>
           <div class="card mb-3 card-hover">
                <div class="progress-stacked">
                    <div class={`progress ${lowercaseTitle}`} role="progressbar" aria-label="Segment one" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
                        <div class={`progress-bar ${lowercaseTitle}`}></div>
                    </div>
                </div>
            <div class="row g-0">
                <div class="col-md-4 d-flex justify-content-center align-items-center">
                    <img src={props.img} class="img-fluid  logo m-1 grow-on-hover" alt={props.img}/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title prompt">{props.title}</h5>
                        <p class="card-text"><small class="text-body-secondary prompt">{props.content}</small></p>
                    </div>
                </div>
            </div>
        </div>
           
        </>;
};

export default Card;