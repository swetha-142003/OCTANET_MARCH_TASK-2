function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.innerHTML = "<span>" + taskInput.value + "</span><button onclick='removeTask(this)'>Remove</button>";
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function removeTask(button) {
    var li = button.parentNode;
    var taskList = li.parentNode;
    taskList.removeChild(li);
}
