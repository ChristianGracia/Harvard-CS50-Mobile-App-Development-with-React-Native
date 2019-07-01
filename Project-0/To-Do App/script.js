const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

//init trackers
var itemCount = 0;
var uncheckedCount = 0;
var buttonCounter = 0;


//title
document.getElementsByTagName("H1")[0].innerHTML = "The World's Friendliest To-Do List";

function newTodo(item) {


//create div
const divContainer = document.createElement('div');


//add input button
const buttonInput = document.createElement('input');
buttonInput.setAttribute("type", "text");
buttonInput.setAttribute("id", "id" + itemCount);
buttonInput.setAttribute("placeholder", "to-do item");

//add submit button
const submitButton = document.createElement('input');
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("onclick", "submitItem()");
submitButton.setAttribute("name", itemCount);

//add buttons to html
listItems = document.getElementById("todo-list");

//add buttons to container
divContainer.appendChild(buttonInput);
divContainer.appendChild(submitButton);
// divContainer.appendChild(checkBoxes);

//add buttons to html
listItems = document.getElementById("todo-list");
listItems.appendChild(divContainer)

//update todo list item count
itemCount++;
console.log("item count: " + itemCount);
document.getElementById('item-count').textContent = itemCount;

//update todo list unchecked item count
uncheckedCount++;
console.log("unchecked: " + uncheckedCount);
document.getElementById('unchecked-count').textContent = uncheckedCount;
}

function submitItem(e) {

//click event set up
var targ;
if (!e) var e = window.event;
if (e.target) targ = e.target;
else if (e.srcElement) targ = e.srcElement;

var idCompare = "id" + e.target.name;
var item = document.getElementById(idCompare).value;

  //create li element
  newItem = document.createElement("li");
  newItem.setAttribute("class", "todo-text");

  //add list item to li element
  newItem.innerText = item;
  listItems.appendChild(newItem);

  console.log(item);

  //add checkbox button
  const checkBoxes = document.createElement('input');
  checkBoxes.setAttribute("type", "checkbox");
  checkBoxes.setAttribute("class", "todo-checkbox check");
  checkBoxes.setAttribute("onclick", "checkBoxFunction()");
  checkBoxes.setAttribute("id", "check" + buttonCounter);
  checkBoxes.setAttribute("value", "1");
  listItems.appendChild(checkBoxes)
  buttonCounter++;

  document.getElementById(idCompare).style.display = "none"
  e.target.style.display = "none"
}

function checkBoxFunction(e) {

  //click event set up
  var targ;
  if (!e) var e = window.event;
  if (e.target) targ = e.target;
  else if (e.srcElement) targ = e.srcElement;

  //change unchecked to-do item count when button is clicked
  if (e.target.value == 1)
  {
    uncheckedCount--;
    document.getElementById('unchecked-count').textContent = uncheckedCount;
    e.target.value = 0;
  }
  else
  {
    uncheckedCount++;
    document.getElementById('unchecked-count').textContent = uncheckedCount;
    e.target.value = 1;
  }
}
