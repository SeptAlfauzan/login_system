import express from "express";
import session from "express-session";
const router = express.Router();
const bcrypt = require("bcryptjs");
import Mahasiswa from "../models/MahasiswaModel";

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", async (req, res) => {
  try {
    const { nim, password } = req.body;

    const record = await Mahasiswa.findOne({ where: { nim } });
    if (!record)
      return res.status(404).json({ message: "NIM not registered! 🤚" });
    const compare = bcrypt.compareSync(password, record.password);
    if (!compare)
      return res.status(404).json({ message: "Password doesn't match! 🤚" });
    // create session

    (req.session as any).userId = record.nama;
    const sessionData = (req.session as any).userId;
    console.log("s", sessionData);
    return res.json({ message: "redirect", url: "/dashboard" });
  } catch (error) {
    console.log(error);
  }
});
router.post("/logout", (req, res) => {
  console.log("logout");
  req.session.destroy((err) => {
    res.redirect("/auth");
  });
});

module.exports = router;
