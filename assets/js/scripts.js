// Open & Close Sidebar
const sideNav = document.getElementById("mySidenav");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");

function openNav() {
  sideNav.style.height = "calc(100% - 54px)";
  sideNav.style.padding = "20px 25px 5px 25px";

  menuBtn.style.display = "none";
  closeBtn.style.display = "flex";
}

function closeNav() {
  sideNav.style.height = "0";
  sideNav.style.padding = "0";

  menuBtn.style.display = "flex";
  closeBtn.style.display = "none";
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 320) {
    menuBtn.style.display = "none";
    closeBtn.style.display = "none";
  } else {
    sideNav.style.height = "0";
    sideNav.style.padding = "0";

    menuBtn.style.display = "flex";
    closeBtn.style.display = "none";
  }
});

// Welcome Page
const welcomeOverlay = document.getElementById("welcomeOverlay");
const mainContent = document.getElementById("mainContent");
const hasVisited = localStorage.getItem("hasVisited");

if (hasVisited) {
  welcomeOverlay.style.display = "none";
  mainContent.style.display = "block";
} else {
  welcomeOverlay.style.display = "flex";
  mainContent.style.display = "none";
}

function enterSite() {
  welcomeOverlay.classList.add("hidden");

  setTimeout(() => {
    welcomeOverlay.style.display = "none";
    mainContent.style.display = "block";

    localStorage.setItem("hasVisited", "true");
  }, 500);
}
