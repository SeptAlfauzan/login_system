import { Request, Response } from "express";

class MainController {
  static loginFirst = (req: Request, res: Response) => {
    res.redirect("/auth");
  };
  static dashboard = (req: Request, res: Response) => {
    const sessionData = (req.session as any).userId;
    if (!sessionData) return res.redirect("/auth");
    res.render("dashboard", { user: sessionData });
  };
}

export default MainController;
