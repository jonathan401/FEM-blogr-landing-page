// const menuItems = document.querySelector('');
const accordionControls = document.querySelectorAll(
  ".navigation__accordion-control"
);
const menu = document.querySelector("#navigationMenu");
const menuControl = document.querySelector(".navigation__menu-control");

menu.addEventListener("click", (e) => {
  if (
    e.target.tagName == "BUTTON" &&
    e.target.classList.contains("navigation__accordion-control")
  ) {
    accordionControls.forEach((accordionControl) => {
      let expanded =
        accordionControl.getAttribute("aria-expanded") === "true" || false;
      if (accordionControl !== e.target) {
        accordionControl.classList.remove("open");
        accordionControl.nextElementSibling.setAttribute(
          "data-expanded",
          false
        );
        accordionControl.setAttribute("aria-expanded", false);
      } else {
        accordionControl.classList.toggle("open");
        accordionControl.setAttribute("aria-expanded", !expanded);
        accordionControl.nextElementSibling.setAttribute(
          "data-expanded",
          !expanded
        );
      }
    });
  }
});

menuControl.addEventListener("click", () => {
  let expanded = menuControl.getAttribute("aria-expanded") === "true" || false;
  let open = "./images/icon-hamburger.svg";
  let closed = "./images/icon-close.svg";
  let buttonIcon = menuControl.querySelector("img");
  menuControl.setAttribute("aria-expanded", !expanded);
  menu.setAttribute("data-expanded", !expanded);
  buttonIcon.setAttribute("src", expanded ? open : closed);

  // close any open accordion panel when the menu is closed
  if (menuControl.getAttribute("aria-expanded") === "false") {
    accordionControls.forEach((accordionControl) => {
      accordionControl.classList.remove("open");
      accordionControl.nextElementSibling.setAttribute("data-expanded", false);
      accordionControl.setAttribute("aria-expanded", false);
    });
  }
  menuControl.nextElementSibling.classList.toggle("hidden");
});

// menuTriggers.forEach((trigger) => {
//   trigger.addEventListener('click', () => {

//   });
// });
