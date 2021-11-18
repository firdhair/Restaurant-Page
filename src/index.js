import _, { create } from "lodash";
import "/styles/style.css";

const element = document.getElementById("content");

function component() {
  // const btn = document.createElement("button");
  // const p = document.createElement("p");
  // p.innerText = "idk";
  // element.appendChild(p);
  // btn.innerHTML = "Click me!";
  // //btn.onclick = printMe;
  // element.appendChild(btn);
  // btn.addEventListener("click", test);
  // element.classList.add("hello");
  // return element;
  createNav();
}

function createNav() {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  const isiNav = ["About Us", "Menu", "Contacs"];

  element.appendChild(nav);

  const logoDiv = document.createElement("div");
  logoDiv.classList.add("logoDiv");
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
  cartNav.classList.add("cartNav");
  const cartLogo = document.createElement("img");
  cartLogo.setAttribute("src", "shopping-cart.png");
  cartLogo.classList.add("cart");
  // cartNav.appendChild(cartLogo);
  nav.appendChild(cartLogo);

  const reserveNav = document.createElement("button");
  reserveNav.classList.add("reserve");
  reserveNav.innerHTML = "Reserve Table";
  nav.appendChild(reserveNav);
}

document.body.appendChild(component());
