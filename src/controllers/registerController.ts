import express, { Request, Response, NextFunction } from "express";
const bcrypt = require("bcryptjs");
import Mahasiswa from "../models/MahasiswaModel";

class RegisterController {
  static index = (req: Request, res: Response) => {
    res.render("register");
  };

  static register = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const saltRound = 10;
      const hashedPassword = bcrypt.hashSync(password, saltRound);
      const data = { username, password: hashedPassword };

      const [mahasiswa, created] = await Mahasiswa.findOrCreate({
        where: { username },
        defaults: data,
      });
      if (created)
        return res.status(200).json({ message: "Register success ✅" });
      res.status(200).json({ message: "Username already registered! 🤚" });
    } catch (error) {
      console.log(error);
    }
  };
}

export default RegisterController;
