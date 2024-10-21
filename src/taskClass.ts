import { v4 as uuidv4 } from "uuid";

type Assignee = { id: string; firstName: string; lastName: string };

type Task = {
  id: string;
  status: "todo" | "in-progress" | "done";
  category: string; // e.g. "DESIGN SYSTEM", "DEVELOPMENT", "TYPOGRAPHY"
  title: string;
  description: string;
  assignees: Assignee[];
};

type NewTask = {
  status: "todo" | "in-progress" | "done";
  category: string; // e.g. "DESIGN SYSTEM", "DEVELOPMENT", "TYPOGRAPHY"
  title: string;
  description: string;
  assignees: Omit<Assignee, "id">[];
};

export class TaskManager {
  tasks: Task[] = [];

  add(newTask: NewTask): void {
    const newAssignees: Assignee[] = newTask.assignees.map((assignee) => {
      return { id: uuidv4(), ...assignee };
    });

    this.tasks.push({ id: uuidv4(), ...newTask, assignees: newAssignees });
  }

  update(id: string, updatedTask: Omit<Partial<Task>, "id">): void {
    const task = this.tasks.find((task) => task.id === id);
    if (task === undefined) return;
    Object.assign(task, updatedTask);
  }

  delete(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onDrag() {
    // TODO
  }

  onDrop() {
    // TODO
  }
}
