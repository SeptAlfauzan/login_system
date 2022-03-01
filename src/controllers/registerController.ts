import express, { Request, Response, NextFunction } from "express";
const bcrypt = require("bcryptjs");
import Mahasiswa from "../models/MahasiswaModel";

class RegisterController {
  static index = (req: Request, res: Response) => {
    res.render("register");
  };

  static register = async (req: Request, res: Response) => {
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
  };
}

export default RegisterController;
