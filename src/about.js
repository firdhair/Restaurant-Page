import startWeb from "./website";
import loadContact from "./contacts";
import "/styles/style.css";
//import createNav from "./website.js";

const content = document.getElementById("content");

function loadAbout() {
  createNav();
  aboutUs();
}

function createNav() {
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

//   const menuNav = document.createElement("li");
//   menuNav.classList.add("menu");
//   menuNav.innerHTML = "Menu";
//   ul.appendChild(menuNav);

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
}

function aboutUs(){
  const aboutSect = document.createElement("div");
  aboutSect.classList.add("about-sect");
  content.appendChild(aboutSect);

  const aboutTop = document.createElement("div");
  aboutTop.classList.add("about-top");
  aboutSect.appendChild(aboutTop);

  const aboutTopText = document.createElement("p");
  aboutTopText.classList.add("about-text");
  aboutTopText.innerHTML = "We are Bites, a young and beautiful team with a passion for tasty and traditional food.";
  aboutTop.appendChild(aboutTopText);

  const aboutImg = document.createElement("div");
  aboutImg.classList.add("about-img");
  aboutSect.appendChild(aboutImg);
  
  const aboutImgTitle = document.createElement("p");
  aboutImgTitle.classList.add("about-img-title");
  aboutImgTitle.innerHTML = "Rediscovering and relieving traditional Indonesian delicacies."
  aboutImg.appendChild(aboutImgTitle);

  const aboutImg2 = document.createElement("div");
  aboutImg2.classList.add("about-img2");
  aboutImg.appendChild(aboutImg2);

  const image1 = document.createElement("img");
  image1.setAttribute("src", "food33.jpg");
  image1.classList.add("about-food1");
  aboutImg2.appendChild(image1);

  const aboutImgTxt = document.createElement("p");
  aboutImgTxt.classList.add("about-img-txt");
  aboutImgTxt.innerHTML = "Our motivation was to rediscover and relive the Indonesian delicacies, just the way our grandparents used to do them, simple yet delicious, made from quality products, grown organically in the garden behind our home.";
  aboutImg2.appendChild(aboutImgTxt);

  const image2 = document.createElement("img");
  image2.setAttribute("src", "food32.jpg");
  image2.classList.add("about-food2");
  aboutImg.appendChild(image2);

  const aboutImgTxt2 = document.createElement("p");
  aboutImgTxt2.classList.add("about-img-txt2");
  aboutImgTxt2.innerHTML = "Achieving excellency, without compromises or shortcuts.";
  aboutImg.appendChild(aboutImgTxt2);


//   const aboutImg = document.createElement("div");
//   aboutImg.classList.add("about-img");
//   aboutSect.appendChild(aboutImg);

//   const image = document.createElement("img");
//   image.setAttribute("src", "cuisine.jpg");
//   image.classList.add("about-cuisine");
//   aboutImg.appendChild(image);

//   const aboutText = document.createElement("div");
//   aboutText.classList.add("about-txt");
//   aboutSect.appendChild(aboutText);

//   const inputSubject = document.createElement("input");
//   inputSubject.classList.add("input-subject");
//   inputSubject.setAttribute("type", "text");
//   inputSubject.setAttribute("placeholder", "Subject");
//   form.appendChild(inputSubject);

//   const inputSubmit = document.createElement("input");
//   inputSubmit.classList.add("input-submit");
//   inputSubmit.setAttribute("type", "submit");
//   inputSubmit.setAttribute("placeholder", "Submit");
//   form.appendChild(inputSubmit);
}

export default loadAbout;

//document.homepage.appendChild(loadAbout());

//document.body.appendChild(loadAbout());
