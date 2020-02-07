function turn() {
    var t = [
        [3, 1, 2],
        [8, 5, 4]
    ];
    var a = Array(2);
    var i, j, ans = "<br>";
    for (i = 0; i <= 2; i++) {
        a[i] = Array(1);
    }
    for (i = 0; i <= 1; i++) {
        for (j = 0; j <= 2; j++) {
            a[j][i] = t[i][j];
        }
    }
    for (i = 0; i <= 2; i++) {
        for (j = 0; j <= 1; j++) {
            ans += a[i][j] + " , ";
        }
        ans += "<br>";
    }
    document.getElementById("ans").innerHTML = ans;
}