import { Request, Response } from "express";
const bcrypt = require("bcryptjs");
import Mahasiswa from "../models/MahasiswaModel";

class AuthController {
  static index = (req: Request, res: Response) => {
    res.render("login");
  };
  static login = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;

      const record = await Mahasiswa.findOne({ where: { username } });
      if (!record)
        return res.status(404).json({ message: "Username not registered! 🤚" });
      const compare = bcrypt.compareSync(password, record.password);
      if (!compare)
        return res.status(404).json({ message: "Password doesn't match! 🤚" });
      // create session
      (req.session as any).userId = record.username;
      const sessionData = (req.session as any).userId;
      console.log("s", sessionData);
      return res.json({ message: "redirect", url: "/dashboard" });
    } catch (error) {
      console.log(error);
    }
  };
  static logout = (req: Request, res: Response) => {
    console.log("logout");
    req.session.destroy((err) => {
      res.redirect("/auth");
    });
  };
}

export default AuthController;
