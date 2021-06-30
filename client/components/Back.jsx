import React from "react";

const Back = () => {

  return(

    <div className="component">
      <h2>Rolling back changes</h2>
      <p className="pcomp"><b>back</b>: Rollingback changes is done incrementally. Successful rollbacks will delete the associated log file from the migrationLog collection.

</p>
      <p className="pcomp">deno run -A --unstable https://deno.land/x/exodus@&#60;version&#62;/cli.ts back</p>
    </div>



  )

}

export default Back;