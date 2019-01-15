function newElement() {
    let ch1;
    ch1 = document.getElementById("newTask");
    if (ch1) {
        alert ("added");
    } else {
        alert ("not choosed");
    }
}


let delBtn, delTask;
delBtn = document.getElementsByClassName("deleteButton");
delTask = document.getElementsByClassName("myUl");

for (let i = 0; i < delBtn.length; i++) {
    delBtn[i].onclick = function () {
        let div = this.delTask;
        div.style.display = "none";
    }
}
