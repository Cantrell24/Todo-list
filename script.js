const inputValue = document.getElementById("task-input")

const clearButton = document.getElementById("clear");

const listContainer = document.getElementById("list-container")




function addTask() {
  if(inputValue.value === "")
  {
    alert("Create a task");
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputValue.value;
    listContainer.appendChild(li);
    inputValue.value = '';
    let span = document.createElement('span')
    span.innerHTML = "\u00d7"
    li.appendChild(span);
    
  }
};

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
      e.target.classList.toggle('checked')
  } else if (e.target.tagName === "SPAN"){
      e.target.parentElement.remove()
  }
}, false );

inputValue.addEventListener("keypress", function(event) {
  if(inputValue.value === "" && event.key ==="Enter")
  {
    alert("Create a task");

  } else if (event.key === "Enter") {
    let li = document.createElement('li');
    li.innerHTML = inputValue.value;
    listContainer.appendChild(li);
    inputValue.value = '';
    let span = document.createElement('span')
    span.innerHTML = "\u00d7"
    li.appendChild(span);
  }
});



 
clearButton.addEventListener("click", ()=>{
  inputValue.value=""
});










