import React from "react";
import setupPic from "../imgs/Setup.png"
import github from "../imgs/github.png"
import linked from "../imgs/linkedin.png"


const Team = () => {

  return(

    <div className="rowTeam">
      <div className="teamPic">
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/YuanEmperorAlbumGenghisPortrait.jpg/1024px-YuanEmperorAlbumGenghisPortrait.jpg' className="columnTeam"/>
        <div className="box">
          <p>Nicholas Chien</p>
          <p><a href="https://github.com/Nduder" target="_blank"><img src={github} className="ghub"/></a><a href="https://www.linkedin.com/in/nicholas-chien/" target="_blank"><img src={linked} className="linked"/></a></p>
        </div>
      </div>
      <div className="teamPic">
        <img src='https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png' className="columnTeam"/>
        <div className="box">
          <p>Miguel Garibay</p>
          <p><a href="https://github.com/miguel-garibay" target="_blank"><img src={github} className="ghub"/></a><a href="https://www.linkedin.com/in/miguel-garibay-mag/" target="_blank"><img src={linked} className="linked"/></a></p>
        </div>
      </div>
      <div className="teamPic">
        <img src='https://media-exp1.licdn.com/dms/image/C5603AQEeiThm1rU85w/profile-displayphoto-shrink_200_200/0/1621194863442?e=1628726400&v=beta&t=gUDXfkCzvaFp1i-bYmNc1MYquw0PutRsX9ivAmLkZg8' className="columnTeam"/>
        <div className="box">
          <p>Bashi Smith</p>
         <p><a href="https://github.com/bashismith" target="_blank"><img src={github} className="ghub"/><a href="https://www.linkedin.com/in/bashiri-smith/" target="_blank"><img src={linked} className="linked"/></a></a></p>
        </div>
      </div>
    </div>

  )

}

export default Team;