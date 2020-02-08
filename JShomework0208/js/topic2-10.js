document.onkeydown = keyfunc;

function keyfunc() {
    if ((event.shiftKey) && (event.keyCode != 16))
        alert("Shift + " + String.fromCharCode(event.keyCode));
    if ((event.ctrlKey) && (event.keyCode != 17))
        alert("Ctrl + " + String.fromCharCode(event.keyCode));
    if ((event.altKey) && (event.keyCode != 18))
        alert("Alt + " + String.fromCharCode(event.keyCode));
}