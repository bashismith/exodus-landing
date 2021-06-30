import React from "react";

const Apply = () => {

  return(

    <div className="component">
      <h2>Applying Migrations</h2>
      <p className="pcomp"><b>apply</b>: Applies the extracted data to the database specified in the setupApply.ts file. During application to the new database, apply removes the MongoDB given id from each document, however if the user would like to keep a custom id simply add the argument of apply [ keepId ] to do so.</p>
      <br></br>
      <p className="pcomp">deno run -A --unstable https://deno.land/x/exodus@&#60;version&#62;/cli.ts apply</p>

    </div>



  )

}

export default Apply;