import _, { create } from "lodash";
import "/styles/style.css";

const content = document.getElementById("content");

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
  createIntro();
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
}

function createIntro() {
  // intro text
  const section = document.createElement("section");
  section.classList.add("intro");
  content.appendChild(section);

  const introDiv = document.createElement("div");
  introDiv.classList.add("intro-div");
  section.appendChild(introDiv);

  // create title intro
  const introTitle = document.createElement("h2");
  introTitle.innerHTML = "We Serve The Taste You Love";
  introDiv.appendChild(introTitle);

  // create intro text
  const introText = document.createElement("p");
  introText.innerHTML =
    "This is the type of restaurant that serves foods and beverages, in additionto light refreshments such as baked goods or snacks. The term comes from the French word meaning food.";
  introDiv.appendChild(introText);

  const buttonSearch = document.createElement("div");
  buttonSearch.classList.add("button-search");
  introDiv.appendChild(buttonSearch);

  // create button
  const button = document.createElement("div");
  button.classList.add("button");
  buttonSearch.appendChild(button);
  const exploreButton = document.createElement("button");
  exploreButton.classList.add("explore-button");
  exploreButton.innerHTML = "Explore Food";
  button.appendChild(exploreButton);

  // create search button
  // const searchButton = document.createElement("input");
  // searchButton.classList.add("search-button");
  // searchButton.setAttribute("type", "search");
  // //searchButton.innerHTML = "Search";
  // introDiv.appendChild(searchButton);

  // create search
  const searchContainer = document.createElement("div");
  searchContainer.classList.add("search-container");
  buttonSearch.appendChild(searchContainer);
  const input = document.createElement("input");
  input.classList.add("search-button");
  input.setAttribute("type", "search");
  input.setAttribute("placeholder", "Search");
  searchContainer.appendChild(input);

  const searchIcon = document.createElement("img");
  searchIcon.setAttribute("src", "search2.png");
  searchIcon.setAttribute("id", "input-img");
  searchContainer.appendChild(searchIcon);

  // intro image
  const introImage = document.createElement("div");
  introImage.classList.add("intro-image");
  section.appendChild(introImage);

  // added image
  const foodImage = document.createElement("img");
  foodImage.setAttribute("src", "food2.png");
  foodImage.classList.add("food-image");
  introImage.appendChild(foodImage);

  // create small buttons
  // types of foods
  const introButtons = document.createElement("div");
  introButtons.classList.add("intro-buttons");
  introImage.appendChild(introButtons);

  const button1 = document.createElement("button");
  button1.classList.add("buttons");
  button1.classList.add("button-1");
  button1.innerHTML = "Dishes";
  introButtons.appendChild(button1);
  const dishesIcon = document.createElement("img");
  dishesIcon.setAttribute("src", "dishes.png");
  dishesIcon.setAttribute("id", "dishes-img");
  button1.appendChild(dishesIcon);

  const button2 = document.createElement("button");
  button1.classList.add("buttons");
  button2.classList.add("button-2");
  button2.innerHTML = "Dessert";
  introButtons.appendChild(button2);
  const dessertIcon = document.createElement("img");
  dessertIcon.setAttribute("src", "dessert.png");
  dessertIcon.setAttribute("id", "dessert-img");
  button2.appendChild(dessertIcon);

  const button3 = document.createElement("button");
  button1.classList.add("buttons");
  button3.classList.add("button-3");
  button3.innerHTML = "Drinks";
  introButtons.appendChild(button3);
  const drinkIcon = document.createElement("img");
  drinkIcon.setAttribute("src", "drinks.png");
  drinkIcon.setAttribute("id", "drinks-img");
  button3.appendChild(drinkIcon);

  const button4 = document.createElement("button");
  button1.classList.add("buttons");
  button4.classList.add("button-4");
  button4.innerHTML = "Platter";
  introButtons.appendChild(button4);
  const platterIcon = document.createElement("img");
  platterIcon.setAttribute("src", "platter.png");
  platterIcon.setAttribute("id", "platter-img");
  button4.appendChild(platterIcon);

  const button5 = document.createElement("button");
  button1.classList.add("buttons");
  button5.classList.add("button-5");
  button5.innerHTML = "Snacks";
  introButtons.appendChild(button5);
  const snackIcon = document.createElement("img");
  snackIcon.setAttribute("src", "snacks.png");
  snackIcon.setAttribute("id", "snacks-img");
  button5.appendChild(snackIcon);
}

document.body.appendChild(component());
