import React from "react";

const DbInit = () => {

  return(

    <div className="component">
      <h2>Initializing a Full Database Migration Project</h2>
      <p className="pcomp"> <b>dbInit</b> : Initializes a new Exodus migration by generating a /database-migration directory and a setupExtract.ts and setupApply.ts file in the current working directory. Modify the setupExtract.ts with your MongoDB database connection information inorder to pull the data you would like to migrate. Modify the setupApply.ts with your second MongoDB database connection information in order to apply the data you would like to migrate. Exodus uses the settings in these files to connect to your database.</p>
      <br></br>
      <p className="pcomp">deno run -A --unstable https://deno.land/x/exodus@&#60;version&#62;/cli.ts dbInit</p>
    </div>
  )

}

export default DbInit;