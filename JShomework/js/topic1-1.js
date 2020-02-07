function cal() {
    var km = document.getElementById("input").value;
    var m = km * 1000;
    var ans = 70 + (Math.ceil((m - 1500) / 500) * 5);
    document.getElementById("ans").innerHTML = ans;
}