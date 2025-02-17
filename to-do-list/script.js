const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("What Will You Do?");
        return;
    }
    const li = document.createElement("li");
    li.textContent = taskText;

    const editBtn = document.createElement("onclick");
    editBtn.textContent = "Edit";

    editBtn.addEventListener("click", function() {
        
    });
    li.appendChild(editBtn);
    li.addEventListener("click", function(event) {
        if (event.target !== editBtn) {
            li.classList.toggle("completed");
        }
    });
    
    const deleteBtn = document.createElement("onclick");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });
    li.appendChild(deleteBtn);
    li.addEventListener("click", function(event) {
        if (event.target !== deleteBtn) {
            li.classList.toggle("completed");
        }
    });
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });
    taskList.appendChild(li);

    taskInput.value = "";
}
function editTask(element){
    let newTask
}


