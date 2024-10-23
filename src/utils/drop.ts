import { tasks, type Task } from "../tasks";

export const drop = (
  e: DragEvent,
  droppableElement: HTMLElement,
  updatedTaskStatus: Task["status"],
) => {
  e.preventDefault();
  const dataTransfer = e.dataTransfer;
  if (dataTransfer === null) return;

  const taskId = dataTransfer.getData("application/my-app");

  const elByData = document.getElementById(taskId);
  if (elByData === null) return;

  const updatedTasks = tasks.value.map((task) => {
    if (task.id === taskId) {
      task.status = updatedTaskStatus;
    }
    return task;
  });
  tasks.set(updatedTasks);

  droppableElement.appendChild(elByData);
};
