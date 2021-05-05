# backendtask
BackEnd Task for Dhwani RIS

Instructions to start project

NODEJS COMMAND=>
npm init=>it will install package
package name:expressone
version:1.0.0
description:u can give anything 
author:give any name
licence:MIT
npm install=>it will create package-lock
npm install express=>it will create node_modeules in folder
npm install nodemon
to run the file=>node filename.js
-------------------------------------------------------------------------------------
EXPRESS GENERATOR=>
cd desktop
express --view=pug foldername
cd filename
npm install
set DEBUG=filename:* & npm start
npm install nodemon
goto package-jsonfile and change node to nodemon
------------------------------------------------------------------------------------
FOR ERROR MODULE=>
npm install http-errors --save
------------------------------------------------------------------------------------
FOR COOKIES=>
npm install --save cookie-parser
-------------------------------------------------------------------------------------
FOR MONGODB=>
npm install mongodb
-------------------------------------------------------------------------------------
mongo
use students
db.createCollection('name');
db.students.insertOne({'name':'pooja','age':22});
db.students.find();
db.students.find().sort({"age":1}).limit(3).pretty()
db.students.find({"age":25}
db.students.find({"age":{$gt:23}}).pretty()
db.students.find({"age":{$lt:23}}).pretty()
db.students.remove({"name":"saswati"})
to find the sum=>db.Course.aggregate([{$group:{_id:"name",sum:{$sum:"$price"}}}]);
------------------------------------------------------------------------------------
CONNECT TO MONGO=>
cd desktop
express --view=pug filename
cd filename
npm install
set DEBUG=filename:* & npm start
npm install nodemon
goto package-jsonfile and change node to nodemon
npm install mongodb=>for mongodb connection
