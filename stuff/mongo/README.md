# Consola Mongo

## instalacion de mongo:
     
     npm i -g mongodb

## comandos basicos:


### **mongo**: 

      levanta base de datos
   

### **show dbs** : 

      muestra las bases de datos
     
### **use [nombre base de datos]** : 

      usar base de datos

### **show [collections ]** :

      muestra collections en la base de datos que estamos

## CREATE

### **db.[collection].insert/insertOne({documento})** : 
     
     crea documento en una coleccion en fromato JSON (existente o inexistente)
      (se crea la base datos al crear el primer archivo)

### **db.[collection].insertMany([{documento},{documento}])** : 

      inserta varios documentos

## DELETE

### **db.[collection].deleteOne({query})** : 

      borra el primer documento que haga matching

### **db.[collection].deleteMany({query})** : 

      borra todos los documentos que hagan matching

## RETRIEVE

### **db.[coleccion].find()** :

      nos trae documento segun lo que pasamos como query 

si usamos por ejemplo **db.users.find()** ( vacio ) nos traera todos los docs de :
      
      [{ "birth" : ISODate("1924-12-03T05:00:00Z"), "contribs" : [ "Fortran", "ALGOL", "Backus-Naur Form", "FP" ], "name" : "John Backus", "awards" : 4, "reportDate" : "2020-06-05", "reportBy" : "hellouser123", "reportNumber" : 1 },{ "birth" : ISODate("1927-09-04T04:00:00Z"),       "contribs" : [ "Lisp", "Artificial       Intelligence", "ALGOL" ], "name" : "John      McCarthy", "awards" : 3, "reportDate" :      "2020-06-05", "reportBy" : "hellouser123",   "reportNumber" : 1 },{ "birth" : ISODate("1906-12-09T05:00:00Z"),       "contribs" : [ "UNIVAC", "compiler",     "FLOW-MATIC", "COBOL" ], "name" : "Grace    Hopper", "awards" : 4, "reportDate" :      "2020-06-05", "reportBy" : "hellouser123",   "reportNumber" : 1 },{ "birth" : ISODate("1926-08-27T04:00:00Z"),       "contribs" : [ "OOP", "Simula" ], "name" :    "Kristen Nygaard", "awards" : 3,      "reportDate" : "2020-06-05", "reportBy" :    "hellouser123", "reportNumber" : 1 },{ "birth" : ISODate("1931-10-12T04:00:00Z"),       "contribs" : [ "OOP", "Simula" ], "name" :    "Ole-Johan Dahl", "awards" : 3, "reportDate"    : "2020-06-05", "reportBy" : "hellouser123",    "reportNumber" : 1 },{ "birth" : ISODate("1956-01-31T05:00:00Z"),       "contribs" : [ "Python" ], "name" : "Guido    van Rossum", "awards" : 2, "reportDate" :       "2020-06-05", "reportBy" : "hellouser123",    "reportNumber" : 1 }]

si aplicamos el **pretty** nos los traera los datos "bonitos" **db.users.find().pretty**:

      [
           { 
                "birth" : ISODate("1924-12-03T05:00:00Z"),
                "contribs" : [ "Fortran", "ALGOL", "Backus-Naur Form", "FP" ],
                "name" : "John Backus", "awards" : 4, 
                "reportDate" : "2020-06-05",
                "reportBy" : "hellouser123",
                "reportNumber" : 1 
           },
           {
                "birth" : ISODate("1927-09-04T04:00:00Z"), 
                "contribs" : [ "Lisp", "Artificial       Intelligence", "ALGOL" ],
                "name" : "John McCarthy",
                "awards" : 3, 
                "reportDate" : "2020-06-05", 
                reportBy" : "hellouser123",   
                reportNumber" : 1 
           },
           { 
                "birth" : ISODate("1906-12-09T05:00:00Z"),  
                "contribs" : [ "UNIVAC", "compiler",     "FLOW-MATIC", "COBOL" ],
                "name" : "Grace Hopper",
                "awards" : 4, 
                "reportDate" : "2020-06-05",
                "reportBy" : "hellouser123", 
                "reportNumber" : 1 
           }, 
           { 
                "birth" : ISODate("1926-08-27T04:00:00Z"),  
                "contribs" : [ "OOP", "Simula" ], 
                "name" : "Kristen Nygaard", 
                "awards" : 3,     
                "reportDate" : "2020-06-05", 
                "reportBy" :    "hellouser123", 
                "reportNumber" : 1 
           },
           { 
                "birth" : ISODate("1931-10-12T04:00:00Z"),
                "contribs" : [ "OOP", "Simula" ],
                "name" : "Ole-Johan Dahl",
                "awards" : 3,
                "reportDate"    : "2020-06-05", 
                "reportBy" : "hellouser123",  
                "reportNumber" : 1 
           },
           {
                "birth" : ISODate("1956-01-31T05:00:00Z"),
                "contribs" : [ "Python" ],
                "name" : "Guido van Rossum",
                "awards" : 2, 
                "reportDate" : "2020-06-05", 
                "reportBy" : "hellouser123",
                "reportNumber" : 1 }
      ]      


si aplicamos el **filtro** nos los traera los datos "bonitos" y "filtrados" **db.users.find({"name":"Kristen Nygaard"}).pretty**:

      [
           { 
                "birth" : ISODate("1926-08-27T04:00:00Z"),  
                "contribs" : [ "OOP", "Simula" ], 
                "name" : "Kristen Nygaard", 
                "awards" : 3,     
                "reportDate" : "2020-06-05", 
                "reportBy" :    "hellouser123", 
                "reportNumber" : 1 
           }
      ]
     
### **ObjecId** / create or read

To generate a new ObjectId, use ObjectId() with no argument:

      x = ObjectId()

In this example, the value of x would be:

      ObjectId("507f1f77bcf86cd799439011")

Specify a Hexadecimal String

To generate a new ObjectId using ObjectId() with a unique hexadecimal string:

      y = ObjectId("507f191e810c19729de860ea")

In this example, the value of y would be:

      ObjectId("507f191e810c19729de860ea")

Access the Hexadecimal String

Access the str attribute of an ObjectId() object, as follows:

      ObjectId("507f191e810c19729de860ea").str
                    or
      ObjectId("507f191e810c19729de860ea").toString()

This operation will return the following hexadecimal string:

      507f191e810c19729de860ea

### Find by Id 

### **db.[collection].find( { "_id": ObjectId("507f191e810c19729de860ea") } )** : 

      should retrieve the document with that ObjectId

## UPDATE

### **db.[collection].updadate/updateOne({query},{$set:{update}})** : 
       
      db.users.update({name:"Kristen Nygaard"},{$set:{"name":"Jorge"}})

si hacemos un find():

       [
               { 
                    "birth" : ISODate("1926-08-27T04:00:00Z"),  
                    "contribs" : [ "OOP", "Simula" ], 
                    "name" : "Jorge", 
                    "awards" : 3,     
                    "reportDate" : "2020-06-05", 
                    "reportBy" :    "hellouser123", 
                    "reportNumber" : 1 
               }
          ]

     

