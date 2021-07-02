import React from "react";

const Fwd = () => {

  return(
    <div className="component">
      <h2>Running Migrations</h2>
      <p className="pcomp"> <b>fwd</b>: Applies the next pending migration designated by the user within the corresponding migration file.
      <p className="pcomp"><b> deno run -A --unstable https://deno.land/x/exodus@&#60;version&#62;/cli.ts fwd </b></p>
      </p>

    </div>
  )
}

export default Fwd;