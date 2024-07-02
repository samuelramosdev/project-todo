const addBtn = document.getElementById('add-btn');

const addTask = () => {
  const taskTitle = document.getElementById('task-title').value;

  if (taskTitle) {
    // clona template
    const template = document.querySelector('.template');

    const newTask = template.cloneNode(true);

    // adiciona título
    newTask.querySelector('.task-title').textContent = taskTitle;

    // remove as classes desnecessárias
    newTask.classList.remove('template');
    newTask.classList.remove('hide');

    // adiciona tarefa na lista
    const list = document.getElementById('task-list');
    list.appendChild(newTask);

    // adiciona evento de remover
    const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', () => {
      removeTask(this);
    })

    // limpa texto
    document.querySelector('#task-title').value = '';
  }
}

const removeTask = (task) => {
  task.parentNode(task);
}

addBtn.addEventListener('click', (event) => {
  event.preventDefault();

  addTask();

});