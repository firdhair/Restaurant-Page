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
  createMenu();
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

  //
  const imageIntroDiv = document.createElement("div");
  imageIntroDiv.classList.add("image-intro-div");
  imageIntroDiv.classList.add("intro-right");
  introImage.appendChild(imageIntroDiv);

  // added image
  const foodImage = document.createElement("img");
  foodImage.setAttribute("src", "food2.png");
  foodImage.classList.add("food-image");
  imageIntroDiv.appendChild(foodImage);

  // create small buttons
  // types of foods
  const introButtons = document.createElement("div");
  introButtons.classList.add("intro-buttons");
  introButtons.classList.add("intro-right");
  introImage.appendChild(introButtons);

  const button1 = document.createElement("button");
  button1.classList.add("buttons");
  button1.classList.add("button-1");
  button1.innerHTML = "Dishes";
  introButtons.appendChild(button1);
  const dishesIcon = document.createElement("img");
  button1.appendChild(dishesIcon);
  button1.setAttribute("type", "button");
  dishesIcon.setAttribute("src", "dishes.png");
  dishesIcon.setAttribute("id", "dishes-img");
  button1.appendChild(dishesIcon);

  const button2 = document.createElement("button");
  button2.classList.add("buttons");
  button2.classList.add("button-2");
  button2.innerHTML = "Dessert";
  introButtons.appendChild(button2);
  const dessertIcon = document.createElement("img");
  dessertIcon.setAttribute("src", "dessert.png");
  dessertIcon.setAttribute("id", "dessert-img");
  button2.appendChild(dessertIcon);

  const button3 = document.createElement("button");
  button3.classList.add("buttons");
  button3.classList.add("button-3");
  button3.innerHTML = "Drinks";
  introButtons.appendChild(button3);
  const drinkIcon = document.createElement("img");
  drinkIcon.setAttribute("src", "drinks.png");
  drinkIcon.setAttribute("id", "drinks-img");
  button3.appendChild(drinkIcon);

  const button4 = document.createElement("button");
  button4.classList.add("buttons");
  button4.classList.add("button-4");
  button4.innerHTML = "Platter";
  introButtons.appendChild(button4);
  const platterIcon = document.createElement("img");
  platterIcon.setAttribute("src", "platter.png");
  platterIcon.setAttribute("id", "platter-img");
  button4.appendChild(platterIcon);

  const button5 = document.createElement("button");
  button5.classList.add("buttons");
  button5.classList.add("button-5");
  button5.innerHTML = "Snacks";
  introButtons.appendChild(button5);
  const snackIcon = document.createElement("img");
  snackIcon.setAttribute("src", "snacks.png");
  snackIcon.setAttribute("id", "snacks-img");
  button5.appendChild(snackIcon);
}

