var t = [
    [0, 0, 0],
    [0, 0, 0]
];
var i, j, text = "";
for (i = 0; i <= 1; i++) {
    for (j = 0; j <= 2; j++) {
        t[i][j] = Math.floor(Math.random() * 100) + 1;
        text += t[i][j] + " , ";
    }
    text += "<br>";
}
document.getElementById("array").innerHTML = text;

function turn() {

    var a = Array(2);
    var ans = "<br>";
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