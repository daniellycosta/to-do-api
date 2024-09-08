import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { AppDataSource } from "../database";
import "reflect-metadata";
const taskRoutes = require("./routes/index.ts");

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/tasks", taskRoutes);

app.get("*", (req: Request, res: Response) => {
  res.status(505).json({ message: "Bad Request" });
});

AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
