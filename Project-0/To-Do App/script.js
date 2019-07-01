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
var deleteCounter = 1;


//title
document.getElementsByTagName("H1")[0].innerHTML = "The World's Friendliest To-Do List";

function newTodo(item) {


//create div
const divContainer = document.createElement('div');
divContainer.setAttribute("class", "ghostDiv");


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

if(item != ""){

  //create li element
  newItem = document.createElement("li");
  newItem.setAttribute("class", "todo-text");
  newItem.setAttribute("id", "li"+ deleteCounter);

  //add list item to li element
  newItem.innerText = item;
  listItems.appendChild(newItem);

  console.log(item);

  //add checkbox button
  const checkBoxes = document.createElement('input');
  checkBoxes.setAttribute("type", "checkbox");
  checkBoxes.setAttribute("class", "todo-checkbox check");
  checkBoxes.setAttribute("onclick", "checkBoxFunction()");
  checkBoxes.setAttribute("id", "check" + deleteCounter);
  checkBoxes.setAttribute("value", "1");
  listItems.appendChild(checkBoxes)
  buttonCounter++;

  document.getElementById(idCompare).style.display = "none"
  e.target.style.display = "none"




  //add delete button
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("onclick", "deleteButton()")
  deleteButton.setAttribute("class", "delete-button")
  deleteButton.setAttribute("type", "button")
  deleteButton.setAttribute("value", "button")
  deleteButton.innerText = "Delete"



  deleteButton.setAttribute("id", "delete-button" + deleteCounter)
  deleteCounter++


  listItems.appendChild(deleteButton)
  }
  else alert("You didn't Enter Anything!")
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

function deleteButton(e){

  //click event set up
  var targ;
  if (!e) var e = window.event;
  if (e.target) targ = e.target;
  else if (e.srcElement) targ = e.srcElement;

  var idNumber = (e.target.id)

  document.getElementById(e.target.id).style.display = "none"

  if (document.getElementById("li" + idNumber[13]))
  {
   document.getElementById("li" + idNumber[13]).style.display = "none"
  }
   document.getElementById("check" + idNumber[13]).style.display = "none"

   itemCount--

   document.getElementById('item-count').textContent = itemCount;
   document.getElementById('unchecked-count').textContent = uncheckedCount;
}