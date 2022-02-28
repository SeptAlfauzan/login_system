import express from "express";
const router = express.Router();
const bcrypt = require("bcryptjs");
import Mahasiswa from "../models/MahasiswaModel";

router.get("/", (req, res) => {
  res.render("register");
});
router.post("/", async (req, res) => {
  try {
    const { name, nim, password } = req.body;
    const saltRound = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRound);

    const data = { nama: name, nim, password: hashedPassword };

    console.log(data);
    const [mahasiswa, created] = await Mahasiswa.findOrCreate({
      where: { nim },
      defaults: data,
    });
    if (created)
      return res.status(200).json({ message: "Register success ✅" });
    res.status(200).json({ message: "NIM already registered! 🤚" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
