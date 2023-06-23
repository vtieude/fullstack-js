class NotFoundError {
  constructor(message) {
    this.message = message;
    this.status = 404;
  }
}

class NotAuthError {
  constructor(message) {
    this.message = message;
    this.status = 422;
  }
}
exports.NotFoundError = NotFoundError;
exports.NotAuthError = NotAuthError;
