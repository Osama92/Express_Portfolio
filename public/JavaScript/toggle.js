// Mobile Layout Scripts
const bar = document.querySelector(".fa-bars");
const darkBtn = document.querySelector(".bxs-sun");
const darkBtn2 = document.querySelector(".bx-sun");
const menuOverlay = document.querySelector(".menuOverlay");
const hireBtn = document.querySelector(".HireBtn");
const overlayModal = document.querySelector(".contactModal");
const multiBtn = document.querySelector(".ham_holder");
const closeBtn = document.querySelector(".closeBtn");
const nameField = document.querySelector(".NameField");
const emailField = document.querySelector(".EmailField");
const msgField = document.querySelector(".MsgField");
const spanName = document.querySelector("#Name");
const spanEmail = document.querySelector("#Email");
const spanMsg = document.querySelector("#Message");

let toggle = localStorage.getItem("darkmode", "Enabled");

// Menu toggle function:

bar.addEventListener("click", (e) => {
  switch (e.target.className) {
    case "fas fa-bars":
      bar.className = "fas fa-times";
      menuOverlay.style.display = "flex";
      document.querySelector("html").style.overflow = "hidden";
      break;
    case "fas fa-times":
      bar.className = "fas fa-bars";
      menuOverlay.style.display = "none";
      document.querySelector("html").style.overflow = "scroll";
      break;
    default:
      break;
  }
});

const EnableDarkMode = () => {
  darkBtn.className = "bx bxs-moon";
  darkBtn2.className = "bx bx-moon";

  document.documentElement.style.setProperty("--background1", "#343A40");
  document.documentElement.style.setProperty("--fontColor1", "#fff");
};

const DisableDarkMode = () => {
  darkBtn.className = "bx bxs-sun";
  darkBtn2.className = "bx bx-sun";

  document.documentElement.style.setProperty("--background1", "#fff");
  document.documentElement.style.setProperty("--fontColor1", "#000");
};

if (toggle === "Enabled") {
  EnableDarkMode();
} else {
  DisableDarkMode();
}

// Dark mode toggle function for Big screen:
darkBtn.addEventListener("click", (e) => {
  toggle = localStorage.setItem("darkmode", "Enabled");
  switch (e.target.className) {
    case "bx bxs-sun":
      darkBtn.className = "bx bxs-moon";
      EnableDarkMode();

      break;
    case "bx bxs-moon":
      darkBtn.className = "bx bxs-sun";
      DisableDarkMode();
      toggle = localStorage.setItem("darkmode", "Disabled");
      break;
    default:
      break;
  }
});

// Dark mode toggle function for mobile / small screen:
darkBtn2.addEventListener("click", (e) => {
  toggle = localStorage.setItem("darkmode", "Enabled");
  switch (e.target.className) {
    case "bx bx-sun":
      darkBtn2.className = "bx bx-moon";

      EnableDarkMode();

      break;
    case "bx bx-moon":
      darkBtn2.className = "bx bx-sun";
      toggle = localStorage.setItem("darkmode", "Disabled");

      DisableDarkMode();

      break;
    default:
      break;
  }
});

// Experi
let isHidden = (overlayModal.style.display = "none");
// Hire Btn:
hireBtn.addEventListener("click", () => {
   window.location = "mailto:dhayo213@gmail.com";
  // isHidden = overlayModal.style.display = "flex";
 // === Date changed 10/01/2022 ====///
  // if (isHidden === "flex") {
  //   bar.style.display = "none";
  //   bar.style.transition = "0.5s";
  //   document.querySelector("html").style.overflow = "hidden";
  //   multiBtn.style.width = "100px";
  //   multiBtn.style.borderRadius = "5px 20px 5px";
  //   multiBtn.style.background = "#000";
  //   multiBtn.style.transition = "1s";
  //   document.querySelector(".sendBtn").style.display = "block";
  // }
});

closeBtn.addEventListener("click", () => {
  isHidden = overlayModal.style.display = "none";
  bar.style.display = "block";
  bar.style.transition = "0.5s";
  document.querySelector("html").style.overflow = "scroll";
  multiBtn.style.width = "40px";
  multiBtn.style.borderRadius = "5px";
  multiBtn.style.background = "#2ee59d";
  multiBtn.style.transition = "1s";
  document.querySelector(".sendBtn").style.display = "none";
});

// input Fields:
nameField.onfocus = function () {
  spanName.style.opacity = 1;
  spanEmail.style.opacity = 0;
  spanMsg.style.opacity = 0;
};
emailField.onfocus = function () {
  spanName.style.opacity = 0;
  spanEmail.style.opacity = 1;
  spanMsg.style.opacity = 0;
};
msgField.onfocus = function () {
  spanName.style.opacity = 0;
  spanEmail.style.opacity = 0;
  spanMsg.style.opacity = 1;
};
