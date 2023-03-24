const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

function addTask() {
  const taskText = newTaskInput.value;
  if (taskText.trim() === '') {
    return;
  }
  const li = document.createElement('li');
  li.innerHTML = `
    <span class="task">${taskText}</span>
    <button class="delete">Eliminar</button>
  `;
  taskList.appendChild(li);
  newTaskInput.value = '';
}

function deleteTask(event) {
  const li = event.target.parentNode;
  taskList.removeChild(li);
}

addTaskButton.addEventListener('click', addTask);

taskList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete')) {
    deleteTask(event);
  }
});
