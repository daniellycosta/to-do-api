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
  static async editTask(req: Request, res: Response) {
    const { id } = req.params;
    const { title, description } = req.body;

    const tasksRepository = AppDataSource.getRepository(Task);
    const task = await tasksRepository.findOne({ where: { id } });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.title = title;
    task.description = description;
    task.updatedAt = new Date();

    await tasksRepository.save(task);
    return res.status(200).json({ message: "Task updated successfully", task });
  }
  static async deleteTask(req: Request, res: Response) {
    const { id } = req.params;

    const tasksRepository = AppDataSource.getRepository(Task);
    const task = await tasksRepository.findOne({ where: { id } });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    await tasksRepository.delete(id);
    return res.status(200).json({ message: "Task deleted successfully" });
  }
  static async completeTask(req: Request, res: Response) {
    const { id } = req.params;

    const tasksRepository = AppDataSource.getRepository(Task);
    const task = await tasksRepository.findOne({ where: { id } });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.completedAt = new Date();
    await tasksRepository.save(task);
    return res.status(200).json({ message: "Task completed successfully" });
  }
}
