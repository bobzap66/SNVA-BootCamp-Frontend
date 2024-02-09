var taskList = document.getElementsByTagName("LI");
var i;
for( i = 0; i < taskList.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    taskList[i].appendChild(span);
}




var close = document.getElementsByClassName("close");
var i; 
for(i = 0; i < close.length; i++){
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("newTask").value;
    console.log("inputValue = " + inputValue)
    var t = document.createTextNode(inputValue);
    console.log("t = " + t)
    li.appendChild(t);
    if(inputValue === '') {
        alert("Task cannot be blank");
    } else {
        document.getElementById("taskList").appendChild(li);
    }
    document.getElementById("newTask").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for(i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

var input = document.getElementById("newTask");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("addBtn").click();
  }
});