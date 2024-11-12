import { blogDate } from "./data.js";

export const getBlogCard = () => {
  const contentCard = document.createElement("div");

  blogDate.forEach((item) => {
    const contentCardItem = document.createElement("div");

    const imgBlog = document.createElement("img");
    const smalContent = document.createElement("div");
    const smalIcons = document.createElement("img");
    const smalText = document.createElement("p");

    const iconTxtContent = document.createElement("div");
    const roleTxtContent = document.createElement("p");
    const hr1 = document.createElement("hr");

    const smalContentCalendar = document.createElement("div");
    const iconCalendar = document.createElement("img");
    const textCalendar = document.createElement("p");
    const hr2 = document.createElement("hr");

    const smalContentTime = document.createElement("div");
    const iconTime = document.createElement("img");
    const textTime = document.createElement("p");

    const textTitleDesc = document.createElement("div");
    const title = document.createElement("h3");
    const titleDesc = document.createElement("p");

    const btnContent = document.createElement("div");
    const btnDesc = document.createElement("p");
    const btnIcons = document.createElement("img");

    imgBlog.src = item.img;
    smalIcons.src = item.iconsImg;
    smalText.textContent = item.iconsDesc;
    roleTxtContent.textContent = item.role;
    iconCalendar.src = item.iconData;
    textCalendar.textContent = item.dataDesc;
    iconTime.src = item.iconTime;
    textTime.textContent = item.timeDesc;
    title.textContent = item.title;
    titleDesc.textContent = item.description;
    btnDesc.textContent = item.whatIs;
    btnIcons.src = item.iconRight;

    contentCardItem.classList.add("contentCardItem");
    smalContent.classList.add("smalContent");
    iconTxtContent.classList.add("iconTxtContent");
    smalContentCalendar.classList.add("smalContentCalendar");
    smalContentTime.classList.add("smalContentTime");
    textTitleDesc.classList.add("textTitleDesc");
    btnContent.classList.add("btnContent")

    btnContent.append(btnDesc, btnIcons);
    smalContentTime.append(iconTime, textTime);
    smalContentCalendar.append(iconCalendar, textCalendar);
    iconTxtContent.append(
      roleTxtContent,
      hr1,
      smalContentCalendar,
      hr2,
      smalContentTime
    );
    textTitleDesc.append(title, titleDesc);
    smalContent.append(smalIcons, smalText);
    contentCardItem.append(
      imgBlog,
      smalContent,
      iconTxtContent,
      textTitleDesc,
      btnContent
    );
    contentCard.append(contentCardItem);
  });

  contentCard.classList.add("contentCardBlog");

  return contentCard;
};
