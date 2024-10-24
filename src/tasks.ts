import { atom } from "nanostores";
import { v4 as uuidv4 } from "uuid";

type Assignee = { id: string; firstName: string; lastName: string };

export type Task = {
  id: string;
  status: "todo" | "in-progress" | "done";
  category: "DESIGN_SYSTEM" | "FRONTEND" | "BACKEND" | "DEVOPS" | "OTHER";
  title: string;
  description: string;
  assignee: Assignee;
};

const defaultTasks: Task[] = [
  {
    id: uuidv4(),
    status: "todo",
    category: "DESIGN_SYSTEM",
    title: "To Do",
    description: "Create a design system for the company",
    assignee: { id: uuidv4(), firstName: "John", lastName: "Doe" },
  },
  {
    id: uuidv4(),
    status: "in-progress",
    category: "FRONTEND",
    title: "In Progress",
    description: "Create a design system for the company",
    assignee: { id: uuidv4(), firstName: "John", lastName: "Doe" },
  },
  {
    id: uuidv4(),
    status: "done",
    category: "BACKEND",
    title: "DONE",
    description: "Create a design system for the company",
    assignee: { id: uuidv4(), firstName: "John", lastName: "Doe" },
  },
  {
    id: uuidv4(),
    status: "done",
    category: "DEVOPS",
    title: "DONE",
    description: "Create a design system for the company",
    assignee: { id: uuidv4(), firstName: "John", lastName: "Doe" },
  },
  {
    id: uuidv4(),
    status: "done",
    category: "OTHER",
    title: "DONE",
    description: "Create a design system for the company",
    assignee: { id: uuidv4(), firstName: "John", lastName: "Doe" },
  },
];
export const tasks = atom(defaultTasks);
