const fs = require('node:fs/promises');

const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');

async function readData() {
  const data = await fs.readFile('contacts.json', 'utf8');
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile('contacts.json', JSON.stringify(data));
}

async function getAll() {
  const storedData = await readData();
  if (!storedData.contacts) {
    throw new NotFoundError('Could not find any contacts.');
  }
  return storedData.contacts;
}

async function get(id) {
  const storedData = await readData();
  if (!storedData.contacts || storedData.contacts.length === 0) {
    throw new NotFoundError('Could not find any contacts.');
  }

  const event = storedData.contacts.find((ev) => ev.id === id);
  if (!event) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return event;
}

async function add(data) {
  const storedData = await readData();
  storedData.contacts.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.contacts || storedData.contacts.length === 0) {
    throw new NotFoundError('Could not find any contacts.');
  }

  const index = storedData.contacts.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.contacts[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.contacts.filter((ev) => ev.id !== id);
  await writeData({contacts: updatedData});
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
