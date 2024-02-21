
function addbutton_func(){
    let tasksdiv=document.getElementById('tasksdiv');
    let task_min_div=document.createElement('div');
    task_min_div.setAttribute("id", "tasksDivId");
    let inputvalue=document.getElementById('inputvalue').value.trim();
    if (inputvalue !== '') { 
        task_min_div.classList.add("task-item"); 
        task_min_div.innerHTML = `
            <p>${inputvalue}</p>
            <button class="delete-button">Delete</button>
        `;
        tasksdiv.appendChild(task_min_div);
        document.getElementById("inputvalue").value = "";
        attachDeleteHandler(); 
    } else {
        alert("Please enter a task."); 
    }
}

function attachDeleteHandler() {
    let deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.task-item').remove(); 
        });
    });
}

const addbutton=document.getElementById('addbutton');
addbutton.addEventListener('click', addbutton_func);