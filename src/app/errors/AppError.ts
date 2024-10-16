class AppError extends Error {
  public statusCode: number;

  constructor(statusCode: number, message: string, stack = "") {
    super(message);
    this.statusCode = statusCode;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

class NotFoundError extends AppError {
  constructor(message: string) {
    super(404, message);
  }
}

class UnauthorizedError extends AppError {
  constructor(message: string) {
    super(401, message);
  }
}

class ForbiddenError extends AppError {
  constructor(message: string) {
    super(403, message);
  }
}

export { AppError, NotFoundError, UnauthorizedError, ForbiddenError };
