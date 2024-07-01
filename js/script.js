const addBtn = document.getElementById('add-btn');

const addTask = () => {
  const taskTitle = document.getElementById('task-title').value;

  if (taskTitle) {
    const template = document.querySelector('.template');

    const newTask = template.cloneNode(true);

    newTask.querySelector('.task-title').textContent = taskTitle;

    newTask.classList.remove('template');
    newTask.classList.remove('hide');

    const list = document.getElementById('task-list');
    list.appendChild(newTask);
  }
}

addBtn.addEventListener('click', (event) => {
  event.preventDefault();

  addTask();

});