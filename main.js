let tasksEl = document.getElementById('tasks');

let tasks = []

for (let task of tasks) {

    let taskHTML = `
        <div class="card" id="card-1">
            <div class="card-body">
                <h4 class="card-title">${task.name}</h4>
                <p class="card-text"><strong>${task.description}</strong></p>
            </div>
        </div>
    `
    tasksEl.innerHTML += taskHTML
    console.log(tasksEl.innerHTML)
}

let formEl = document.getElementById('taskForm');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    let nameInput = document.getElementById('taskName');
    let descriptionInput = document.getElementById('taskDescription');
    console.log(nameInput.value)
    console.log(descriptionInput.value)

    if (nameInput.value !== '' && descriptionInput.value !== '') {
        let taskHTML = `
            <div class="card" id="card-1">
                <div class="card-body">
                    <h4 class="card-title">${nameInput.value}</h4>
                    <p class="card-text"><strong>${descriptionInput.value}</strong></p>
                </div>
            </div>
        `
        tasksEl.innerHTML += taskHTML

        nameInput.value = ''
        descriptionInput.value = ''
    }
})

let clearButton = document.getElementById('clearButton');

clearButton.addEventListener('click', (event) => {
    console.log('Button clicked')
    tasksEl.innerHTML = ''
})