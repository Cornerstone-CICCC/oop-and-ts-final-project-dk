import type { Task } from "../tasks";

export const openModalToAddTask = (taskStatus: Task["status"]) => {
  const modal = document.querySelector(".modal-add-task") as HTMLElement;
  modal.id = taskStatus;
  modal.style.display = "block";
};
