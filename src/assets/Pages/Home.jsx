import React from 'react'
import './home.css'
import { FiUser, FiMail, FiLink, FiGithub } from "react-icons/fi";
import Contact from '../component/Contact/Contact';

export default function Home() {
    return (

        <div className='container'>
            <section className='home'>
                <div className='text'>
                    <p>Hi, my name is</p>
                    <h1>Mehmet Erdem Öztekin</h1>
                    <p>Computer Programming student at Toros University. I'm 20 years old and focusing on enhancing my skills in Web Programming.</p>
                </div>
                <div className="scroll-arrow"></div></section>

            <section className="skills">
                <h3>Skills</h3>
                <ul>
                    <li><img src="/images/html.png" alt="" /></li>
                    <li><img src="/images/sass.png" alt="" /></li>
                    <li><img src="/images/js.png" alt="" /></li>
                    <li><img src="/images/react.png" alt="" /></li>
                    <li><img src="/images/python.png" alt="" /></li>
                    <li><img src="/images/c-sharp.png" alt="" /></li>
                </ul>
            </section>

            <section className="projects">
                <h3>Projects</h3>
                <div className="cardWrapper">
                    <div className="card">
                        <img src="/images/cv.png" alt="" />
                        <div className="cardTitle">
                            <div className="cardInfo">
                                <h4>Portfolio</h4>
                                <p>React, Sass</p>
                            </div>
                            <div className="cardLinks">
                                <a href='https://erdemoztekin.com/' target='_blank'><FiLink size={18} /></a>
                                <a href='https://github.com/ErdemOztkn/My-Portfolio-Website' target='_blank'><FiGithub size={18} /></a>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <img src="/images/moviesspot.png" alt="" />
                        <div className="cardTitle">
                            <div className="cardInfo">
                                <h4>Movies Spot</h4>
                                <p style={{color: 'red'}}>In Progress</p>
                            </div>
                            <div className="cardLinks">
                            <a href='https://erdemoztekin.online/' target='_blank'><FiLink size={18} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
        </div>
    )
}
