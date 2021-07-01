import React from "react";
import setupPic from "../imgs/Setups.png"

const Init = () => {

  return(

    <div className="component">
      <h2>Initializing a Project</h2>
      <p className="pcomp"> <b>init </b> : Initializes a new Exodus migration project by generating a /migrations directory and a setup.ts file in the current working directory. Modify the setup.ts with your MongoDB database connection information. Exodus uses the settings in this file to connect to your database.</p>
      <p className="pcomp">deno run -A --unstable https://deno.land/x/exodus@&#60;version&#62;/cli.ts init</p>

      <figure className="image">
        <img src={setupPic}/>
        {/* <figcaption>Example config</figcaption> */}
      </figure>

    </div>



  )

}

export default Init