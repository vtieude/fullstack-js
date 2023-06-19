const express = require('express');

const { getAll, get, add, replace, remove } = require('../data/contact');
const {
  isValidText,
  isValidDate,
  isValidImageUrl,
} = require('../util/validation');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const contacts = await getAll();
    res.json({ contacts: contacts });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const contact = await get(req.params.id);
    res.json({ contact: contact });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  const data = req.body.contactData;
  let errors = {};

  if (!isValidText(data.name)) {
    errors.name = 'Invalid name.';
  }

  if (!isValidText(data.description)) {
    errors.description = 'Invalid description.';
  }

  if (!!data.date && !isValidDate(data.date)) {
    errors.date = 'Invalid date.';
  }

  if (!isValidImageUrl(data.image)) {
    errors.image = 'Invalid image.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: 'Adding the contact failed due to validation errors.',
      errors,
    });
  }

  try {
    await add(data);
    res.status(201).json({ message: 'Contact saved.', contact: data });
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  const data = req.body.contactData;

  let errors = {};

  if (!isValidText(data.name)) {
    errors.name = 'Invalid name.';
  }

  if (!isValidText(data.description)) {
    errors.description = 'Invalid description.';
  }

  if (!!data.date && !isValidDate(data.date)) {
    errors.date = 'Invalid date.';
  }

  if (!isValidImageUrl(data.image)) {
    errors.image = 'Invalid image.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: 'Updating the contact failed due to validation errors.',
      errors,
    });
  }

  try {
    await replace(req.params.id, data);
    res.json({ message: 'Contact updated.', contact: data });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await remove(req.params.id);
    res.json({ message: 'Contact deleted.' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
