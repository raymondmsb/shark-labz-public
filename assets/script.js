// Author: Ray Bach
// Date: 8/10/2023

//  -----Hamburger Menu Functionality----- (Reused from the BoomerangPetCare.com Website, with some modifications)

// Waits for button to be clicked in order to set aria-expanded to true
const addEventListener = (button, open, mobileMenu = false) => {
  button.addEventListener("click", () => {
    //Discovers the intentions of the button's click by determining whether the menu is open or closed
    if (open === false) {
      button.setAttribute("aria-expanded", "true");
      open = true;
      if (mobileMenu !== false) {
        mobileMenu.setAttribute("id", "openMenu");
        addEventListener(button, open, mobileMenu);
      } else {
        addEventListener(button, open, mobileMenu);
      }
    } else if (open === true) {
      button.setAttribute("aria-expanded", "false");
      open = false;
      if (mobileMenu !== false) {
        mobileMenu.removeAttribute('id');
        addEventListener(button, open, mobileMenu);
      } else {
        addEventListener(button, open);
      }
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
  pumpButton = document.querySelector("#pumpButton");
  focusButton = document.querySelector("#focusButton");
  energyButton = document.querySelector("#energyButton");
  mobileMenu = document.querySelector(".mobile");

  
  addEventListener(hamburgerButton, open, mobileMenu);
  addEventListener(pumpButton, open);
  addEventListener(focusButton, open);
  addEventListener(energyButton, open);
};


//-----Loading Page Functionality-----

//This function will determine how long the loading screen shows
function loadFunction() {
  window.addEventListener("load", showPage);
}

//This function end the loading screen
function showPage() {
  document.querySelector('[alt~="Loader"]').style.display = "none";
  document.querySelectorAll('.content').forEach((element) => {element.style.display = "block"});
  document.querySelectorAll('.specialLoad').forEach((element) => {element.style.visibility = "visible"});
  document.querySelector('#shopify-section-template--16717528105133__main').setAttribute("class", "loaded");
  time = setTimeout(rotateImage, 300);
}

//This function adds some visuals on the scroll of the page
const rotateImage = () => {
  document.querySelector('[alt~="floating"]').style.transform = "rotate(15deg) scale(1.1)";
  nodeList = document.querySelectorAll('[alt~="raspberry"]');
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.visibility = "visible";
  }
  function myFunction(x) {
    if (x.matches) { // If media query matches
      document.querySelector('[alt~="one"]').style.left = "0%";
      document.querySelector('[alt~="two"]').style.left = "100%";
      document.querySelector('[alt~="three"]').style.left = "5%";
      document.querySelector('[alt~="three"]').style.top = "25%";
      document.querySelector('[alt~="four"]').style.top = "80%";
      document.querySelector('[alt~="four"]').style.left = "-10%";
      document.querySelector('[alt~="five"]').style.bottom = "25%";
      document.querySelector('[alt~="five"]').style.left = "80%";
      document.querySelector('[alt~="Splash"]').style.maxWidth = "50vw";
    } else {
      document.querySelector('[alt~="one"]').style.left = "-8%";
      document.querySelector('[alt~="two"]').style.left = "75%";
      document.querySelector('[alt~="four"]').style.left = "75%";
      document.querySelector('[alt~="five"]').style.left = "75%";
      document.querySelector('[alt~="one"]').style.top = "30%";
      document.querySelector('[alt~="three"]').style.left = "5%";
      document.querySelector('[alt~="three"]').style.top = "-5%";
      document.querySelector('[alt~="Splash"]').style.maxWidth = "150vw";
    }
  }
  
  var x = window.matchMedia("(min-width: 768px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
}

//These functions expand and close the information when a button is pressed on the ingredients page
const expandInfo = (ingredient) => {
  let info;
  let button;
  let otherInfo;
  let otherOtherInfo;
  let otherButton;
  let otherOtherButton;
  let highlightedIngredients;
  let highlightColor;
  let otherIngredients;
  let otherOtherIngredients;

  //Assigns variables to each button and its corresponding info section based on which button was clicked
  if (ingredient === 1) {
    info = document.querySelector("#pumpInfo");
    otherInfo = document.querySelector("#focusInfo");
    otherOtherInfo = document.querySelector("#energyInfo");
    button = document.querySelector("#pumpButton");
    otherButton = document.querySelector("#energyButton");
    otherOtherButton = document.querySelector("#focusButton");
    otherIngredients = document.querySelectorAll(".energyIngredient");
    otherOtherIngredients = document.querySelectorAll(".focusIngredient");
    highlightedIngredients = document.querySelectorAll(".pumpIngredient");
    highlightColor = "#DA000D";
  } else if (ingredient === 2) {
    info = document.querySelector("#focusInfo");
    otherInfo = document.querySelector("#pumpInfo");
    otherOtherInfo = document.querySelector("#energyInfo");
    button = document.querySelector("#focusButton");
    otherButton = document.querySelector("#energyButton");
    otherOtherButton = document.querySelector("#pumpButton");
    otherIngredients = document.querySelectorAll(".energyIngredient");
    otherOtherIngredients = document.querySelectorAll(".pumpIngredient");
    highlightedIngredients = document.querySelectorAll(".focusIngredient");
    highlightColor = "#ED6506";
  } else if (ingredient === 3) {
    info = document.querySelector("#energyInfo");
    otherInfo = document.querySelector("#pumpInfo");
    otherOtherInfo = document.querySelector("#focusInfo");
    button = document.querySelector("#energyButton");
    otherButton = document.querySelector("#pumpButton");
    otherOtherButton = document.querySelector("#focusButton");
    otherIngredients = document.querySelectorAll(".pumpIngredient");
    otherOtherIngredients = document.querySelectorAll(".focusIngredient");
    highlightedIngredients = document.querySelectorAll(".energyIngredient");
    highlightColor = "#FFC700";
  }

  //Sets styles accordingly to each variable
  const computedStyle = window.getComputedStyle(info);
  if (computedStyle.display === "none") {
    otherButton.setAttribute("aria-expanded", "false");
    otherOtherButton.setAttribute("aria-expanded", "false");
    info.style.display = "block";
    otherInfo.style.display = "none";
    otherOtherInfo.style.display = "none";
    button.style.backgroundColor = "#1F85FF";
    otherButton.style.backgroundColor = "black";
    otherOtherButton.style.backgroundColor = "black";
    otherIngredients.forEach(ingredient => ingredient.style.color = "#F5F5F5");
    otherOtherIngredients.forEach(ingredient => ingredient.style.color = "#F5F5F5");
    highlightedIngredients.forEach(ingredient => ingredient.style.color = highlightColor);
    addEventListener(button, true);
    addEventListener(otherButton, false);
    addEventListener(otherOtherButton, false);
  } else if (computedStyle.display === "block") {
    info.style.display = "none";
    highlightedIngredients.forEach(ingredient => ingredient.style.color = "#F5F5F5");
    button.style.backgroundColor = "black";
    addEventListener(button, false);
  }
};

const removeArrow = () => {
  let arrow = document.querySelector(".contentArrow");
  if (window.pageYOffset > 90) { 
      arrow.classList.add("arrowGone");
    } else {
      arrow.classList.remove("arrowGone");
    }
}

const buttonAppears = () => {
  let button = document.querySelector(".bottomBuyButton");
  let element = document.querySelector(".productDetailsWrapper");

  const pixelMark = 400;

  if (!button) return; 

  if (window.pageYOffset >= pixelMark) {
    button.setAttribute("id", "buttonVisible");
  } else {
    button.removeAttribute("id");
  }
}


//-----OnLoad Listeners-----
document.addEventListener("load", loadFunction());
window.addEventListener("load", createClickListener);
window.addEventListener("scroll", removeArrow);
window.addEventListener("scroll", buttonAppears);