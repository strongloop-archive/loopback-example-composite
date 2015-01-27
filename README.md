#loopback-example-mongodb

Basic instructions:

```
git clone https://github.com/strongloop/loopback-example-mongodb.git
cd loopback-example-mongodb
npm install
```

Then run any script in `server/bin` (for example, `node server/bin/discover-schema.js`).

- [Prerequisites](#prerequisites)
- [Procedure](#procedure)
  - [1. Create the application](#1-create-the-application)
  - [2. Install the connector](#2-install-the-connector)
  - [3. Configure the datasource](#3-configure-the-datasource)
  - [4. Add a model](#4-add-a-model)
  - [5. Add a script to migrate data](#5-add-a-script-to-migrate-data)
  - [6. Add a script to discover a schema](#6-add-a-script-to-discover-a-schema)
  - [7. Add a script to discover and build models](#7-add-a-script-to-discover-and-build-models)
  - [8. Conclusion](#8-conclusion)

##Prerequisites

###Tutorials

- [Getting started with LoopBack](http://docs.strongloop.com/display/LB/Getting+started+with+LoopBack)

###Knowledge
- [LoopBack models](http://docs.strongloop.com/display/LB/Defining+models)

##Procedure

###1. Create the application

####Application information

- Name: `loopback-example-mongodb`
- Directory to contain the project: `loopback-example-mongodb`

```
slc loopback loopback-example-mongodb
... # follow the prompts
cd loopback-example-mongodb
```

###2. Install the connector

```
npm install --save loopback-connector-mongodb
```

###3. Configure the datasource

####Datasource information
- Datasource: `accountDs`
- Connector: `MongoDB`

```
slc loopback:datasource accountDs
... # follow the prompts
```

Add the [datasource configurations](/server/datasources.json#L9-L13) to
[`server/datasources.json`](/server/datasources.json).

> We provide a demo server for convenience sake, but feel free to use your own database server.

###4. Add a model

####Model information
- Name: `Account`
  - Datasource: `accountDs`
  - Base class: `PersistedModel`
  - Expose via REST: `Yes`
  - Custom plural form: *Leave blank*
  - Properties
    - `email`
      - String
      - Not required
    - `createdAt`
      - Date
      - Not required
    - `lastModifiedAt`
      - Date
      - Not required

```
slc loopback:model Account
... # follow the prompts
```

###5. Add a script to migrate data

Create a directory for to store scripts.

```
mkdir server/bin
```

> `bin` is a directory name commonly used for executable files on unix and unix-like systems.

Create [`automigrate.js`](/server/bin/automigrate.js) inside the
[`bin`](/server/bin) directory.

> [`datasSource.automigrate()`](/server/bin/automigrate.js) requires INSERT object, CREATE DDL, and DROP DDL rights to execute properly.

####Test the script

> #####WARNING
> [`dataSource.automigrate()`](/server/bin/automigrate.js#L18) creates a new table in the database if it doesn't exist. If the table already exists, it will be **DESTROYED** and **ALL** existing data will be dropped. If you want to keep the existing data, use `datasource.autoupdate()` instead.

```
node server/bin/automigrate.js
```

This script creates [two models](/server/bin/automigrate.js#L5-L14) in the
[specified data source](/server/bin/automigrate.js#L16).

> You can view the newly inserted data using built-in [API explorer](http://docs.strongloop.com/display/LB/Use+API+Explorer). Start the application with `slc run` and browse to [`localhost:3000/explorer`][explorer] to inspect the data.

###6. Add a script to perform instance introspection

> *Discovery* is the process of reverse engineering a LoopBack model from an existing database schema.

The LoopBack MongoDB connector does not support discovery. However, you can use
[instance instrospection], which creates LoopBack model from an existing
JavaScript object.

See the [instance introspection documentation](http://docs.strongloop.com/display/LB/Creating+models+from+unstructured+data) for more information.

###8. Conclusion

You've successfully implemented various MongoDB database features provided by
LoopBack. See the [official documentation](http://docs.strongloop.com/display/LB/Defining+models) and [loopback-connector-mongodb](https://github.com/strongloop/loopback-connector-mongodb)
for more information.

---

- [Next tutorial][next-tutorial]
- [All tutorials][all-tutorials]

[all-tutorials]: https://github.com/strongloop/loopback-example
[explorer]: http://localhost:3000/explorer
[localhost]: http://localhost:3000
[next-tutorial]: https://github.com/strongloop/loopback-example-model-relations
