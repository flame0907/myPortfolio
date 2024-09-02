import React,{useState} from 'react'
import "./qualification.css"
const Qualification = () => {

    const [toggleState, setToggleState]= useState(1);

    const toggleTab= (index) =>{
       setToggleState(index);
    }
  return (
    <section className="qualification section">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My personal journey</span>

        <div className="qualification_container container">
           <div className="qualification_tabs">
            <div className= {toggleState===1
             ?"qualification_button qualification_active button--flex"
             :"qualification_button button--flex"
            }
            onClick={()=> toggleTab(1)}
            >
                <i className="uil uil-graduation-cap qualification_icon">
                </i>
                Education
            </div>

            <div className= {toggleState===2
             ?"qualification_button qualification_active button--flex"
             :"qualification_button button--flex"
            }
            onClick={()=> toggleTab(2)}
            >
                <i className="uil uil-briefcase-alt qualification_icon"></i>
                Experience
            </div>
           </div>

           <div className="qualification_sections">
            <div 
            className={toggleState ===1 ?
            "qualification_content qualification_content-active"
               :"qualification_content "
            }
            >
                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title"> Full stack Developer</h3>
                        <span className="qualification_subtitle">Cyber Success</span>
                        <div className="qualification_calender">
                           <i className="uil uil-calender-alt"></i> 2024-Present
                        </div>
                    </div>

                    <div>
                    <span className="qualification_rounder"></span> 
                    <span className="qualification_line"></span>
                    </div>
                </div>

                <div className="qualification_data">
                    <div></div>
                    <div>
                       <span className="qualification_rounder"></span> 
                        <span className="qualification_line"></span>
                    </div>
                    <div>
                        <h3 className="qualification_title">B.Tech:8.03 </h3>
                        <span className="qualification_subtitle">Dr.Babasaheb Ambedkar Technological University Lonere </span>
                        <div className="qualification_calender">
                           <i className="uil uil-calender-alt"></i> 2024
                        </div>
                    </div>

        
                </div>

                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title"> HSC:70%</h3>
                        <span className="qualification_subtitle">Shri.N.R Highschool & Jr. College Indapur </span>
                        <div className="qualification_calender">
                           <i className="uil uil-calender-alt"></i> 2020
                        </div>
                    </div>

                    <div>
                    <span className="qualification_rounder"></span> 
                    <span className="qualification_line"></span>
                    </div>
                </div>

                <div className="qualification_data">
                    <div></div>
                    <div>
                       <span className="qualification_rounder"></span> 
                        <span className="qualification_line"></span>
                    </div>
                    <div>
                        <h3 className="qualification_title">SSC: 91% </h3>
                        <span className="qualification_subtitle">Mahatma Gandhi Vidyalay Paranda </span>
                        <div className="qualification_calender">
                           <i className="uil uil-calender-alt"></i> 2018
                        </div>
                    </div>

        
                </div>
            </div>

            <div  className={toggleState ===2 ?
            "qualification_content qualification_content-active"
               :"qualification_content "
            }>
                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title"> Fresher</h3>
                        {/* <span className="qualification_subtitle">DBATU </span>
                        <div className="qualification_calender">
                           <i className="uil uil-calender-alt"></i> 2024-Present
                        </div> */}
                    </div>

                    {/* <div>
                    <span className="qualification_rounder"></span> 
                    <span className="qualification_line"></span>
                    </div> */}
                </div>

                {/* <div className="qualification_data">
                    <div></div>
                    <div>
                       <span className="qualification_rounder"></span> 
                        <span className="qualification_line"></span>
                    </div>
                    <div>
                        <h3 className="qualification_title">ux designer </h3>
                        <span className="qualification_subtitle">DBATU </span>
                        <div className="qualification_calender">
                           <i className="uil uil-calender-alt"></i> 2024-Present
                        </div>
                    </div>

        
                </div>

                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title"> Web designer</h3>
                        <span className="qualification_subtitle">Figma </span>
                        <div className="qualification_calender">
                           <i className="uil uil-calender-alt"></i> 2024-Present
                        </div>
                    </div>

                    <div>
                    <span className="qualification_rounder"></span> 
                    <span className="qualification_line"></span>
                    </div>
                </div>

                 */}
            </div>
           
           </div>
        </div> 
    </section>
  )
}

export default Qualification
