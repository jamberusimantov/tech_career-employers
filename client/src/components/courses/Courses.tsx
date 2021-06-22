import React from 'react'
import { FcComboChart, FcFinePrint, FcGlobe, FcCommandLine, FcCloth, FcMindMap, FcMultipleDevices, FcEnteringHeavenAlive, FcAcceptDatabase } from "react-icons/fc"
import { Link } from "react-scroll";
import { CaretDownOutlined } from '@ant-design/icons'
import './Courses.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Courses() {
    return (
        <div className='coursesContainer' id="courses" >
            <div></div>
            <div className='coursesDiv'>

                <div className='course' data-aos='fade-left'>
                    <FcMultipleDevices size={70} />
                    <h3> Full Stack Web Development</h3>
                </div>
                <div className='course' data-aos='fade-left'>
                    <FcFinePrint size={70} />
                    <h3>QA – Manual and Automation</h3>
                </div>
                <div className='course' data-aos='fade-left'>
                    <FcGlobe size={70} />
                    <h3>CCNA, CCNP, DevNet</h3>
                </div>
                <div className='course' data-aos='fade-left'>
                    <FcMindMap size={70} />
                    <h3> Soc Analyst</h3>
                </div>
                <div className='course' data-aos='fade-right'>
                    <FcEnteringHeavenAlive size={70} />
                    <h3> Salesforce Implements</h3>
                </div>
                <div className='course' data-aos='fade-right'>
                    <FcComboChart size={70} />
                    <h3>Data Analyst</h3>
                </div>
                <div className='course' data-aos='fade-right'>
                    <FcAcceptDatabase size={70} />
                    <h3>Data Scientist</h3>
                </div>
                <div className='course' data-aos='fade-right'>
                    <FcCommandLine size={70} />
                    <h3> C++ Development</h3>
                </div>
                <div className='course' data-aos='fade-right'>
                    <FcCloth size={70} />
                    <h3>Cyber Security Response</h3>
                </div>



            </div>
            <div></div>
            <Link className="c-about" to="coOpsMainDiv" smooth={true}><CaretDownOutlined style={{ fontSize: '50px', color: 'black' }} /></Link>

        </div>
    )
}
