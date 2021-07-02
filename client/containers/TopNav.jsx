import React from "react";
import {NavLink} from "react-router-dom";

const TopNav = () => {

  return (
    <div className="topNav">
      <div className="leftNav">
        <NavLink to="/teamexodus" className="links" exact>
          <p className="plink team">Meet the Team</p>
        </NavLink>
      </div>
      <div className="rightNav">
        <ul>
          <li><a href="https://github.com/oslabs-beta/exodus.ts" target="_blank">GitHub</a></li>
          <li><a href="https://deno.land/x/exodus@0.1.8" target="_blank">DenoLand</a></li>
        </ul>
      </div>
    </div>
  )
}

export default TopNav;