// Author: Ray Bach
// Date: 8/10/2023

//  -----Hamburger Menu Functionality-----

// Waits for hamburgerButton to be clicked in order to make menu items display visible
const addEventListener = (hamburgerButton, open, mobileMenu) => {
  hamburgerButton.addEventListener("click", () => {

    //Discovers the intentions of the button's click by determining whether the menu is open or closed
    if (open === false) {
      //This is a new icon for closing the menu
      hamburgerButton.innerHTML = `<svg id="menuClosed" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="white" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>`;
      mobileMenu.setAttribute("id", "openMenu");
      open = true;
      addEventListener(hamburgerButton, open, mobileMenu);
    } else if (open === true) {
      hamburgerButton.innerHTML = `<svg id="menuClosed" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="white" class="bi bi-list" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>`;
      mobileMenu.removeAttribute('id');
      open = false;
      addEventListener(hamburgerButton, open, mobileMenu);
    } else {
    alert("uh oh");
    }
  });
};

//This is the initial function, it will declare variables and start the add event listener function
const createClickListener = () => {
  let hamburgerButton;
  /* I made logo a part of the navigation list so unfortunately must modify each other
  item individually*/
  let mobileMenu;
  let open;
  open = false;

  hamburgerButton = document.querySelector(".menuButton");
  mobileMenu = document.querySelector(".mobile");

  
  addEventListener(hamburgerButton, open, mobileMenu);
};


//-----Loading Page Functionality-----

//This function will determine how long the loading screen shows
function loadFunction() {
  myVar = setTimeout(showPage, 3000);
}

//This function end the loading screen
function showPage() {
  document.querySelector('[alt~="Loader"]').style.display = "none";
  document.querySelectorAll('.content').forEach((element) => {element.style.display = "block"});
}


//-----OnLoad Listeners-----
window.addEventListener("load", loadFunction());
window.addEventListener("load", createClickListener);