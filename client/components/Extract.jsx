import React from "react";

const Extract = () => {

  return(

    <div className="component">
      <h2>Extracting Data</h2>
      <p className="pcomp"> <b>extract</b> : Extracts the data of an existing MongoDB database and creates a directory with a corresponding name to the extracted database. Within said directory, a data folder is generated populated by files containing the data of each collection in the extracted database.</p>
      <br></br>
      <p className="pcomp">deno run -A --unstable https://deno.land/x/exodus@&#60;version&#62;/cli.ts extract</p>

    </div>



  )

}

export default Extract;