import React from 'react'
import { AiFillDatabase } from 'react-icons/ai'
import { BsGearWideConnected } from 'react-icons/bs'
import { CgCPlusPlus } from 'react-icons/cg'
import { FaCss3, FaIndustry, FaRaspberryPi } from 'react-icons/fa'
import { MdHttp } from 'react-icons/md'
import { SiArduino, SiHeroku, SiJavascript, SiPython, SiReact, SiWebpack } from 'react-icons/si'
import { IoLogoVercel } from 'react-icons/io5'

const SkillPage = () => (
     <div className="skill-page-content">
          <div className="web-dev-container">
               <h1><MdHttp /><AiFillDatabase /> Web Development</h1>


               <div className="skill-icon-container">
                    <div>
                         <CgCPlusPlus className="skill-page-icon" />
                         <p>C / C++</p>
                    </div>
                    <div>
                         <SiJavascript className="skill-page-icon" />
                         <p>JavaScript</p>
                    </div>
                    <div>
                         <SiReact className="skill-page-icon" />
                         <p>React</p>
                    </div>
                    <div>
                         <FaCss3 className="skill-page-icon" />
                         <p>CSS</p>
                    </div>
               </div>
               <div className="skill-icon-container">
                    <div>
                         <SiHeroku className="skill-page-icon" />
                         <p>Heroku</p>
                    </div>
                    <div>
                         <IoLogoVercel className="skill-page-icon" />
                         <p>Vercel</p>
                    </div>
                    <div>
                         <SiPython className="skill-page-icon" />
                         <p>Python</p>
                    </div>
                    <div>
                         <SiWebpack className="skill-page-icon" />
                         <p>Webpack</p>
                    </div>
               </div>
          </div>
          <div className="ind-automation-container">
               <h1><BsGearWideConnected /> Industrial Automation</h1>
               <div className="skill-icon-container">
                    <div>
                         <SiArduino className="skill-page-icon" />
                         <p>Arduino</p>
                    </div>
                    <div>
                         <FaIndustry className="skill-page-icon" />
                         <p>PLC / HMI<br />& Robots</p>
                    </div>
                    <div>
                         <FaRaspberryPi className="skill-page-icon" />
                         <p>Raspberry</p>
                    </div>
               </div>
          </div>
     </div>
)

export default SkillPage