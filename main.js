const mainContainer = document.getElementById("main-container");
const headerEl = document.querySelector("h1");
const btnEl = document.querySelectorAll(".btn");
const themeSelect = document.getElementById("theme");

themeSelect.addEventListener("change", ()=>{
  mainContainer.classList.remove("theme-light");
  mainContainer.classList.remove("theme-dark");
  mainContainer.classList.remove("theme-brighten");
  if(themeSelect.value === "light"){
   mainContainer.classList.add('theme-light');
  }
  else if(themeSelect.value === "dark"){
    mainContainer.classList.add("theme-dark");
  }
  else if(themeSelect.value === "brighten"){
    mainContainer.classList.add("theme-brighten");
  }
});