document.addEventListener("DOMContentLoaded",() => {
const form = document.querySelector("form");
form.addEventListener("submit",(e) => {
    e.preventDefault();
    const tasks = document.getElementById("create-task-form").value();
    let listContainer = document.getElementById("list");
    form.onsubmit = (e) =>{
        e.preventDefault();
        let newTask = document.getElementById("new-task-descption").value;
        let colors = document.getElementById("colors").value;
        listContainer.appendChild(listFunction(newTask,colors));
        form.reset()
    }
    
})
function addToDoList(task,color){
    let lists = document.createElement("li");
    lists.textContent = task;
    lists.style.color = color;
    edit.textContent = () => "edit";
    edit.onclick = () => {
        let addedContent = prompt("Edit item", task);
        if (addedContent !== "")
        lists.textContent = addedContent;
    lists.appendChild(del)
    lists.appendChild(edit)
}
lists.appendChild(edit);
    let handleDelete = document.createElement("button");
    handleDelete.textContent = "x";
    handleDelete.onclick = () => {
        lists.remove();
    }
    lists.appendChild(handleDelete)
    return lists;
}

})
