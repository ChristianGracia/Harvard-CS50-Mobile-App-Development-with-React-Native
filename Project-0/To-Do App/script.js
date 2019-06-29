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

  var formAdd = document.createElement("form")
  var inputAdd = document.createElement("input")
  formAdd.appendChild(inputAdd)

  formAdd.setAttribute("type", "submit")
  // submitButton.setAttribute("type", "submit")
  // formAdd.appendChild(submitButton)
  // grabElement.parentNode.appendChild(formAdd)
  document.getElementsByClassName("container")[0].appendChild(formAdd)

}
