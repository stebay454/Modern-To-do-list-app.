const mainContainer = document.getElementById("main-container");
const formContainer = document.querySelector(".form-container");
const newTaskBtn = document.getElementById("new-btn");
const closeFormBtn = document.getElementById("close-btn");
const themeSelect = document.getElementById("theme");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");
const taskContainer = document.getElementById("task-container");

//theme swtch logic
themeSelect.addEventListener("change", ()=>{
  const themetaskArray = ["theme-light","theme-dark","theme-brighten"];
   themetaskArray.forEach((theme)=>{
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
// form close and open 
newTaskBtn.addEventListener("click", ()=> {
  formContainer.classList.remove("hidden");
});
closeFormBtn.addEventListener("click", ()=>{
  formContainer.classList.add("hidden");
  formContainer.reset();
});
//working on local storage and task container
function addTask(){
 taskContainer.removeAttribute("hidden");
 let taskObj = {
   id: Date.now(),
   title: titleInput.value,
   date: dateInput.value,
   description: descriptionInput.value,
   isCompleted: false
 };
 taskArray.push(taskObj);
 localStorage.setItem('task', JSON.stringify(taskArray));
}
function renderTask(){
  taskContainer.innerHTML = "";
  taskArray.forEach(({id, title, date, description, isCompleted}) =>{
  taskContainer.innerHTML += `<div id="${id}" class="task ${isCompleted ?'checked': ''}">
  <p>${title}</p>
  <p>${date}</p>
  <p>${description}</p>
  <button class="check-btn"><i class="fas fa-check"></i></button>
  <button class="trash-btn"><i class="fas fa-trash"></i></button>
 </div>`;
 });
}
let taskArray = [];
formContainer.addEventListener("submit", (e)=>{
 e.preventDefault();
 addTask();
 renderTask();
 formContainer.reset();
 formContainer.classList.add("hidden");
});
taskContainer.addEventListener("click", (e)=>{
  const trashBtn = e.target.closest(".trash-btn");
  const checkBtn = e.target.closest(".check-btn");
  if (!trashBtn && !checkBtn) return;
  const taskEl = e.target.closest(".task");
  
  if(trashBtn){
    taskArray = taskArray.filter((taskelement)=> taskelement.id !== Number(taskEl.id));
    localStorage.setItem('task', JSON.stringify(taskArray));
    renderTask();
  }
  else if(checkBtn){
    const taskIndex = taskArray.findIndex(taskelement => taskelement.id === Number(taskEl.id));
    taskArray[taskIndex].isCompleted = !taskArray[taskIndex].isCompleted;
    localStorage.setItem('task', JSON.stringify(taskArray));
    renderTask();
  }
});