import React from "react";
import DbInit from "../components/DbInit.jsx"
import extractApply from "../imgs/extractandApply.png"

const Initialization = () => {

  return (
    <div className="component">
      <DbInit/>
      <img src={extractApply} className="extract"/>
    </div>
  )

}

export default Initialization;