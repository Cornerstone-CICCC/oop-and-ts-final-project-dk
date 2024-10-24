import type { Task } from "../../tasks";

export const getColorByCategory = (category: Task["category"]) => {
  switch (category) {
    case "DESIGN_SYSTEM":
      return "red";
    case "FRONTEND":
      return "blue";
    case "BACKEND":
      return "green";
    case "DEVOPS":
      return "yellow";
    case "OTHER":
      return "black";
    default:
      return "black";
  }
};
