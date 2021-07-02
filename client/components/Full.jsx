import React from "react";

const Full = () => {

  return(

    <div className="component">
      <h2>Running All Migrations at Once</h2>
      <p className="pcomp"> <b>full</b>: Applies all pending migration designated by the user within the corresponding migration file. <p className="pcomp"><b> deno run -A --unstable https://deno.land/x/exodus@&#60;version&#62;/cli.ts full </b></p> </p>


    </div>



  )

}

export default Full;