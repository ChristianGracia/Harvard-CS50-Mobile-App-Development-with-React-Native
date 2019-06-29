const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

var itemCount = 0

window.onload = formButton()

function formButton() {

  var inputAdd = document.createElement("input")
  inputAdd.setAttribute("type", "text")
  inputAdd.setAttribute("id", "item")
  inputAdd.setAttribute("placeholder", "to-do item")
  inputAdd.setAttribute("name", "item")
  document.getElementsByClassName("container")[0].appendChild(inputAdd)


}

function newTodo(item) {

  var item = document.getElementById("item").value
  document.getElementById("item").value = ""
  listItems = document.getElementById("todo-list")
  newItem = document.createElement("li")
  newItem.setAttribute("class", "todo-text")
  newItem.innerText = item
  listItems.appendChild(newItem)
  console.log(item)

  //update todo list item count

  itemCount++
  console.log("item count: " + itemCount)
  document.getElementById('item-count').textContent = itemCount
}
