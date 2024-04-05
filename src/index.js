document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // 1 grab the form element 
  // use an anonymous arrow function and add an event listener
  let form = document.querySelector("#create-task-form");//use the id unique to form
  form.addEventListener('submit', (e) => {// add the submit event 
    e.preventDefault()// prevent the default behavior for resetting the page
    createToDo(e.target.create-task-form.value)//target where we get the value by the id create-task-form
    form.reset()// resets after the code runs 
  })
});
  //create a DOM element p (Paragraph)
  /*function createToDo(todo) {
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'X'
    p.textContent = `${todo}`
    p.appendChild(btn)
    document.querySelector('#new-task-description').appendChild(p)
  }
  function handleDelete(e) {
    e.target.parentNode.remove()
  }
*/
