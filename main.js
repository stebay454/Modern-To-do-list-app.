const mainContainer = document.getElementById("main-container");
const formContainer = document.querySelector(".form-container");
const newTaskBtn = document.getElementById("new-btn");
const closeFormBtn = document.getElementById("close-btn");
const themeSelect = document.getElementById("theme");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

themeSelect.addEventListener("change", ()=>{
  const themeArray = ["theme-light","theme-dark","theme-brighten"];
   themeArray.forEach((theme)=>{
    mainContainer.classList.remove(theme);
   });
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

newTaskBtn.addEventListener("click", ()=> {
  formContainer.classList.remove("hidden");
});
closeFormBtn.addEventListener("click", ()=>{
  formContainer.classList.add("hidden");
  formContainer.reset();
});