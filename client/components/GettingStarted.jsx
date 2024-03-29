//<p className="pcomp"><b>  </b></p>

import React from "react";
import setupPic from "../imgs/Setups.png";
import migration1 from "../imgs/migration1.png";
import migration2 from "../imgs/migration2.png";

const GettingStarted = () => {
  return (
    <div className="component">
      <h1>Getting Started</h1>

      <p className="pcomp">
        Before starting any data migration project, we're going to navigate to
        the directory we want Exodus to use as the
        current working directory. Config and migration directory/files will be created here. To start the project, type
        <p className="pcomp"><b> deno run --unstable --allow-read --allow-write --allow-net cli.ts init</b></p>
        This will create a <b>migrations directory</b> and <b>setup.ts</b> file we will use to configure our mongoDB connection.
      </p>

      <h2>Setting up the database connection</h2>
      <p className="pcomp">
        Before we can connect to mongoDB, we have to configure our <b>setup.ts</b>. We'll change the template configs to our
        MongoDB settings, and make sure the host url is the primary cluster.

          <img className='setup' src={setupPic} />

      </p>

      <h2>Creating Migrations</h2>
      <h3>Create</h3>
      <p className="pcomp">
        To create a migration file, we run the following in the command line <p className="pcomp"><b> deno run --unstable --allow-read --allow-write --allow-net cli.ts create [migrationName]</b></p> A file with the name: date and time + the migration title will be created in the migrations folder. For example:  <p className="pcomp"><b> deno run --unstable --allow-read --allow-write --allow-net cli.ts create testmigration</b></p>
        <p className="pcomp">creates a file called <br></br><b>2021_01_01_24_12_60_testmigration</b></p> This is the file we modify to define the migration and you can create multiple
        migration files. Using the file date/time in the file name, Exodus will run the files in the order they were created.
      </p>
      <h3>The Migration Files</h3>
      <p className="pcomp">
        When you open up the migrations file you just created, it'll
        just be two empty functions: fwd and back. This is where you can define
        the actions of the data migration and the steps to rollback the
        changes. We'll talk more about how we can interact with MongoDB but first let's look at an example migration with two already defined migration files below.
      </p>
      <h2>Running and Rolling Back Migrations</h2>
      <p className="pcomp">
      2021_01_01_24_12_60_testmigration_1.ts
        </p>

          <img className='img' src={migration1}  />

          <p className="pcomp">
      2021_01_02_24_12_60_testmigration_2.ts
        </p>

          <img className='img' src={migration2} />

      <p className="pcomp">

        <p className="pcomp">
        In <b>testmigration_1</b> fwd has been defined to find all documents with "item : 'boba'" within the food collection, and add a 'price' field with a value of 25.
        </p>

        <p className="pcomp">
        In <b>testmigration_2</b>, fwd is defined to add a 'quantity' field to all documents with "type : 'doodads'" in the widget collection. Because <b>testmigration_1</b> was created first, that will be the first migration run.
        </p>

         We can choose to run just this migration (fwd), or all migrations (full). Let's go ahead and run all of them with the 'full' command.
         <p className="pcomp">
           <b> deno run --unstable --allow-read --allow-write --allow-net cli.ts full</b>
           </p>

<p className="pcomp">Great! Now all the migrations have been applied: all the boba in the food collection should now have a price of 25, and all doodads in the widget collection should now have a quantity field. Now how do we reverse these changes? </p>

<h2>Rollinging back migrations</h2>
<p className="pcomp">
Rolling back the changes is incredibly simple. Just run
        <p className="pcomp">
           <b> deno run --unstable --allow-read --allow-write --allow-net cli.ts back</b>
           </p>
And it will run the back function defined in <b>testmigration_2</b>. Now all 'quanitity' fields should have been removed from the documents with 'doodads'. Exodus knows where we are in the migration so if we run the same 'back' command again, it will run the back function from <b>testmigration_1</b>. The same applies to the 'fwd' command so you can incrementally run the migration files or roll them back as necessary. Exodus keeps track by creating a document
for each migration applied in a migrationsLog collection in the database. Avoid deleting these documents if possible.
</p>

<p className="pcomp">
<b> Be careful when defining the fwd and back functions. It is up to
        you to make sure that the back function is defined properly to rollback
        the changes in the fwd function, or that irreversible changes in the fwd
        function are acceptable to you. For example, if you remove a 'quantity'
        key in the fwd function but define the back function to add it back, the
        'quantity' field will return but the original value of 'quanitity' will
        be lost unless you have written in some way to preserve that value. </b>
           </p>


      </p>
      <h2>Defining Migrations</h2>

      <p className="pcomp">
        Now that we've seen a migration and rollback in action, let's go back and talk about how to define your migrations
           </p>

      <h4>Available database actions</h4>
      <p className="pcomp">
        Exodus uses deno_mongo for the MongoDB driver (as of now there is no
        official Mongodb support for Deno), which works similarly to the MongoDB node.js driver and MongoDB shell. The two arguments passed in to each function (client,db) let you perform commands and actions just as you would in a normal mongo shell. You can utilize client and db in two different ways, using deno_mongo's built-in commands/methods, or accessing the official MongoDB database commands through deno_mongo.

      </p>

      <h3>1. Deno_mongo methods</h3>
      <p className="pcomp">
        Deno_mongo has built in database and collection methods for CRUD
        operations that should be familiar to anyone who has used the MongoDB
        shell or node.js MongoDB drivers. Refer to <a target='_blank' className='url' href="https://github.com/denodrivers/deno_mongo">deno_mongo</a> for a
        list of available operations.

        Do be aware there are more methods available than listed in the
        deno_mongo ReadMe and that they can be found in the files of the
        deno_mongo src directory.
      </p>

      <h3>2. MongoDB Database commands</h3>
      <p className="pcomp">
        If the built-in database and collection methods of deno_mongo are
        insufficient, you can instead access the <a target='_blank' className='url' href="https://docs.mongodb.com/manual/reference/command/">MongoDB database commands</a> using

        <p className="pcomp">
           <b> <code>{`client.runCommand( '<databaseName>' , <databaseCommand> )`}</code> </b>
        </p>
         Since this allows you to directly access the MongoDB database commands, you'll have far more flexibility to interact with your database at the cost of some legwork. Refer to the official MongoDB database command for full documentation on how to use the commands.
       <h3>Examples</h3>

       <p className="pcomp">
       <b>Ping:</b> checks if server is responding to commands   <br></br> <b><code>{`client.runCommand( 'Database1' , { ping: 1} )`}</code></b>
       </p>

       <p className="pcomp">
       <b>BuildInfo:</b> Displays statistics about the MongoDB build  <br></br> <b><code>{`client.runCommand( 'Database2' , { buildInfo: 1} )`}</code></b>
      </p>

<p className="pcomp">
<b>Find:</b> Selects documents according to parameters <br></br><b><code>{`client.runCommand( 'AnotherDB' , { find: 'food', filter:{} )`}</code></b>
</p>

      </p>


    </div>
  );
};

export default GettingStarted;
