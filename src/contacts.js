import startWeb from "./website";
import loadAbout from "./about";
import "/styles/style.css";
//import createNav from "./website.js";

const content = document.getElementById("content");

function loadContact() {
  createNav();
  contactUs();
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

  logoDiv.addEventListener("click", (e) => {
    console.log(e.target)
    content.querySelectorAll('*').forEach(n => n.remove());
      startWeb();
      setActive(e.target)
    });  

  aboutNav.addEventListener("click", (e) => {
    console.log(e.target)
    content.querySelectorAll('*').forEach(n => n.remove());
      loadAbout();
      setActive(e.target)
    });
  }

function contactUs(){
  const contactSect = document.createElement("div");
  contactSect.classList.add("contact-sect");
  content.appendChild(contactSect);

  const contactImg = document.createElement("div");
  contactImg.classList.add("contact-img");
  contactSect.appendChild(contactImg);

  const image = document.createElement("img");
  image.setAttribute("src", "cuisine.jpg");
  image.classList.add("contact-cuisine");
  contactImg.appendChild(image);

  const contactText = document.createElement("div");
  contactText.classList.add("contact-txt");
  contactSect.appendChild(contactText);

  const contact = document.createElement("p");
  contact.classList.add("About");
  contact.innerHTML = "Make your reservations here! Suggestions and feedbacks are welcome!";
  contactText.appendChild(contact);

  const form = document.createElement("form");
  form.classList.add("form");
  contactText.appendChild(form);

  const inputName = document.createElement("input");
  inputName.classList.add("input-name");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("placeholder", "Name");
  form.appendChild(inputName);

  const inputEmail = document.createElement("input");
  inputEmail.classList.add("input-email");
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("placeholder", "Email");
  form.appendChild(inputEmail);

  const inputSubject = document.createElement("input");
  inputSubject.classList.add("input-subject");
  inputSubject.setAttribute("type", "text");
  inputSubject.setAttribute("placeholder", "Subject");
  form.appendChild(inputSubject);

  const inputSubmit = document.createElement("input");
  inputSubmit.classList.add("input-submit");
  inputSubmit.setAttribute("type", "submit");
  inputSubmit.setAttribute("placeholder", "Submit");
  form.appendChild(inputSubmit);
}

export default loadContact;

//document.homepage.appendChild(loadAbout());

//document.body.appendChild(loadAbout());
