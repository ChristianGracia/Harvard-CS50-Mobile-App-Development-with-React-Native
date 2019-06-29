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

  // var formAdd = document.createElement("input")
  // var submitButton = document.createElement("input")
  // formAdd.setAttribute("type", "text")
  // formAdd.setAttribute("name", "todo item")
  // submitButton.setAttribute("type", "submit")
  // formAdd.appendChild(submitButton)
  // var grabElement = document.getElementsByClassNames('flow-right')
  // grabElement.parentNode.appendChild(formAdd)
  var button1 = document.getElementsByTagName('button')
  button1.setAttribute('type', 'submit')

}