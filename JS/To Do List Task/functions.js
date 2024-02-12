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

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("task");
  // if(c == "all") c="";
  if(c == 'checked'){
   for(i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if(x[i].className.indexOf(c) > -1) addClass(x[i], "show");
   }
  }
  if(c == "unchecked") {
    for(i = 0; i < x.length; i++) {
      removeClass(x[i], "show");
      if(!x[i].classList.contains('checked')) addClass(x[i], "show");
    }
  }
  if(c == "all") {
    for(i = 0; i < x.length; i++) {
      addClass(x[i], "show");
    }
}
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


function newElement() {
    var li = document.createElement("li");
    li.classList.add("task");
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
    filterSelection('all');
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