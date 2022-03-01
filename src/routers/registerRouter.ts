import express from "express";
import RegisterController from "./../controllers/registerController";
const router = express.Router();

router.get("/", RegisterController.index);
router.post("/", RegisterController.register);

module.exports = router;
