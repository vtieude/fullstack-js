const { getDB } = require('./mydb');

const { ObjectId } = require('mongodb');

async function readData() {
  try {
  const dataDb = await getDB().collection("contact").find().toArray();
  return dataDb;
  } catch (error) {
    console.log(error);
  }
}

async function readDataById(id) {
  try {
  const dataDb = await getDB().collection("contact").findOne({_id: new ObjectId(id)});
  return dataDb;
  } catch (error) {
    console.log(error);
  }
}

async function writeData(data) {
  await getDB().collection("contact").insertOne(data);
}

async function getAll() {
  const storedData = await readData();
  return storedData;
}

async function get(id) {
  const storedData = await readDataById(id);
  console.log(storedData);
  return storedData;
}

async function add(data) {
  await writeData({ ...data, _id:  new ObjectId() });
}

async function replace(id, data) {
  try {
    const dataDb = await getDB().collection("contact").updateOne({_id: new ObjectId(id)}, {$set:data});
    return dataDb;
    } catch (error) {
      console.log(error);
    }

}

async function remove(id) {
  try {
  await getDB().collection("contact").deleteOne({_id: new ObjectId(id)});
    console.log('delete success');
  } catch (error) {
    console.log('error delete', error);
  }
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
