export const openModalToAddTask = () => {
  const modal = document.querySelector(
    ".modal-add-task-wrapper",
  ) as HTMLElement;
  modal.style.display = "block";
};
