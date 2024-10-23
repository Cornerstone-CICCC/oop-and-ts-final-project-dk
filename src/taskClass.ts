import { atom } from "nanostores";
import { v4 as uuidv4 } from "uuid";

type Assignee = { id: string; firstName: string; lastName: string };

export type Task = {
  id: string;
  status: "todo" | "in-progress" | "done";
  category: string; // e.g. "DESIGN SYSTEM", "DEVELOPMENT", "TYPOGRAPHY"
  title: string;
  description: string;
  assignee: Assignee;
};

const tasks: Task[] = [
  {
    id: uuidv4(),
    status: "in-progress",
    category: "DESIGN SYSTEM",
    title: "In Progress",
    description: "Create a design system for the company",
    assignee: { id: uuidv4(), firstName: "John", lastName: "Doe" },
  },
  {
    id: uuidv4(),
    status: "done",
    category: "DESIGN SYSTEM",
    title: "DONE",
    description: "Create a design system for the company",
    assignee: { id: uuidv4(), firstName: "John", lastName: "Doe" },
  },
];
export const taskManagerWithAtom = atom(tasks);
