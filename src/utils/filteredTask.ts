import { tasks } from "../tasks";

function handleSearch(event: Event) {
  const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
  const autocompleteList = document.querySelector(".autocomplete-list") as HTMLUListElement;
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
    listItem.addEventListener("click", () => {
      (document.querySelector(".search-bar") as HTMLInputElement).value = task.title;
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

document.querySelector(".search-bar")?.addEventListener("input", handleSearch);
