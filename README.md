# Tras Tracker CLI

Node.js CLI to manage tasks.

This projects is from [roadmap.sh - backend projects](https://roadmap.sh/projects/task-tracker).

## Use

`task.json` is the file where tasks are stored. This file should be in the root directory of the project. It should be generated when the project is executed for the first time.

```bash
npm install
npm run build
npm link
```

## Commands

| Action           | Command                                                |
| ---------------- | ------------------------------------------------------ |
| add              | `task-tracker-cli add "Task description"`              |
| update           | `task-tracker-cli update <task id> "Task description"` |
| mark-done        | `task-tracker-cli mark-done <task id>`                 |
| mark-in-progress | `task-tracker-cli mark-in-progress <task id>`          |
| mark-todo        | `task-tracker-cli mark-todo <task id>`                 |
| list             | `task-tracker-cli list`                                |
| list by status   | `task-tracker-cli list <status>`                       |
