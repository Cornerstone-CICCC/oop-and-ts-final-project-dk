import { tasks } from "../tasks";

function handleSearch(event: Event) {
  const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
  const autocompleteList = document.querySelector(".autocomplete-list") as HTMLUListElement;
  const modal = document.getElementById("task-modal") as HTMLDivElement;
  const modalTitle = document.getElementById("modal-title") as HTMLHeadingElement;
  const modalCategory = document.getElementById("modal-category") as HTMLParagraphElement;
  const modalDescription = document.getElementById("modal-description") as HTMLParagraphElement;
  const modalAssignee = document.getElementById("modal-assignee") as HTMLParagraphElement;
  const modalContent = document.querySelector(".modal-content") as HTMLDivElement;
  const modalImage = document.getElementById("modal-image") as HTMLImageElement;

  autocompleteList.innerHTML = "";

  if (!searchTerm) {
    autocompleteList.style.border = "none"; 
    return;
  }

  const suggestions = tasks.get().filter(task =>
    task.title.toLowerCase().includes(searchTerm)
  );

  if (suggestions.length > 0) {
    autocompleteList.style.border = "1px solid #ccc"; 
  } else {
    autocompleteList.style.border = "none"; 
  }

  suggestions.forEach(task => {
    const listItem = document.createElement("li");
    listItem.textContent = task.title;
    listItem.style.padding = "8px 16px";

    listItem.addEventListener("click", () => {
      modalTitle.textContent = task.title;
      modalCategory.textContent = `Category: ${task.category}`;
      modalDescription.textContent = `Description: ${task.description}`;
      modalAssignee.textContent = `Assignee: ${task.assignee.firstName} ${task.assignee.lastName}`;
      
      switch (task.status) {
        case "todo":
          modalContent.style.borderLeft = "32px solid red"; 
          modalImage.src = "../images/header/todo.png"; 
          break;
        case "in-progress":
          modalContent.style.borderLeft = "32px solid yellow"; 
          modalImage.src = "../images/header/inprogress.png";
          break;
        case "done":
          modalContent.style.borderLeft = "32px solid green"; 
          modalImage.src = "../images/header/done.png"; 
          break;
      }

      modalImage.style.display = "block"; 

      modal.style.display = "block";
      autocompleteList.innerHTML = "";
      autocompleteList.style.border = "none"; 
    });

    listItem.addEventListener("mouseover", () => {
      listItem.style.backgroundColor = "#ADD8E6";
      listItem.style.cursor = "pointer";
    });
    listItem.addEventListener("mouseout", () => {
      listItem.style.backgroundColor = ""; 
    });
    
    autocompleteList.appendChild(listItem);
  });
}

// Ocultar la lista de autocompletar cuando se hace clic fuera de ella
document.addEventListener("click", (event) => {
  const autocompleteList = document.querySelector(".autocomplete-list") as HTMLUListElement;
  const searchBar = document.querySelector(".search-bar") as HTMLInputElement;

  if (!autocompleteList.contains(event.target as Node) && event.target !== searchBar) {
    autocompleteList.innerHTML = "";
    autocompleteList.style.border = "none"; 
  }
});

document.getElementById("close-modal")?.addEventListener("click", () => {
  const modal = document.getElementById("task-modal") as HTMLDivElement;
  modal.style.display = "none"; 
  const modalImage = document.getElementById("modal-image") as HTMLImageElement;
  modalImage.style.display = "none"; 
});

document.querySelector(".search-bar")?.addEventListener("input", handleSearch);
