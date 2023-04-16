document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    runToDo(e.target['new-task-description'].value)
    form.reset()
    })
  let formHigh = document.querySelector('#create-task-form-2')
  formHigh.addEventListener('submit', (e) => {
    e.preventDefault()
    runToDoHigh(e.target['new-task-description-2'].value)
    formHigh.reset()
  })
  })

  function runToDo(todo) {
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDeleteBtn)
    btn.textContent = ' delete '
    p.textContent = `${todo} >>>>>>>>>>> `
    p.appendChild(btn)
    document.querySelector('#list').appendChild(p)
  }

  function runToDoHigh(todo) {
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDeleteBtn)
    btn.textContent = ' delete '
    p.textContent = `${todo} >>>>>>>>>>> `
    p.appendChild(btn)

    document.querySelector('#highPriorityList').appendChild(p)
  }
//deletes tasks
  function handleDeleteBtn(e) {
    e.target.parentNode.remove()
  }
  