export const drop = (e: DragEvent, droppableElement: HTMLElement) => {
  e.preventDefault();
  const dataTransfer = e.dataTransfer;
  if (dataTransfer === null) return;

  const taskId = dataTransfer.getData("application/my-app");

  const elByData = document.getElementById(taskId);
  if (elByData === null) return;

  // TODO: Update the task status to "done"
  droppableElement.appendChild(elByData);
};
