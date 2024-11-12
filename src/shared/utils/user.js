import { data } from "./data.js";

export const getUser = () => {
  const contentCard = document.createElement("div");

  const filtered = data.filter((elem) => elem.category === "cardHome");

  filtered.forEach((item) => {
    const contentCardInside = document.createElement("div");

    const imgCard = document.createElement("img");

    const contentText = document.createElement("div");
    const roleCard = document.createElement("button");
    const title = document.createElement("h6");
    const contentPriceByWho = document.createElement("div");
    const salaryCard = document.createElement("p");
    const line = document.createElement("hr");
    const byWho = document.createElement("span");

    imgCard.src = item.img;
    roleCard.textContent = item.role;
    title.textContent = item.title;
    salaryCard.textContent = item.salary;
    byWho.textContent = item.byWho;

    imgCard.classList.add("imgCard");
    contentCardInside.classList.add("contentCardInside");
    roleCard.classList.add("roleCard");
    contentPriceByWho.classList.add("contentPriceByWho");
    contentText.classList.add("contentText")

    if (roleCard.textContent === "Marketing") {
      roleCard.style.background = "#03CEA4";
    } else if (roleCard.textContent === "Management") {
      roleCard.style.background = "#5A87FC";
    } else if (roleCard.textContent === "HR & Recruting") {
      roleCard.style.background = "#F89828";
    } else if (roleCard.textContent === "Design") {
      roleCard.style.background = "#F52F6E";
    } else {
      roleCard.style.background = "#fff";
    }

    contentPriceByWho.append(salaryCard, line, byWho);
    contentText.append(roleCard, title, contentPriceByWho);
    contentCardInside.append(imgCard, contentText);
    contentCard.append(contentCardInside);
  });

  contentCard.classList.add("contentCard");

  return contentCard;
};
