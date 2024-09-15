const resetButton = document.getElementById("reset-button");
const menuButton = document.getElementById("menu-button");
const displayCookieCount = document.getElementById("total-cookies");
const displayCPS = document.getElementById("cookies-per-second");
const cookie = document.getElementById("cookie");
const shopSection = document.getElementById("shop-section");

let cookieStats = {
  cookieCount: 500000,
  cookiePerSecond: 0,
};

//TODO SHOP UPGRADES
let shopUpgrades = [];

onStartUp(); // everything that needs to be done on start up of the page

function onStartUp() {
  generateShop();
  loadFromLocalStorate();
  updateCookies();
  updateCPS();
  initialiseTimer();
}

function updateCookies() {
  displayCookieCount.textContent = `Total Cookies: ${cookieStats.cookieCount}`;
  saveToLocalStorage();
}
function updateCPS() {
  displayCPS.textContent = `Cookies per Second: ${cookieStats.cookiePerSecond}`;
  saveToLocalStorage();
}

async function generateShop() {
  try {
    const fetchedData = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
    const parsedData = await fetchedData.json();
    shopSection.style.gridTemplateRows = `repeat(${parsedData.length + 1}, 1fr)`;
    generateShopHeaders();
    generateShopItems(parsedData);
  } catch {
    const errorMsg = document.createElement("p");
    errorMsg.textContent = "Due to an error fetching data from the API the shop is not available";
    errorMsg.classList.add("error");
    shopSection.append(errorMsg);
  }
}

function createGridItem() {
  const gridItem = document.createElement("p");
  gridItem.classList.add("grid-item");
  return gridItem;
}

function generateShopHeaders() {
  let name = createGridItem();
  let cost = createGridItem();
  let cpsIncrease = createGridItem();
  let buyButton = createGridItem();
  name.textContent = "Name:";
  shopSection.append(name);
  cpsIncrease.textContent = "Cost:";
  shopSection.append(cpsIncrease);
  cost.textContent = "CPS Increase:";
  shopSection.append(cost);
  buyButton.textContent = "Buy button:";
  shopSection.append(buyButton);
}
function generateShopItems(parsedData) {
  parsedData.forEach((element) => {
    // shopUpgrades.push(element); //parsed data is local in scope so passing it onto the global scope in case I need to access it later
    Object.entries(element).forEach((objElement) => {
      //object.entries basically treats the each object in the array that was parsed from the API as an array, letting me forEach it.
      //each loop in this forEach spits out 4 arrays per object, each of them is a key: value pair of all the properties.
      if (objElement[0] != "id") {
        //We do not need to append the ID of the upgrade to the user so we skip it
        const appendee = createGridItem();
        appendee.textContent = objElement[1];
        shopSection.append(appendee);
      }
    });
    generateBuyButton(element);
  });
}

function generateBuyButton(element) {
  const buyButton = document.createElement("button");
  buyButton.classList.add("buy-button");
  buyButton.textContent = "Buy";
  buyButton.addEventListener("click", function () {
    //TODO: Add functionality to the buttons to allow user to buy upgrades.
    if (cookieStats.cookieCount >= element.cost) {
      cookieStats.cookieCount -= element.cost;
      cookieStats.cookiePerSecond += element.increase;
      updateCookies();
      updateCPS();
    } else {
      console.log("Not enough cookies to buy");
    }
  });
  shopSection.append(buyButton);
}

//TODO event listener for all buttons
cookie.addEventListener("click", function () {
  cookieStats.cookieCount++;
  updateCookies();
});
menuButton.addEventListener("click", function () {
  console.log("Menu button has been clicked");
  //TODO STREACH GOAL: Add functionality to this menu option
});
resetButton.addEventListener("click", function () {
  cookieStats.cookieCount = 0;
  updateCookies();
  cookieStats.cookiePerSecond = 0;
  updateCPS();
});

function initialiseTimer() {
  setInterval(() => {
    cookieStats.cookieCount += cookieStats.cookiePerSecond;
    updateCookies();
  }, 1000);
}

function saveToLocalStorage() {
  const toBeStoredData = JSON.stringify(cookieStats);
  localStorage.setItem("cookieStats", toBeStoredData);
}

function loadFromLocalStorate() {
  try {
    const parsedData = JSON.parse(localStorage.getItem("cookieStats"));
    cookieStats.cookieCount = parsedData.cookieCount;
    cookieStats.cookiePerSecond = parsedData.cookiePerSecond;
  } catch {
    // no code needed here
  }
}
