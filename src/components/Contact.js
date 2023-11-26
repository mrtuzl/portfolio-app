import React from "react";
import { ImLinkedin } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { SiStackoverflow } from "react-icons/si";

const Contact = () => {
  return <>
             <div className="container pt-5 ps-5 pe-5"> 
              <div className="row"> 
               
                <div className="col-lg-12 col-sm-12">  
                  <div className="row p-3"> 
                        <h1 className="mx-2"> Let's Get in Touch: Ways to Connect with Me </h1>
                        <p className="p-3 promp justify"> 
                        Thank you for your interest in getting in touch with me. 
                        I welcome your feedback, questions, and suggestions. 
                        If you have a specific question or comment, please feel 
                        free to email me directly at mertuzel666@gmail.com. 
                        I make an effort to respond to all messages within 24 hours,
                         although it may take me longer during busy periods. 
                         Alternatively, you can use the contact form on my website 
                         to get in touch. Simply fill out the required fields and I'll 
                         get back to you as soon as possible. Finally, if you prefer 
                         to connect on social media, you can find me on 
                         https://instagram.com/. I post regular updates and engage 
                         with my followers there, so don't hesitate to reach out.
                          Thanks again for your interest, and I look forward to 
                          hearing from you!
                        </p>
                </div>
            
                <div className="col-lg-12 social p-3 d-flex flex-column"> 
                        <div>
                              <a href="https://www.linkedin.com/in/mertmehmetuzel/" className="text-decoration-none">
                                <ImLinkedin size={25} color="gray" className="m-3 grow-on-hover" /> 
                                <span className="prompt  text-secondary grow-on-hover"> Follow on LinkedIn</span> </a>
                              </div>
                              <div> 
                              <a href="https://github.com/mrtuzl/" className="text-decoration-none">
                                <ImGithub size={25} color="gray" className="m-3 grow-on-hover"/> 
                                <span className="prompt  text-secondary grow-on-hover"> Follow on Github</span> </a>
                              </div>
                              <div>
                                <a href="https://www.instagram.com/mertuzelofficial/" className="text-decoration-none">
                                <RiInstagramFill size={30} color="gray" className="m-3 grow-on-hover" /> 
                                <span className="prompt text-secondary grow-on-hover"> Follow on Instagram</span> </a>
                              </div>
                              <div>
                                <a href="https://stackoverflow.com/" className="text-decoration-none"> 
                                <SiStackoverflow size={25} color="gray" className="m-3 grow-on-hover"/> 
                                <span className="prompt text-secondary grow-on-hover"> Follow on Stack Overflow</span></a> 
                              </div>
                    </div>
                  </div> 
            </div> 
        </div>
        </>;
};

export default Contact;