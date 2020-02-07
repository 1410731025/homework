function con() {
    var n = Number(document.getElementById("input").value);
    document.getElementById("ans1").innerHTML = n.toString(2);
    document.getElementById("ans2").innerHTML = n.toString(8);
    document.getElementById("ans3").innerHTML = n.toString(16);
}

function clear(callback) {
    document.getElementById("ans1").innerHTML = "";
    document.getElementById("ans2").innerHTML = "";
    document.getElementById("ans3").innerHTML = "";
    callback();
}

function ex() {
    alert("清除成功");
}

function onclear() {
    clear(ex);
}