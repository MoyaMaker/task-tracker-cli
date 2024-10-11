type Status = "todo" | "in-progress" | "done";

export type Task = {
  id: number;
  description: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
};
