const menu = document.querySelector(".menu")
const menuItems = document.querySelectorAll(".menuItem")
const closeIcon = document.querySelector(".closeIcon")
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}
  closeIcon.addEventListener("click",toggleMenu);
  menuIcon.addEventListener("click",toggleMenu);

  menuItems.forEach(function(menuItem){
    menuItem.addEventListener("click", toggleMenu);
  });
//