import React from "react";
import {NavLink} from "react-router-dom";

const TopNav = () => {

  return (
    <div className="component topNav">
      <div className="leftNav">
      <NavLink to="/teamexodus" className="link" exact>
        <p className="plink">Meet the Team</p>
      </NavLink>
      </div>
      <div className="rightNav">
      <ul>
        <li><a href="https://github.com/oslabs-beta/exodus.ts">GitHub</a></li>
        <li><a href="https://deno.land/x/exodus@0.1.7">DenoLand</a></li>
      </ul>
      </div>
    </div>
  )

}

export default TopNav;