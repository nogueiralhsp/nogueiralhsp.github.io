import React from 'react'
// const linkedinPicture = "https://media-exp1.licdn.com/dms/image/C4D03AQEPwa-TZ-TuiQ/profile-displayphoto-shrink_800_800/0/1601485699927?e=1622073600&v=beta&t=4zGy2M2ppcdhiaoXmFRjnROY2mVhpGtADAq2M-RAeNo"
import meAvatar from '../images/meAvatar.png'


const AboutPage = () => (
     <div className="about-page-content">
          <div className="about-main-content">
               <div className="about-page-avatar-container">
                    <img className="about-page-avatar" src={meAvatar} alt="my_picture" />
               </div>
               <div className="about-page-description">
                    <h1>Software & Web App Developer</h1>
                    <h3>Web Applications with JavaScript, Sass. <br /> And Industrial Application in Automated Equipment (PLCS,HMI, Robots)</h3>
                    <p>Number of projects with the use high and low level languages as discribed below:</p>
                    <h3>Web Development:</h3>
                    <p>JavaScript(Nodejs / React), C/C++ and Python</p>
                    <h3>Industrial Equipments</h3>
                    <p>Use of low level languages softwares on microcontrolers (C/C++ and Python) and Ladder/Structured Text for
                    PLC/HMI. Professional use of Codesys, Fanuc Robots Mitsubishi GX Works/Developer, SIEMENS, Allen Bradley
                    and Schneider Pro-face.</p>
               </div>
          </div>

     </div>
)

export default AboutPage