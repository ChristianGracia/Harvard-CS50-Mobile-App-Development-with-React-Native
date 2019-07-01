const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
};

//init trackers
var itemCount = 0;
var uncheckedCount = 0;
var buttonCounter = 0;
var deleteCounter = 1;
var errCheck = 0;


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
  buttonInput.setAttribute("class", "input-text");

  //add submit button
  const submitButton = document.createElement('input');
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("onclick", "submitItem()");
  submitButton.setAttribute("name", itemCount);
  submitButton.setAttribute("class", "input-submit");

  //add buttons to html
  listItems = document.getElementById("todo-list");

  //add buttons to container
  divContainer.appendChild(buttonInput);
  divContainer.appendChild(submitButton);

  //add buttons to html
  listItems = document.getElementById("todo-list");
  listItems.appendChild(divContainer);

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
  console.log(e.target.name);

  if (item != "") {

    //create li element
    newItem = document.createElement("li");
    newItem.setAttribute("class", "todo-text");
    newItem.setAttribute("id", "li" + deleteCounter);

    //add list item to li element
    newItem.innerText = item;
    listItems.appendChild(newItem);

    console.log(item);

    //create div
    const ghostdiv1 = document.createElement("div");
    ghostdiv1.setAttribute("class", "check-del-box");

    //add checkbox button
    const checkBoxes = document.createElement('input');
    checkBoxes.setAttribute("type", "checkbox");
    checkBoxes.setAttribute("class", "todo-checkbox check");
    checkBoxes.setAttribute("onclick", "checkBoxFunction()");
    checkBoxes.setAttribute("id", "check" + deleteCounter);
    checkBoxes.setAttribute("value", "1");
    ghostdiv1.appendChild(checkBoxes);
    buttonCounter++;


    document.getElementById(idCompare).style.display = "none";
    var inputRemover = document.getElementById(idCompare);

    e.target.style.display = "none";

    //add delete button
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("onclick", "deleteButton()");
    deleteButton.setAttribute("class", "delete-button");
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("value", "button");
    deleteButton.innerText = "Delete";
    deleteButton.setAttribute("id", "delete-button" + deleteCounter);
    deleteCounter++;

    ghostdiv1.appendChild(deleteButton);
    listItems.appendChild(ghostdiv1);

    //remove error message if up because of use failing to put in buttonInput
    if (document.getElementById("err-msg") != undefined)
    {
        document.getElementById("err-msg").innerText = "";
    }

    }

    //error 1
    else if (errCheck == 0) {
    var createH2 = document.createElement("H2");
    createH2.innerText = "Please enter a task!";
    createH2.setAttribute("id", "err-msg");
    var getList = document.getElementById('todo-list');
    getList.append(createH2);
    errCheck++;



  }

    //error 2
    else if (errCheck == 1){
      alert('Please enter your to-do item.');
      errCheck++;
    }
    return 0;
}

function checkBoxFunction(e) {

  //click event set up
  var targ;
  if (!e) var e = window.event;
  if (e.target) targ = e.target;
  else if (e.srcElement) targ = e.srcElement;

  //change unchecked to-do item count when button is clicked
  if (e.target.value == 1) {
    uncheckedCount--;
    document.getElementById('unchecked-count').textContent = uncheckedCount;
    e.target.value = 0;
  }
  else {
    uncheckedCount++;
    document.getElementById('unchecked-count').textContent = uncheckedCount;
    e.target.value = 1;
  }
}

function deleteButton(e) {

  //click event set up
  var targ;
  if (!e) var e = window.event;
  if (e.target) targ = e.target;
  else if (e.srcElement) targ = e.srcElement;

  //get button id
  var idNumber = (e.target.id);

  //hide button element
  document.getElementById(e.target.id).style.display = "none";

  //hide li element
  if (document.getElementById("li" + idNumber[13])) {
    document.getElementById("li" + idNumber[13]).style.display = "none";
  }

  //hide checkbox element
  document.getElementById("check" + idNumber[13]).style.display = "none";

  //decrease item counter
  itemCount--
  document.getElementById('item-count').textContent = itemCount;

  //unchecked boxes check
  if (document.getElementById('check'+ idNumber[13]).value == 1){
    uncheckedCount--;
    document.getElementById('unchecked-count').textContent = uncheckedCount;
  }

  //reload
  if (itemCount == 0) {
    window.location.reload(false);
  }
}
