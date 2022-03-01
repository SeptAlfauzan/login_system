import express from "express";
import session from "express-session";
import AuthController from "./../controllers/authController";
const router = express.Router();

router.get("/", AuthController.index);
router.post("/", AuthController.login);
router.post("/logout", AuthController.logout);

module.exports = router;
