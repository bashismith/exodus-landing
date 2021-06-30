import React from "react";
import setupPic from "../imgs/Setup.png"


const Team = () => {

  return(

    <div className="rowTeam">
      <div>
      <span>Philanthropist</span>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/YuanEmperorAlbumGenghisPortrait.jpg/1024px-YuanEmperorAlbumGenghisPortrait.jpg' className="columnTeam"/>


      </div>
      <div>
      <a>Chemical Philanthropist</a>
        <img src='https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png' className="columnTeam"/>


        </div>
        <div>
        <a>Stud</a>
        <img src='https://media-exp1.licdn.com/dms/image/C5603AQEeiThm1rU85w/profile-displayphoto-shrink_200_200/0/1621194863442?e=1628726400&v=beta&t=gUDXfkCzvaFp1i-bYmNc1MYquw0PutRsX9ivAmLkZg8' className="columnTeam"/>


        </div>
    </div>

  )

}

export default Team;