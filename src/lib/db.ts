import fs from "node:fs";
import path from "node:path";
import { Task } from "./types/task.js";
import { konsole } from "./konsole.js";

export class TaskDB {
  private filePath = path.join(process.cwd(), "tasks.json");
  private tasks: Task[] = [];

  async init() {
    if (!fs.existsSync(this.filePath)) {
      await fs.promises.writeFile(this.filePath, JSON.stringify([]));
      this.tasks = [];
    } else {
      const tasks = await fs.promises.readFile(this.filePath, "utf-8");
      this.tasks = JSON.parse(tasks);
    }
  }

  async addTask(description: Task["description"]) {
    const task: Task = {
      id: this.tasks.length + 1,
      description,
      status: "todo",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.tasks.push(task);
    await fs.promises.writeFile(this.filePath, JSON.stringify(this.tasks));

    konsole.green("Task added successfully");
  }

  async updateTask(id: number, task: Task["description"]) {
    this.tasks = this.tasks.map((t) => {
      if (t.id === id) {
        return { ...t, description: task, updatedAt: new Date() };
      }
      return t;
    });
    await fs.promises.writeFile(this.filePath, JSON.stringify(this.tasks));

    konsole.green("Task updated successfully");
  }

  async markTask(id: number, status: Task["status"]) {
    this.tasks = this.tasks.map((t) => {
      if (t.id === id) {
        return { ...t, status, updatedAt: new Date() };
      }
      return t;
    });
    await fs.promises.writeFile(this.filePath, JSON.stringify(this.tasks));

    konsole.bgBlue("Task marked as " + status);
  }

  async listTasks(status?: Task["status"]) {
    if (status) {
      return this.tasks.filter((t) => t.status === status);
    }

    return this.tasks;
  }
}
