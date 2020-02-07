document.onkeydown = keyfunc;

function keyfunc() {
    if ((event.shiftKey) && (event.keyCode != 16))
        alert("Shift + " + event.keyCode);
    if ((event.ctrlKey) && (event.keyCode != 17))
        alert("Ctrl + " + event.keyCode);
    if ((event.altKey) && (event.keyCode != 18))
        alert("Alt + " + event.keyCode);
}