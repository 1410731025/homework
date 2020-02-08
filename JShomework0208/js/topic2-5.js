function con() {
    var n = Number(document.getElementById("input").value);
    document.getElementById("ans1").innerHTML = n.toString(2);
    document.getElementById("ans2").innerHTML = n.toString(8);
    document.getElementById("ans3").innerHTML = n.toString(16);
}