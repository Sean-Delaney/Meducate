const express = require('express');
const {MongoClient} = require('mongodb');
const app = express();
var mongoConnection;

//connectMongo().catch(console.error);
app.listen(3001, () => {
  console.log('Connected to database and server listening on port 3001')
})

//Function used to create a connection to the mongoDb database
async function connectMongo(){
  //Connection URI
  const uri = 'mongodb+srv://admin:admin@meducate.1rhf0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
  //Create connection using the URI
  mongoConnection = new MongoClient(uri);

  //Try catch to catch errors when connecting.
  try{
    await mongoConnection.connect();
    await listDatabases(mongoConnection);
  }
  catch(e){
    console.error(e);
  }
}

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log('Databases:');
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    
};

async function closeDbConnection(){
  mongoConnection.close();
}