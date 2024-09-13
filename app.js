const resetButton = document.getElementById("reset-button");
const menuButton = document.getElementById("menu-button");
const displayCookieCount = document.getElementById("total-cookies");
const displayCPS = document.getElementById("cookies-per-second");
const cookie = document.getElementById("cookie");

let cookieStats = {
  cookieCount: 0,
  cookiePerSecond: 0,
};

//TODO SHOP UPGRADES
let shopUpgrades = [];

onStartUp(); // everything that needs to be done on start up of the page

function onStartUp() {
  updateCookies();
  updateCPS();
  initialiseTimer();
}

function updateCookies() {
  displayCookieCount.textContent = `Total Cookies: ${cookieStats.cookieCount}`;
}
function updateCPS() {
  displayCPS.textContent = `Cookies per Second: ${cookieStats.cookiePerSecond}`;
}

//TODO GET DATA FROM API
async function getShopItem() {
  //fetch the data
  //translate to JSON
  //PUSH items into shopUpgrade arrays
}

//TODO event listener for all buttons
cookie.addEventListener("click", function () {
  cookieStats.cookieCount += 1;
  updateCookies();
  //TODO Local storage shenanigans
});
menuButton.addEventListener("click", function () {
  console.log("Menu button has been clicked");
  //TODO STREACH GOAL: Add functionality to this menu option
});
resetButton.addEventListener("click", function () {
  //TODO Add functionality to the reset button
});

//TODO timer to add CPS every second.
function initialiseTimer() {
  setInterval(() => {
    cookieStats.cookieCount += cookieStats.cookiePerSecond;
    updateCookies();
  }, 1000);
}

//TODO Store values of cookie count and all upgrades in local storage
