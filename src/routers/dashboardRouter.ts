import express from "express";
import MainController from "./../controllers/mainController";
const router = express.Router();

router.get("/", MainController.dashboard);

module.exports = router;
