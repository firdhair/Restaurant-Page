import "/styles/style.css";

const content = document.getElementById("content");

function loadHomepage() {
  createIntro();
  createMenu();
  createChef();
  createPlan();
  createReview();
  createChefList();
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

function createChef() {
  // popular dishes section
  const sectionChef = document.createElement("section");
  sectionChef.classList.add("chef");
  content.appendChild(sectionChef);

  const chefDiv = document.createElement("div");
  chefDiv.classList.add("chef-div");
  sectionChef.appendChild(chefDiv);

  // Image
  const chefImage = document.createElement("div");
  chefImage.classList.add("chef-img");
  chefDiv.appendChild(chefImage);
  const imageOfChef = document.createElement("img");
  imageOfChef.setAttribute("src", "chef3.jpg");
  imageOfChef.classList.add("chef");
  chefImage.appendChild(imageOfChef);

  // Description
  const chefDesc = document.createElement("div");
  chefDesc.classList.add("chef-desc");
  chefDiv.appendChild(chefDesc);
  const descOfChef = document.createElement("h3");
  chefDesc.appendChild(descOfChef);
  descOfChef.innerHTML = "We Are More Than Multiple Services";
  const chefText = document.createElement("p");
  chefText.classList.add("chef-txt");
  chefText.innerHTML =
    "This is the type of restaurant that serves foods and beverages, in additionto light refreshments such as baked goods or snacks. The term comes from the French word meaning food.";
  chefDesc.appendChild(chefText);

  // create options
  const chefOpt = document.createElement("div");
  chefOpt.classList.add("chef-opt");
  chefDesc.appendChild(chefOpt);

  //option 1
  const option1 = document.createElement("div");
  option1.classList.add("option");
  option1.classList.add("option1");
  chefOpt.appendChild(option1);
  const optionImg1 = document.createElement("img");
  optionImg1.setAttribute("src", "dishes.png");
  optionImg1.classList.add("opt-img");
  option1.appendChild(optionImg1);
  const optionTxt1 = document.createElement("p");
  optionTxt1.innerHTML = "Online Order";
  optionTxt1.classList.add("opt-txt");
  option1.appendChild(optionTxt1);

  //option 2
  const option2 = document.createElement("div");
  option2.classList.add("option");
  option2.classList.add("option2");
  chefOpt.appendChild(option2);
  const optionImg2 = document.createElement("img");
  optionImg2.setAttribute("src", "dishes.png");
  optionImg2.classList.add("opt-img");
  option2.appendChild(optionImg2);
  const optionTxt2 = document.createElement("p");
  optionTxt2.innerHTML = "Pre-Reservation";
  optionTxt2.classList.add("opt-txt");
  option2.appendChild(optionTxt2);

  //option 3
  const option3 = document.createElement("div");
  option3.classList.add("option");
  option3.classList.add("option3");
  chefOpt.appendChild(option3);
  const optionImg3 = document.createElement("img");
  optionImg3.setAttribute("src", "platter.png");
  optionImg3.classList.add("opt-img");
  option3.appendChild(optionImg3);
  const optionTxt3 = document.createElement("p");
  optionTxt3.innerHTML = "24/7 Service";
  optionTxt3.classList.add("opt-txt");
  option3.appendChild(optionTxt3);

  //option 4
  const option4 = document.createElement("div");
  option4.classList.add("option");
  option4.classList.add("option4");
  chefOpt.appendChild(option4);
  const optionImg4 = document.createElement("img");
  optionImg4.setAttribute("src", "snacks.png");
  optionImg4.classList.add("opt-img");
  option4.appendChild(optionImg4);
  const optionTxt4 = document.createElement("p");
  optionTxt4.innerHTML = "Organized Foodie Place";
  optionTxt4.classList.add("opt-txt");
  option4.appendChild(optionTxt4);

  //option 5
  const option5 = document.createElement("div");
  option5.classList.add("option");
  option5.classList.add("option5");
  chefOpt.appendChild(option5);
  const optionImg5 = document.createElement("img");
  optionImg5.setAttribute("src", "platter.png");
  optionImg5.classList.add("opt-img");
  option5.appendChild(optionImg5);
  const optionTxt5 = document.createElement("p");
  optionTxt5.innerHTML = "Clean Kitchen";
  optionTxt5.classList.add("opt-txt");
  option5.appendChild(optionTxt5);

  //option 6
  const option6 = document.createElement("div");
  option6.classList.add("option");
  option6.classList.add("option6");
  chefOpt.appendChild(option6);
  const optionImg6 = document.createElement("img");
  optionImg6.setAttribute("src", "snacks.png");
  optionImg6.classList.add("opt-img");
  option6.appendChild(optionImg6);
  const optionTxt6 = document.createElement("p");
  optionTxt6.innerHTML = "Master Chef";
  optionTxt6.classList.add("opt-txt");
  option6.appendChild(optionTxt6);

  const buttonChef = document.createElement("button");
  buttonChef.classList.add("btn-chef");
  buttonChef.innerHTML = "About";
  chefDesc.appendChild(buttonChef);
}

function createPlan() {
  // popular dishes section
  const sectionPlan = document.createElement("section");
  sectionPlan.classList.add("plan");
  content.appendChild(sectionPlan);

  const planDiv = document.createElement("div");
  planDiv.classList.add("plan-div");
  sectionPlan.appendChild(planDiv);

  // Description
  const planDesc = document.createElement("div");
  planDesc.classList.add("plan-desc");
  planDiv.appendChild(planDesc);
  const descOfPlan = document.createElement("h3");
  planDesc.appendChild(descOfPlan);
  descOfPlan.innerHTML = "Do You Have Any Dinner Plan? Reserve Your Table";
  const planText = document.createElement("p");
  planText.classList.add("plan-txt");
  planText.innerHTML =
    "This is the type of restaurant that serves foods and beverages, in additionto light refreshments such as baked goods or snacks. The term comes from the French word meaning food.";
  planDesc.appendChild(planText);

  // Image
  const planImg = document.createElement("div");
  planImg.classList.add("plan-img");
  planDiv.appendChild(planImg);
  const imageOfPlan = document.createElement("img");
  imageOfPlan.setAttribute("src", "chef1.jpg");
  imageOfPlan.classList.add("plan");
  planImg.appendChild(imageOfPlan);

  // Button
  const buttonPlan = document.createElement("button");
  buttonPlan.classList.add("btn-reservation");
  buttonPlan.innerHTML = "Make Reservation";
  planDesc.appendChild(buttonPlan);
}

function createReview() {
  // popular dishes section
  const sectionMenu = document.createElement("section");
  sectionMenu.classList.add("review");
  content.appendChild(sectionMenu);

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-div");
  menuDiv.classList.add("review");
  sectionMenu.appendChild(menuDiv);

  const titleButtons = document.createElement("div");
  titleButtons.classList.add("title-button-div");
  menuDiv.appendChild(titleButtons);

  // create menu title
  const menuTitle = document.createElement("h3");
  menuTitle.classList.add("menu-title");
  menuTitle.innerHTML = "What Does Our Costumer Say?";
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
  const pastaP = document.createElement("p");
  pastaP.innerHTML =
    "Pasta is a type of food typically made from unleavened dough Pasta is a type of food typically made from unleavened dough Pasta is a type of food typically made from unleavened dough";
  menuCard.appendChild(pastaP);
  const rating1 = document.createElement("img");
  rating1.classList.add("profile");
  rating1.setAttribute("src", "model1.jpg");
  menuCard.appendChild(rating1);
  const price = document.createElement("h4");
  price.classList.add("price");
  price.innerHTML = "John Doe";
  menuCard.appendChild(price);

  const menuCard2 = document.createElement("div");
  menuCard2.classList.add("card-div");
  menuCards.appendChild(menuCard2);
  const cardIcon2 = document.createElement("div");
  cardIcon2.classList.add("card-icon");
  menuCard2.appendChild(cardIcon2);
  const pastaP2 = document.createElement("p");
  pastaP2.innerHTML =
    "Pasta is a type of food typically made from unleavened dough Pasta is a type of food typically made from unleavened dough Pasta is a type of food typically made from unleavened dough";
  menuCard2.appendChild(pastaP2);
  const rating2 = document.createElement("img");
  rating2.classList.add("profile");
  rating2.setAttribute("src", "model2.jpg");
  menuCard2.appendChild(rating2);
  const price2 = document.createElement("h4");
  price2.classList.add("price");
  price2.innerHTML = "John Doey";
  menuCard2.appendChild(price2);

  const menuCard3 = document.createElement("div");
  menuCard3.classList.add("card-div");
  menuCards.appendChild(menuCard3);
  const cardIcon3 = document.createElement("div");
  cardIcon3.classList.add("card-icon");
  menuCard3.appendChild(cardIcon3);
  const pastaP3 = document.createElement("p");
  pastaP3.innerHTML =
    "Pasta is a type of food typically made from unleavened dough Pasta is a type of food typically made from unleavened dough Pasta is a type of food typically made from unleavened dough";
  menuCard3.appendChild(pastaP3);
  const rating3 = document.createElement("img");
  rating3.classList.add("profile");
  rating3.setAttribute("src", "model3.jpg");
  menuCard3.appendChild(rating3);
  const price3 = document.createElement("h4");
  price3.classList.add("price");
  price3.innerHTML = "John Doe";
  menuCard3.appendChild(price3);
}

function createChefList() {
  // popular dishes section
  const sectionMenu = document.createElement("section");
  sectionMenu.classList.add("chef-list");
  content.appendChild(sectionMenu);

  const chefsDiv = document.createElement("div");
  chefsDiv.classList.add("chefs-div");
  chefsDiv.classList.add("chefs");
  sectionMenu.appendChild(chefsDiv);

  const titleButtons = document.createElement("div");
  titleButtons.classList.add("title-button-div");
  chefsDiv.appendChild(titleButtons);

  // create menu title
  const menuTitle = document.createElement("h3");
  menuTitle.classList.add("menu-title");
  menuTitle.innerHTML = "Meat Our Chefs";
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
  chefsDiv.appendChild(menuCards);

  const menuCard = document.createElement("div");
  menuCard.classList.add("card-div");
  menuCards.appendChild(menuCard);
  const profile = document.createElement("img");
  profile.classList.add("profile");
  profile.setAttribute("src", "chef4.jpg");
  menuCard.appendChild(profile);
  const name = document.createElement("h4");
  name.classList.add("name");
  name.innerHTML = "John Doe";
  menuCard.appendChild(name);

  const menuCard2 = document.createElement("div");
  menuCard2.classList.add("card-div");
  menuCards.appendChild(menuCard2);
  const profile2 = document.createElement("img");
  profile2.classList.add("profile");
  profile2.setAttribute("src", "chef7.jpg");
  menuCard2.appendChild(profile2);
  const name2 = document.createElement("h4");
  name2.classList.add("name");
  name2.innerHTML = "Mary Jane";
  menuCard2.appendChild(name2);

  const menuCard3 = document.createElement("div");
  menuCard3.classList.add("card-div");
  menuCards.appendChild(menuCard3);
  const profile3 = document.createElement("img");
  profile3.classList.add("profile");
  profile3.setAttribute("src", "chef5.jpg");
  menuCard3.appendChild(profile3);
  const name3 = document.createElement("h4");
  name3.classList.add("name");
  name3.innerHTML = "Percival Rhys";
  menuCard3.appendChild(name3);

  const menuCard4 = document.createElement("div");
  menuCard4.classList.add("card-div");
  menuCards.appendChild(menuCard4);
  const profile4 = document.createElement("img");
  profile4.classList.add("profile");
  profile4.setAttribute("src", "chef6.jpg");
  menuCard4.appendChild(profile4);
  const name4 = document.createElement("h4");
  name4.classList.add("name");
  name4.innerHTML = "Joshua An";
  menuCard4.appendChild(name4);
}

export default loadHomepage;

//document.body.appendChild(component());
