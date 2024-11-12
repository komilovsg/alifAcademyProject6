export const navbarLogical = () => {
  const dialogLogin = document.getElementById("dialogLogin");
  const login = document.getElementById("login");
  const btnOrange = document.querySelector(".btnOrange");
  const containerRegLog = document.querySelector(".containerRegLog");
  const succesContent = document.querySelector(".succesContent");

  login.onclick = () => {
    dialogLogin.show();
  };

  btnOrange.onclick = () => {
    alert("Successfully logged in");
    containerRegLog.style.display = "none";
    succesContent.style.display = "flex";
  };
};
