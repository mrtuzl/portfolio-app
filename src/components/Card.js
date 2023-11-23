import React from "react";
const Card = (props) => {
  return <>
           <div class="card mb-3">
                <div class="progress-stacked">
                    <div class={`progress ${props.title}`} role="progressbar" aria-label="Segment one" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
                        <div class={`progress-bar ${props.title}`}></div>
                    </div>
                </div>
            <div class="row g-0">
                <div class="col-md-4 d-flex justify-content-center align-items-center">
                    <img src={props.img} class="img-fluid  logo m-1 grow-on-hover" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.content}</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
           
        </>;
};

export default Card;