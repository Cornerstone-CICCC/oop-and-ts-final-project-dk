export const dragover = (e: DragEvent) => {
  e.preventDefault();
  const dataTransfer = e.dataTransfer;
  if (dataTransfer === null) return;
  dataTransfer.dropEffect = "move";
};
