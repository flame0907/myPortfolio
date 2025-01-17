import React, { useState } from 'react'
import "./services.css"

const Services = () => {

     const [toggleState, setToggleState]= useState(0);

     const toggleTab= (index) =>{
        setToggleState(index);
     }

  return (
   <section className="services section" id="services">
    <h2 className="section_title">Services </h2>
    <span className="section_subtitle">What I offer</span>

    <div className="services_container container grid">
        <div className="services_content">
          <div>
            <i className="uil uil-web-grid services_icon"> </i>
            <h3 className="services_title"> Web <br/> Developer</h3>
            </div>  

            <span className="services_button" onClick={
                ()=>toggleTab(1)
            }>
              View more 
               <i className="uil uil-arrow-right services_button-icon"></i>
            </span>

            <div className={toggleState===1?"services_modal active-modal":"services_modal"}>
                <div className="services_modal-content">
                   <i onClick={()=>toggleTab(0)} className="uil uil-times services_modal-close">
                    </i> 

                    <h3 className="services_modal-title"> Visual Designer</h3>

                    <p className="services_modal-description">Service with more than 3 years of experience
                        providing quality work to clients and companies
                    </p>

                    <ul className="services_modal-services grid">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"> </i>
                            <p className="services_modal-info">
                                develope user interface
                            </p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"> </i>
                            <p className="services_modal-info">
                                develope web page
                            </p>
                        </li>
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"> </i>
                            <p className="services_modal-info">
                                develope user interface
                            </p>
                        </li>
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"> </i>
                            <p className="services_modal-info">
                                develope user interface
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-arrow services_icon"> </i>
            <h3 className="services_title"> UI/UX <br/>Designer</h3>
            </div>  

            <span className="services_button" onClick={
                ()=>toggleTab(1)
            }>
              View more 
               <i className="uil uil-arrow-right services_button-icon"></i>
            </span>

            <div className={toggleState===1?"services_modal active-modal":"services_modal"}>
                <div className="services_modal-content">
                   <i onClick={()=>toggleTab(0)} className="uil uil-times services_modal-close">
                    </i> 

                    <h3 className="services_modal-title"> Visual Designer</h3>

                    <p className="services_modal-description">Service with more than 3 years of experience
                        providing quality work to clients and companies
                    </p>

                    <ul className="services_modal-services grid">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"> </i>
                            <p className="services_modal-info">
                                develope user interface
                            </p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"> </i>
                            <p className="services_modal-info">
                                develope web page
                            </p>
                        </li>
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"> </i>
                            <p className="services_modal-info">
                                develope user interface
                            </p>
                        </li>
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"> </i>
                            <p className="services_modal-info">
                                develope user interface
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="services_content">
          <div>
            <i className="uil uil-edit services_icon"> </i>
            <h3 className="services_title">Java <br/>Developer </h3>
            </div>  

            <span className="services_button" onClick={
                ()=>toggleTab(1)
            }>
              View more 
               <i className="uil uil-arrow-right services_button-icon"></i>
            </span>

            <div className={toggleState===1?"services_modal active-modal":"services_modal"}>
                <div className="services_modal-content">
                   <i  onClick={()=>toggleTab(0)}className="uil uil-times services_modal-close">
                    </i> 

                    <h3 className="services_modal-title">Visual Designer </h3>

                    <p className="services_modal-description">Service with more than 3 years of experience
                        providing quality work to clients and companies
                    </p>

                    <ul className="services_modal-services grid">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"> </i>
                            <p className="services_modal-info">
                                develope user interface
                            </p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"> </i>
                            <p className="services_modal-info">
                                develope web page
                            </p>
                        </li>
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"> </i>
                            <p className="services_modal-info">
                                develope user interface
                            </p>
                        </li>
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"> </i>
                            <p className="services_modal-info">
                                develope user interface
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Services
