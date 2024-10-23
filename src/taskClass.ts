import { atom } from "nanostores";

type Assignee = { id: string; firstName: string; lastName: string };

type Task = {
  id: string;
  status: "todo" | "in-progress" | "done";
  category: string; // e.g. "DESIGN SYSTEM", "DEVELOPMENT", "TYPOGRAPHY"
  title: string;
  description: string;
  assignees: Assignee;
};

const tasks: Task[] = [];
export const taskManagerWithAtom = atom(tasks);
