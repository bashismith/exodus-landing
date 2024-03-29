import React from "react";
import {NavLink} from "react-router-dom";
import logo from '../imgs/exodus-blk.png';

const SideBar = () => {

  return (
    <div className="SideBar">
      <img src={logo} alt="exodus image" className="logo"></img>
      <h3>Introduction</h3>
      <NavLink to="/" className="link" exact>
        <p className="plink">Introduction</p>
      </NavLink>
      <h3>Migrations</h3>
      <NavLink to="/getting-started" className="link" exact>
        <p className="plink">Getting Started</p>
      </NavLink>
      <NavLink to="/actions" className="link" exact>
        <p className="plink">Actions</p>
      </NavLink>
      <h3>Full Database Migration</h3>
      <NavLink to="/db-init" className="link" exact>
        <p className="plink">Initialization</p>
      </NavLink>
      <NavLink to="/db-actions" className="link" exact>
        <p className="plink">Actions</p>
      </NavLink>
    </div>
  )
}

export default SideBar;