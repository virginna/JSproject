function newElement() {
    let ch1;
    ch1 = document.getElementById("newTask");
    if (ch1) {
        alert ("added");
    } else {
        alert ("not choosed");
    }
}


// let delBtn, delTask;
// delBtn = document.getElementsByClassName("deleteButton");
// delTask = document.getElementsByClassName("myUl");
//
// for (let i = 0; i < delBtn.length; i++) {
//     delBtn[i].onclick = function () {
//         let div = this.delTask;
//         div.style.display = "none";
//     }
// }

let close = document.getElementsByClassName("deleteButton");
let i;
let deleteString = document.getElementsByClassName("toDo");
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        if (confirm('Delete task?')) {
           let div = this.parentElement;
               //deleteString[i]; this.parentElement;
            div.style.display = "none";
        }else (alert("task has not been deleted"));

    }
}
//
//documentElement.children[1].firstChild.lastChild;