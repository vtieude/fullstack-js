const express = require('express');

const { getAll, get, add, replace, remove } = require('../data/contact');
const {
  validateContact
} = require('../util/validation');

const { checkAuth } = require('../util/auth');

const router = express.Router();
router.use(checkAuth);

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
  const errors = validateContact(data);

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

  const errors= validateContact(data);

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
