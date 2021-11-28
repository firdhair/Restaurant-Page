import loadHomepage from "./homepage";
import loadAbout from "./about.js";

function startWeb(){
    createNav();
    loadHomepage();
}

function createNav() {
    const content = document.getElementById("content");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
  
    content.appendChild(nav);
  
    const logoDiv = document.createElement("div");
    logoDiv.classList.add("logo-div");
    const newLogo = document.createElement("img");
    newLogo.setAttribute("src", "spoonfork.png");
    newLogo.classList.add("logo");
    logoDiv.appendChild(newLogo);
  
    const logoNav = document.createElement("h1");
    //logoNav.classList.add("logo");
    logoNav.innerHTML = "Bites";
    logoDiv.appendChild(logoNav);
    nav.appendChild(logoDiv);
  
    nav.appendChild(ul);
  
    const aboutNav = document.createElement("li");
    aboutNav.classList.add("about");
    aboutNav.innerHTML = "About Us";
    ul.appendChild(aboutNav);
  
    const menuNav = document.createElement("li");
    menuNav.classList.add("menu");
    menuNav.innerHTML = "Menu";
    ul.appendChild(menuNav);
  
    const contactsNav = document.createElement("li");
    contactsNav.classList.add("menu");
    contactsNav.innerHTML = "Contacts";
    ul.appendChild(contactsNav);
  
    const cartNav = document.createElement("div");
    cartNav.classList.add("cart-nav");
    const cartLogo = document.createElement("img");
    cartLogo.setAttribute("src", "shopping-cart.png");
    cartLogo.classList.add("cart");
    // cartNav.appendChild(cartLogo);
    nav.appendChild(cartLogo);
  
    const reserveNav = document.createElement("button");
    reserveNav.classList.add("reserve");
    reserveNav.innerHTML = "Reserve Table";
    nav.appendChild(reserveNav);
  
    aboutNav.addEventListener("click", (e) => {
    console.log(e.target)
    content.querySelectorAll('*').forEach(n => n.remove());
      loadAbout();
      setActive(e.target)
    });
  }

  function setActive(e){
    console.log(e);
    e.classList.add("active");
  }
export default startWeb;