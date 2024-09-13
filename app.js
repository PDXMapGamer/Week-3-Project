const resetButton = document.getElementById("reset-button");
const menuButton = document.getElementById("menu-button");
const displayCookieCount = document.getElementById("total-cookies");
const displayCPS = document.getElementById("cookies-per-second");
const cookie = document.getElementById("cookie");
const APIURL = "https://cookie-upgrade-api.vercel.app/api/upgrades";

let cookieStats = {
  cookieCount: 0,
  cookiePerSecond: 0,
};

//TODO SHOP UPGRADES
let shopUpgrades = [];

onStartUp(); // everything that needs to be done on start up of the page

function onStartUp() {
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

//TODO GET DATA FROM API
async function getShopItem() {
  //fetch the data
  //translate to JSON
  //PUSH items into shopUpgrade arrays
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
  } catch {}
}
