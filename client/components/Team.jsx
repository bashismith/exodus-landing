import React from "react";
import setupPic from "../imgs/Setups.png"
import github from "../imgs/github.png"
import linked from "../imgs/linkedin.png"
import miguelPic from '../imgs/miguel.jpg'
import nickPic from '../imgs/Capture.png'
import chadPic from '../imgs/chad.jpg'


const Team = () => {

  return(

    <div className="rowTeam">
      <div className="teamPic">
        <img src={nickPic} className="columnTeam"/>
        <div className="box">
          <p>Nicholas Chien</p>
          <p><a href="https://github.com/Nduder" target="_blank"><img src={github} className="ghub"/></a><a href="https://www.linkedin.com/in/nicholas-chien/" target="_blank"><img src={linked} className="linked"/></a></p>
        </div>
      </div>
      <div className="teamPic">
        <img src={miguelPic} className="columnTeam"/>
        <div className="box">
          <p>Miguel Garibay</p>
          <p><a href="https://github.com/miguel-garibay" target="_blank"><img src={github} className="ghub"/></a><a href="https://www.linkedin.com/in/miguel-garibay-mag/" target="_blank"><img src={linked} className="linked"/></a></p>
        </div>
      </div>
      <div className="teamPic">
        <img src={chadPic} className="columnTeam"/>
        <div className="box">
          <p>Bashi Smith</p>
         <p><a href="https://github.com/bashismith" target="_blank"><img src={github} className="ghub"/><a href="https://www.linkedin.com/in/bashiri-smith/" target="_blank"><img src={linked} className="linked"/></a></a></p>
        </div>
      </div>
    </div>

  )

}

export default Team;