import express, { Express, Request, Response } from "express";
import routes from "routes";


export default function createServer () {
  const app : Express = express();

  app.get("/", (req:Request, res: Response) => {
    res.send("REST API TUTORIAL API");
  });

  routes(app);

  return app;
}

