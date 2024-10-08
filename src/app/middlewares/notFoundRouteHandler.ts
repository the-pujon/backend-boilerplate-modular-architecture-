import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const notFoundRouteHandler = (
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    statusCode: httpStatus.NOT_FOUND,
    message: "Not Found",
  });
};

export default notFoundRouteHandler;
