import React from "react";
import setupPic from "../imgs/Setup.png";

const GettingStarted = () => {
  return (
    <div className="component">
      <h2>Getting Started</h2>
      <h2>Getting Started</h2>
      <p className="pcomp">
        Before starting any data migration project, we're going to navigate to
        the directory we want to start the project in. Exodus will use the
        current working directory to as the place to keep the connection
        settings, migrations files. To start the project, type blahblahblah
        cli.ts init, which will create a setup.ts file, which is where we will
        enter our mongoDB connection settings.
      </p>

      <h2>Setting up the database connection</h2>
      <p className="pcomp">
        Before we can connect to mongoDB we have to setup the connection
        settings. Open up setup.ts and change the template configs to your
        settings.
        <figure className="image">
          <img src={setupPic} />
          <figcaption>Here we have a setup.ts filled out</figcaption>
        </figure>
      </p>

      <h2>Creating and defining migrations</h2>
      <h3>Creating Migrations</h3>
      <p className="pcomp">
        To create the migration file, run blahblahblah cli.ts create [migration
        file name] in the command line. In the migrations folder, it will create
        a file with the file name: date and time + the migration title appended
        to it. For example if you typeblahlbah cli.ts create testmigration, it
        will create a file called '199149239293_testmigration'. This is the file
        you modify to define your own migrations and you can create multiple
        migration files. Exodus will run the files in the order they were
        created (using the file date/time in the file name).
      </p>
      <h3>Defining Migrations</h3>
      <p className="pcomp">
        When you open up the migrations file you just created, it'll at first
        just be two empty functions: fwd and back. This is where you can define
        the actions of the data migration and the steps to rollback the
        changes.The two arguments passed in to each function (client,db) let you
        perform commands and actions just as you would in a normal mongo shell.
        Let's look at an example below
      </p>
      <h4>Example</h4>
      <h4>Insert PIC HERE FOOLS</h4>
      <p>
        In this example, fwd has been defined to find all instances of boba
        within the food collection, and adding a quantity key. Running this
        migration will apply these changes to the database specified in the
        connection settings. If you want to access another database without
        changing the database in the setup file you can use the client object.

        The back function has been defined to roll back the changes in the fwd
        function, by finding all instances of boba within the food collection
        and removing the key. Running back in the command line will remove the
        quanitity key from all instances of boba within the food collection.

        *Note* Be careful when defining the fwd and back functions. It is up to
        you to make sure that the back function is defined properly to rollback
        the changes in the fwd function, or that irreversible changes in the fwd
        function are acceptable to you. For example, if you remove a 'quantity'
        key in the fwd function but define the back function to add it back, the
        'quantity' field will return but the original value of 'quanitity' will
        be lost unless you have written in some way to preserve that value.
      </p>

      <h4>Available database actions</h4>
      <p className="pcomp">
        Exodus uses deno_mongo for the MongoDB driver (as of now there is no
        official Mongodb support for Deno), which provides the user with ways of
        interacting with MongoDB and performing CRUD operations
      </p>

      <h5>1. Deno_mongo methods</h5>
      <p className="pcomp">
        Deno_mongo has built in commands for CRUD operations that should be
        familiar to anyone who has used the MongoDB shell or node.js MongoDB
        drivers.
      </p>

      <h5>2. Database commands</h5>
      <p className="pcomp">
        Deno_mongo has built in commands for CRUD operations that should be
        familiar to anyone who has used the MongoDB shell or node.js MongoDB
        drivers.
      </p>

      <p className="pcomp">
        *Keep in mind that Exodus relies on deno_mongo as the MongoDB driver as
        there is no official deno driver from MongoDB at the moment. That means
        some commands from the node Mongodb driver Most common commands are it
        Refer to deno_mongo documentation f and as such do not directly have all
        functions. However you can access the MongoDB database commands using
      </p>

      <h2>Performing Migrations / Rollingback Changes</h2>
      <p className="pcomp">
        Once all our migration files are defined, just run 'blahlbalhbalh cli.ts
        full' and that will run all migration files!

        *INSERT PIC HERE SHOWING ITS ALL MIGRATED*

        If you want to run only one migration file forward at a time, use 'fwd'
        instead of 'full'. To rollback the changes, use the 'back' command and
        it'll rollback the changes using the back function defined in the
        migration file that applied the most recent migration.

        There are several things to keep in mind. 1. Exodus will keep track of
        which migrations have or have not been applied. That means if we are in
        the middle of migrations, whether that be migrating forward or back, we
        do not have to specify where to start from, Exodus will automatically
        start from where we left off. 2. It keeps track by creating a document
        for each migration applied in a migrationsLog collection in the
        database. Avoid deleting these documents if possible.
      </p>
    </div>
  );
};

export default GettingStarted;
