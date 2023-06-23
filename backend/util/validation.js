function isValidText(value) {
  return value && value.trim().length > 0;
}

function isValidDate(value) {
  const date = new Date(value);
  return value && date !== 'Invalid Date';
}

function isValidImageUrl(value) {
  return !!value;
}

function isValidEmailAddress(value) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !!value && pattern.test(value);
}

function validateContact(data) {
  let errors = {};

  if (!isValidText(data.name)) {
    errors.name = 'Invalid name.';
  }

  if (!!data.date && !isValidDate(data.date)) {
    errors.date = 'Invalid date.';
  }

  if (!!data.image && !isValidImageUrl(data.image)) {
    errors.image = 'Invalid image.';
  }
  if (!isValidEmailAddress(data.email)) {
    errors.email = 'Invalid email';
  }
  return errors;
}

exports.validateContact = validateContact;
exports.isValidEmailAddress = isValidEmailAddress;
exports.isValidText = isValidText;
