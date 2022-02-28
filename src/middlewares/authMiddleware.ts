import { RequestHandler } from "express";

class AuthMiddleware {
  static auth = (req, res, next) => {
    console.log("test");
    next();
  };
}

module.exports = AuthMiddleware;