function createMenu() {
  // popular dishes section
  const sectionMenu = document.createElement("section");
  sectionMenu.classList.add("menu");
  content.appendChild(sectionMenu);

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-div");
  sectionMenu.appendChild(menuDiv);

  const titleButtons = document.createElement("div");
  titleButtons.classList.add("title-button-div");
  menuDiv.appendChild(titleButtons);

  // create menu title
  const menuTitle = document.createElement("h3");
  menuTitle.classList.add("menu-title");
  menuTitle.innerHTML = "Popular Dishes";
  titleButtons.appendChild(menuTitle);

  // create previous & next button
  const buttonPrev = document.createElement("a");
  buttonPrev.classList.add("previous");
  buttonPrev.classList.add("round");
  buttonPrev.innerHTML = "&#8249";
  titleButtons.appendChild(buttonPrev);

  const buttonNext = document.createElement("a");
  buttonNext.classList.add("next");
  buttonNext.classList.add("round");
  buttonNext.innerHTML = "&#8250";
  titleButtons.appendChild(buttonNext);

  const menuCards = document.createElement("div");
  menuCards.classList.add("cards-div");
  menuDiv.appendChild(menuCards);

  const menuCard = document.createElement("div");
  menuCard.classList.add("card-div");
  menuCards.appendChild(menuCard);
  const cardIcon1 = document.createElement("div");
  cardIcon1.classList.add("card-icon");
  menuCard.appendChild(cardIcon1);
  const pasta = document.createElement("img");
  pasta.setAttribute("src", "food20.png");
  cardIcon1.appendChild(pasta);
  const rating1 = document.createElement("img");
  rating1.classList.add("rating");
  rating1.setAttribute("src", "rating.png");
  menuCard.appendChild(rating1);
  const pastaTxt = document.createElement("h4");
  pastaTxt.innerHTML = "Pasta";
  menuCard.appendChild(pastaTxt);
  const pastaP = document.createElement("p");
  pastaP.innerHTML =
    "Pasta is a type of food typically made from unleavened dough";
  menuCard.appendChild(pastaP);
  const price = document.createElement("h4");
  price.classList.add("price");
  price.innerHTML = "$35.00";
  menuCard.appendChild(price);
  const button = document.createElement("button");
  button.innerHTML = "Add to Cart";
  price.appendChild(button);

  const menuCard2 = document.createElement("div");
  menuCard2.classList.add("card-div");
  menuCards.appendChild(menuCard2);
  const cardIcon2 = document.createElement("div");
  cardIcon2.classList.add("card-icon");
  menuCard2.appendChild(cardIcon2);
  const french = document.createElement("img");
  french.setAttribute("src", "food25.png");
  french.classList.add("food-2");
  cardIcon2.appendChild(french);
  const rating2 = document.createElement("img");
  rating2.classList.add("rating");
  rating2.setAttribute("src", "rating.png");
  menuCard2.appendChild(rating2);
  const frenchTxt = document.createElement("h4");
  frenchTxt.innerHTML = "Soba";
  menuCard2.appendChild(frenchTxt);
  const frenchP = document.createElement("p");
  frenchP.innerHTML =
    "Pasta is a type of food typically made from unleavened dough";
  menuCard2.appendChild(frenchP);
  const price2 = document.createElement("h4");
  price2.classList.add("price");
  price2.innerHTML = "$35.00";
  menuCard2.appendChild(price2);
  const button2 = document.createElement("button");
  button2.innerHTML = "Add to Cart";
  price2.appendChild(button2);

  const menuCard3 = document.createElement("div");
  menuCard3.classList.add("card-div");
  menuCards.appendChild(menuCard3);
  const cardIcon3 = document.createElement("div");
  cardIcon3.classList.add("card-icon");
  menuCard3.appendChild(cardIcon3);
  const shawarma = document.createElement("img");
  shawarma.setAttribute("src", "food27.png");
  cardIcon3.appendChild(shawarma);
  const rating3 = document.createElement("img");
  rating3.classList.add("rating");
  rating3.setAttribute("src", "rating.png");
  menuCard3.appendChild(rating3);
  const shawarmaTxt = document.createElement("h4");
  shawarmaTxt.innerHTML = "Chicken Shawarma";
  menuCard3.appendChild(shawarmaTxt);
  const shawarmaP = document.createElement("p");
  shawarmaP.innerHTML =
    "Pasta is a type of food typically made from unleavened dough";
  menuCard3.appendChild(shawarmaP);
  const price3 = document.createElement("h4");
  price3.classList.add("price");
  price3.innerHTML = "$35.00";
  menuCard3.appendChild(price3);
  const button3 = document.createElement("button");
  button3.innerHTML = "Add to Cart";
  price3.appendChild(button3);

  const menuCard4 = document.createElement("div");
  menuCard4.classList.add("card-div");
  menuCards.appendChild(menuCard4);
  const cardIcon4 = document.createElement("div");
  cardIcon4.classList.add("card-icon");
  menuCard4.appendChild(cardIcon4);
  const fishCurry = document.createElement("img");
  fishCurry.classList.add("food-4");
  fishCurry.setAttribute("src", "food23.png");
  cardIcon4.appendChild(fishCurry);
  const rating4 = document.createElement("img");
  rating4.classList.add("rating");
  rating4.setAttribute("src", "rating.png");
  menuCard4.appendChild(rating4);
  const fishCurryTxt = document.createElement("h4");
  fishCurryTxt.innerHTML = "Fish Curry";
  menuCard4.appendChild(fishCurryTxt);
  const fishCurryP = document.createElement("p");
  fishCurryP.innerHTML =
    "Pasta is a type of food typically made from unleavened dough";
  menuCard4.appendChild(fishCurryP);
  const price4 = document.createElement("h4");
  price4.classList.add("price");
  price4.innerHTML = "$35.00";
  menuCard4.appendChild(price4);
  const button4 = document.createElement("button");
  button4.innerHTML = "Add to Cart";
  price4.appendChild(button4);
}

document.body.appendChild(component());
