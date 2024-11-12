import { navbarLogical } from "./shared/modules/navbar/index.js";
import { getUser } from "./shared/utils/user.js";
import { getBlogCard } from "./shared/utils/blogCard.js";

const loadPartial = async (elementId, partialFile) => {
  try {
    const response = await fetch(partialFile);
    const data = await response.text();
    document.getElementById(elementId).innerHTML = data;
  } catch (error) {
    console.error("Ошибка загрузки partial:", error);
  }
};

loadPartial("navbar", "../src/shared/modules/navbar/ui.html");
loadPartial("footer", "../src/shared/modules/footer/ui.html");
loadPartial("subcribe", "../src/shared/modules/subscribe/ui.html");

const addComponent = (elementId, content) => {
  const element = document.getElementById(elementId);
  if (element) {
    const newComponent = document.createElement("div");
    newComponent.innerHTML = content;

    element.append(newComponent);
  } else {
    console.error(`Элемент с id '${elementId}' не найден.`);
  }
};

const initializeComponents = () => {
  const userContent = getUser();
  const blogCardContent = getBlogCard();

  addComponent("blogCard", blogCardContent.outerHTML);
  addComponent("userAll", userContent.outerHTML);
};

const changeNavbarBackground = (page) => {
  const navbar = document.querySelector(".navbar");
  const links = document.querySelectorAll(".linkContainer a");

  if (page === "home" || page === "blog" || page === "courses") {
    navbar.classList.add("navbarActive");
    navbar.classList.remove("otherActive");
  } else {
    navbar.classList.add("otherActive");
    navbar.classList.remove("navbarActive");
  }

  links.forEach((link) => {
    link.classList.remove("linksActive");
    link.classList.add("linksOther");

    if (link.getAttribute("data-page") === page) {
      link.classList.add("linksActive");
      link.classList.remove("linksOther");
    }
  });
};

const loadPage = async (page) => {
  const pageFile = `../src/pages/${page}/${page}.html`;
  await loadPartial("pages", pageFile);
  navbarLogical();
  changeNavbarBackground(page);
  initializeComponents();
};

document.addEventListener("DOMContentLoaded", () => {
  loadPage("home");

  document.getElementById("navbar").addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      event.preventDefault();
      const page = event.target.getAttribute("data-page");
      loadPage(page);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const updateActiveTab = () => {
    const hash = window.location.hash;
    const tabButtons = document.querySelectorAll(".tabButton");
    const tabContents = document.querySelectorAll(".tabContent");

    tabButtons.forEach((button) => {
      button.classList.remove("active");
    });
    tabContents.forEach((content) => {
      content.style.display = "none";
    });

    if (hash) {
      const activeButton = document.querySelector(`a[href="${hash}"]`);
      const activeContent = document.querySelector(hash);

      if (activeButton && activeContent) {
        activeButton.classList.add("active");
        activeContent.style.display = "flex";
      }
    } else {
      const defaultButton = tabButtons[0];
      const defaultContent = tabContents[0];

      if (defaultButton && defaultContent) {
        defaultButton.classList.add("active");
        defaultContent.style.display = "flex";
      }
    }
  };

  updateActiveTab();

  window.addEventListener("hashchange", updateActiveTab);
});
