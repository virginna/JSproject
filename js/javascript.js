// adding new task

function newElement() {
    let taskName;
    taskName = document.getElementById("newTask").value;
    if (taskName == '') {
        alert("Task is empty");
        return;
    }
    let ul1 = document.getElementById("myUl");
    let newEl = document.createElement("li");
    newEl.innerHTML = '<div class="toDo">' +
        '<div class="date">'+formatDate()+'</div>' +
        '<div class="task"><p>'+taskName+'</p></div>' +
        '<div class="buttons">' +
        '<div class="confirmButton"><a href="#" onclick="return markDone(this)"><i class="fas fa-check"></i></a></div>' +
        '<div class="deleteButton"><a href="#" onclick="return deleteTask(this)"><i class="fas fa-trash-alt"></i></a></div>' +
        '</div>' +
        '</div>';
    ul1.appendChild(newEl);
    return false;
}


 // deleting task

function deleteTask(el) {
    if (confirm('Delete task?')) {
        let li = el.parentNode.parentNode.parentNode.parentNode;
        li.parentNode.removeChild(li);
    } else alert("task has not been deleted");
}


// marking as done
function markDone(el) {

    let elClass = el.parentNode.className;
    if (elClass.indexOf('confirmButton-done') < 0) {
        el.parentNode.className = elClass + ' confirmButton-done';
        // elClass+=' confirmButton-done';
        alert('Task done!');
    }
}

//date

function formatDate(dt) {
    let d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
        hour = d.getHours(),
        min = d.getMinutes();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if (hour.length < 2) hour = '0' + hour;
    if (min.length < 2) min = '0' + min;
    return day + '-' + month + '-' + year + ' ' + hour + ':' + min;
}
