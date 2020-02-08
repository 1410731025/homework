function cal() {
    var km = document.getElementById("input").value;
    if (km > 0) {
        var m = km * 1000;
        var ans = 70 + (Math.ceil((m - 1500) / 500) * 5);
        document.getElementById("ans").innerHTML = ans;
    } else {
        document.getElementById("ans").innerHTML = "請乖乖輸入不要搞我！";
    }
}