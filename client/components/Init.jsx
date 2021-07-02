import React from "react";
import setupPic from "../imgs/Setups.png"

const Init = () => {

  return(

    <div className="component">
      <h2>Initializing a Project</h2>
      <p className="pcomp"> <b>init </b> : Initializes a new Exodus migration project by generating a /migrations directory and a setup.ts file in the current working directory. Modify the setup.ts with your MongoDB database connection information. Exodus uses the settings in this file to connect to your database.
        <p className="pcomp"><span className=''><b>deno run -A --unstable https://deno.land/x/exodus@&#60;version&#62;/cli.ts init  </b></span>
        </p>
      </p>



    </div>



  )

}

export default Init