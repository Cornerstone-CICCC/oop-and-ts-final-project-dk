export const dragStart = (e: DragEvent) => {
  const dataTransfer = e.dataTransfer;
  if (dataTransfer === null) return;

  const target = e.target as HTMLElement;
  if (target === null) return;
  dataTransfer.setData("application/my-app", target.id);
  dataTransfer.effectAllowed = "move";
};
