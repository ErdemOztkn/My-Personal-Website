import React from 'react'
import { FiLink, FiGithub } from "react-icons/fi";

export default function Project({ title, subtitle, img, gitHub, demo }) {
  return (
    <div className="cardWrapper">
      <div className="card">
        <img src={`/images/${img}.png`} alt="" />
        <div className="cardTitle">
          <div className="cardInfo">
            <h4>{title}</h4>
            <p>{subtitle}</p>
          </div>
          <div className="cardLinks">
            <a href={demo} target='_blank'><FiLink size={18} /></a>
            <a href={gitHub} target='_blank'><FiGithub size={18} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
