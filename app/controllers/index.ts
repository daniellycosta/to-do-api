import { Request, Response } from "express";
import { AppDataSource } from "../database";
import { Task } from "../models/Task";

export class TaskController {
  static async getAllTasks(req: Request, res: Response) {
    const tasksRepository = AppDataSource.getRepository(Task);
    const tasks = await tasksRepository.find();

    return res.status(200).json({
      count: tasks.length,
      data: tasks,
    });
  }
  static async createTask(req: Request, res: Response) {
    const { title, description } = req.body;
    const task = new Task();
    task.title = title;
    task.description = description;
    task.createdAt = new Date();

    const tasksRepository = AppDataSource.getRepository(Task);
    await tasksRepository.save(task);
    return res.status(200).json({ message: "Task created successfully", task });
  }
}
