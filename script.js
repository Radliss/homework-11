const taskInput = document.getElementById('taskInput');
const button = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
function createTask() {
    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;
    taskList.append(newTask);
    taskInput.value = '';
}
function checkTask(event) {
    const clickedTask = event.target;
    clickedTask.classList.toggle('done');
};
button.addEventListener('click', createTask);
taskList.addEventListener('click', checkTask);
