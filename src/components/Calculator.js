import React from "react";
import { GrFormPreviousLink } from "react-icons/gr";


const Calculator = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    const refreshPage = () => {
        window.location.reload(false);
      }
  return <>
             <div className="container pt-5 ps-5 pe-5 mobile"> 
              <div className="row">
                    <div> 
                        <button 
                        className={"btn btn-white shadow rounded-5 prompt my-3"}
                        onClick={refreshPage}>
                        <GrFormPreviousLink size={25} color={"#189db8"}/> 
                        </button>  
                    </div>
          
                    <div className="col-lg-12 d-flex justify-content-center align-items-center mobile-column"> 
                   
                        <div className="ratio ratio-1x1">
                            <iframe src="https://mrtuzl.github.io/calculator-app/dist/"
                            width={1000}
                            height={1000}
                            className="shadow"> </iframe>
                        </div>
                  </div> 
            </div> 
        </div>
            
        </>;
};

export default Calculator;