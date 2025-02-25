document.addEventListener("DOMContentLoaded", function () {
    let taskInput = document.getElementById("taskInput");
    let addTaskButton = document.getElementById("addTask");
    let taskList = document.getElementById("taskList");

    function addTask() {
        let taskText = taskInput.value.trim();
        if (taskText === "") 
        return;
    
        let li = document.createElement("li");
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <span>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </span>
        `;

        taskList.appendChild(li);
        taskInput.value = "";

        attachDeleteEvent(li);
    }

    function attachDeleteEvent(taskItem) {
        let deleteButton = taskItem.querySelector(".delete");
        deleteButton.addEventListener("click", function () {
            taskItem.remove();
        });
    }

    addTaskButton.addEventListener("click", addTask);

});
