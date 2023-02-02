window.addEventListener("load", () => {
    const form = document.getElementById("new-task-form");
    const input = document.getElementById("input-task");
    const listEl = document.getElementById("tasks");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const taskText = input.value;

        if (!taskText) {
            alert("please fill out the task");
            return;
        }

        const newTask = document.createElement("div");
        newTask.classList.add("task");
        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.setAttribute("id", "task-edit");
        newInput.value = taskText;
        newInput.setAttribute("readonly", "readonly");

        const newDoneBtn = document.createElement("button");
        const newDeleteBtn = document.createElement("button");
        newDoneBtn.classList.add("task-btn");
        newDeleteBtn.classList.add("task-btn");
        newDoneBtn.setAttribute("id", "done-btn");
        newDoneBtn.innerText = "Done";
        newDeleteBtn.setAttribute("id", "delete-btn");
        newDeleteBtn.innerText = "Delete";

        newTask.appendChild(newInput);
        newTask.appendChild(newDoneBtn);
        newTask.appendChild(newDeleteBtn);
        listEl.appendChild(newTask);
        input.value = '';

        newDoneBtn.addEventListener("click", () => {
            const parentOfBtn = newDoneBtn.parentElement;
            const check = parentOfBtn.firstChild;
            if (newDoneBtn.innerText.toLowerCase() == "done") {
                check.setAttribute("id", "task-after");
                newDoneBtn.innerText = "Undo";
            }
            else {
                check.setAttribute("id", "task-edit");
                newDoneBtn.innerText = "Done";
            }
        });

        newDeleteBtn.addEventListener("click", () => {
            listEl.removeChild(newTask);
        })
    })
})