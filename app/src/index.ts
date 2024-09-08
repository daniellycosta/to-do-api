import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { AppDataSource } from "../database";
import "reflect-metadata";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server is running!");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
