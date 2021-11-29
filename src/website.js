import loadHomepage from "./homepage";
import loadContact from "./contacts.js";
import loadAbout from "./about.js";

function startWeb(){
    createNav();
    loadHomepage();
}

export function createNav() {
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
    aboutNav.innerHTML = "About";
    ul.appendChild(aboutNav);
  
    // const menuNav = document.createElement("li");
    // menuNav.classList.add("menu");
    // menuNav.innerHTML = "Menu";
    // ul.appendChild(menuNav);
  
    const contactsNav = document.createElement("li");
    contactsNav.classList.add("contacts-nav");
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
  
    contactsNav.addEventListener("click", (e) => {
    console.log(e.target)
    content.querySelectorAll('*').forEach(n => n.remove());
      loadContact();
      setActive(e.target)
    });

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

//export {createNav};
export default startWeb;