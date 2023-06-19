var MongoClient = require('mongodb').MongoClient;

var url = `mongodb+srv://contact:${process.env.pdw}@testingcontact.wf4sakf.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);
let conn;
let _db;
const connectDb = async(operations, response) => {
  try {
    if (_db) {
      return _db;
    }
    console.log('Connecting to mongodb server, please wait ...');
    conn = await client.connect();
    console.log('Connected to MongoDB');
     _db = conn.db("contact");
     return _db;
  } catch(e) {
    console.error(e);
    throw new Error(e);
  }
}

module.exports = {connectDb, getDB: () => _db};


