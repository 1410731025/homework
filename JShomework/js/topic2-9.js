document.onkeydown = keyfunc;

function keyfunc() {
    var a = event.keyCode;
    if (a == 27) {
        alert("Esc");
    } else if (a == 8) {
        alert("Backspace");
    } else if (a == 9) {
        alert("Tab");
    } else if (event.keyCode == 71) {
        document.location = "http://www.google.com";
    }
}