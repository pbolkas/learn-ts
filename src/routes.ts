import { Express, Request, Response } from "express"

export default (app:Express) => {
  app.get("/healthcheck", (req:Request, res:Response) => {
    res.sendStatus(200);
  })

  // Register
  // app.post

  // Login

  // Get user's session

  // Logout
}