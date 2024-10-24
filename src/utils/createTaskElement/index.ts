import type { Task } from "../../tasks";
import { dragStart } from "./dragstart";
import { getColorByCategory } from "./getColorByCategory";

export const createTaskElement = (task: Task) => {
  const taskElement = document.createElement("li");
  taskElement.id = task.id;
  taskElement.draggable = true;

  taskElement.style.listStyle = "none";
  taskElement.style.width = "200px";
  taskElement.style.backgroundColor = "white";
  taskElement.style.borderRadius = "8px";
  taskElement.style.padding = "20px";

  const taskHeaderElement = document.createElement("div");
  taskHeaderElement.style.display = "flex";
  taskHeaderElement.style.gap = "4px";

  const taskCategoryIconElement = document.createElement("div");
  taskCategoryIconElement.textContent = "●";
  const color = getColorByCategory(task.category);
  taskCategoryIconElement.style.color = color;
  taskHeaderElement.appendChild(taskCategoryIconElement);

  const taskCategoryTextElement = document.createElement("div");
  taskCategoryTextElement.textContent = task.category;
  taskHeaderElement.appendChild(taskCategoryTextElement);

  taskElement.appendChild(taskHeaderElement);

  const taskTitleElement = document.createElement("h3");
  taskTitleElement.textContent = task.title;
  taskElement.appendChild(taskTitleElement);

  const taskDescriptionElement = document.createElement("p");
  taskDescriptionElement.textContent = task.description;
  taskElement.appendChild(taskDescriptionElement);

  const taskAssigneesElement = document.createElement("div");
  taskAssigneesElement.style.display = "flex";
  taskAssigneesElement.style.flexWrap = "wrap";

  const taskAssigneeElement = document.createElement("div");
  const { assignee } = task;
  taskAssigneeElement.textContent =
    assignee.firstName[0] + assignee.lastName[0];
  taskAssigneeElement.style.backgroundColor = "lightgray";
  taskAssigneeElement.style.borderRadius = "50%";
  taskAssigneeElement.style.padding = "4px";
  taskAssigneesElement.appendChild(taskAssigneeElement);
  taskElement.appendChild(taskAssigneesElement);

  taskElement.addEventListener("dragstart", dragStart);

  return taskElement;
};
