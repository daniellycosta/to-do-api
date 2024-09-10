import { Request, Response } from "express";
import { validateRequest } from "../middleware";
import { taskSchema } from "../schemas";

import { TaskController } from "../controllers";

const express = require("express");
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  TaskController.getAllTasks(req, res);
});

router.post("/", validateRequest(taskSchema), (req: Request, res: Response) => {
  TaskController.createTask(req, res);
});

router.put(
  "/:id",
  validateRequest(taskSchema),
  (req: Request, res: Response) => {
    TaskController.editTask(req, res);
  }
);

router.delete("/:id", (req: Request, res: Response) => {
  TaskController.deleteTask(req, res);
});

router.patch("/:id/complete", (req: Request, res: Response) => {
  TaskController.completeTask(req, res);
});

module.exports = router;
