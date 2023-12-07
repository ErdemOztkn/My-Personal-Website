import React from 'react'
import './home.css'
import { FiUser, FiMail } from "react-icons/fi";

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
                    <li><img src="./src/assets/images/html.png" alt="" /></li>
                    <li><img src="./src/assets/images/sass.png" alt="" /></li>
                    <li><img src="./src/assets/images/js.png" alt="" /></li>
                    <li><img src="./src/assets/images/php.png" alt="" /></li>
                    <li><img src="./src/assets/images/react.png" alt="" /></li>
                    <li><img src="./src/assets/images/c-sharp.png" alt="" /></li>
                </ul>
            </section>

            <section className="projects">
                <h3>Projects</h3>
                <div className="cardWrapper">
                    <div className="card">
                        <img src="./src/assets/images/cv.png" alt="" />
                        <div className="cardTitle">
                            <h4>Portfolio Website</h4>
                            <p>React, Sass</p>
                        </div>
                    </div>

                    <div className="card">
                        <img src="./src/assets/images/moviesspot.png" alt="" />
                        <div className="cardTitle">
                            <h4>Movies Spot</h4>
                            <p>React, Sass</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact">
                <h3>Contact Me</h3>
                <form action="" method='post' id='form'>
                    <div className="inputWrapper">
                        <i><FiUser size={21}/></i>
                        <input type="text" placeholder='First Name' required/>
                    </div>
                    <div className="inputWrapper">
                        <i><FiMail size={21}/></i>
                        <input type="email" placeholder='E-mail' required/>
                    </div>
                    <textarea name="" id="" cols="50" rows="5" placeholder='Message' required></textarea>
                    <input type="submit" value="Submit"/>
                </form>
            </section>
        </div>
    )
}
