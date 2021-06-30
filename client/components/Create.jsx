import React from "react";

const Create = () => {

  return(

    <div className="component">
      <h2>Creating Migrations</h2>
      <p className="pcomp"> <b>create [commitMessage]</b>: Creates a new migration file in the /migrations directory containing a template for fwd and back functionality</p>
      <p className="pcomp">deno run -A --unstable https://deno.land/x/exodus@&#60;version&#62;/cli.ts create commitMessage</p>
    </div>
  )

}

export default Create;