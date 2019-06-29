const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

window.onload = formButton()

function formButton() {

  var labelAdd = document.createElement("label")
  labelAdd.setAttribute("class", "label")
  document.getElementsByClassName("label").textContent ="Todo:"

  var inputAdd = document.createElement("input")
  inputAdd.setAttribute("type", "text")
  inputAdd.setAttribute("id", "item")
  inputAdd.setAttribute("name", "item")

  document.getElementsByClassName("container")[0].appendChild(labelAdd)
  document.getElementsByClassName("container")[0].appendChild(inputAdd)

}