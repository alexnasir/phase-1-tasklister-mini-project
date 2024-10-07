document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")
  const ul = document.getElementById("tasks")

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskInput = document.getElementById("new-task-description")
    const colorSelector = document.getElementById('select_colors')
    const task = taskInput.value
    const color = colorSelector.value

    const li = document.createElement("li")

    const span = document.createElement("span")
    span.innerText = task
    li.appendChild(span)

    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'X'
    li.appendChild(deleteButton)

    const editButton = document.createElement('button')
    editButton.innerText = 'Edit'
    li.appendChild(editButton)


    ul.appendChild(li)

    taskInput.value = ''

    deleteButton.addEventListener('click', () => {
      ul.removeChild(li)
    })

    editButton.addEventListener('click', () => {
     const editedText = prompt('Edit', span.textContent)
     if (editedText) {
      span.textContent = editedText
     }
    })



    
    
  })
});
