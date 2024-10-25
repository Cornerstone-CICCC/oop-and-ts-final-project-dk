export const changeCSS = () => {
  const main = document.querySelector("main");
  const lists = document.querySelectorAll("li");
  const bords = document.querySelectorAll(".bord");
  const categories = document.querySelectorAll(".category");
  const subTitles = document.querySelectorAll("h2");

  if (!main) return;
  const width = window.innerWidth;
  if (width < 600) {
    lists.forEach((li) => {
      li.style.fontSize = "5px";
      li.style.width = "50px";
      li.style.padding = "10px";
    });
    bords.forEach((b) => {
      const el = b as HTMLElement;
      el.style.width = "100px";
    });
    subTitles.forEach((subTitle) => {
      const el = subTitle as HTMLElement;
      el.style.fontSize = "10px";
    });
  } else if (width < 900) {
    main.style.padding = "0";

    lists.forEach((li) => {
      li.style.fontSize = "10px";
      li.style.width = "100px";
    });
    bords.forEach((b) => {
      const el = b as HTMLElement;
      el.style.width = "150px";
    });
    categories.forEach((c) => {
      const el = c as HTMLElement;
      el.style.display = "none";
    });
  } else {
    lists.forEach((li) => {
      li.style.fontSize = "16px";
      li.style.width = "200px";
      li.style.padding = "20px";
    });
    bords.forEach((b) => {
      const el = b as HTMLElement;
      el.style.width = "250px";
    });
    categories.forEach((c) => {
      const el = c as HTMLElement;
      el.style.display = "block";
    });
    subTitles.forEach((subTitle) => {
      const el = subTitle as HTMLElement;
      el.style.fontSize = "16px";
    });
  }
};
