import React from "react";

const Log = () => {

  return(
    <div className="component">
      <h2>Checking Applied Migrations</h2>
      <p className="pcomp"> <b>log</b> : Displays a table of current migrations pending and migrations applied. This log data is retrieved from the migrationLog collections in your database.</p>
      <br></br>
      <p className="pcomp">deno run -A --unstable https://deno.land/x/exodus@&#60;version&#62;/cli.ts log</p>
    </div>
  )

}

export default Log;