import React from "react";
import Fwd from "../components/Fwd.jsx"
import Full from "../components/Full.jsx"
import Back from "../components/Back.jsx"
import Log from "../components/Log.jsx"
import fwd from '../imgs/fwd2.png'
import logo from '../imgs/back21.png'
import Create from "../components/Create.jsx"
import Init from "../components/Init.jsx"

const Actions = () => {

  return (
    <div className="component">

      <Init/>
      <Create/>
      <Fwd/>
      <img src={fwd} alt="fwd-image" className="fwd"></img>
      <Full/>
      <Back/>
      <img src={logo} alt="back-image" className="back"></img>
      <Log/>
    </div>
  )

}

export default Actions;