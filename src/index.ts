#!/usr/bin/env node
import { konsole } from "./lib/konsole.js";
import { TaskDB } from "./lib/db.js";
import { Task } from "./lib/types/task.js";

(async () => {
  const argv = process.argv.slice(2);

  if (argv.length === 0) {
    konsole.green("Hello, world!");
  } else {
    const action = argv[0];

    const taskDB = new TaskDB();
    await taskDB.init();

    switch (action) {
      case "add":
        await taskDB.addTask(argv[1]);
        break;
      case "update":
        await taskDB.updateTask(Number(argv[1]), argv[2]);
        break;
      case "mark-in-progress":
      case "mark-done":
      case "mark-todo":
        const status = action.replace("mark-", "");
        await taskDB.markTask(Number(argv[1]), status as Task["status"]);
        break;
      case "list":
        const list = await taskDB.listTasks(argv[1] as Task["status"]);
        console.table(list);
        break;

      default:
        konsole.red("Invalid action provided");
        break;
    }
  }
})();
