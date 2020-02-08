var t1 = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ],
    t2 = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
var i, j, text = "";
for (i = 0; i <= 2; i++) {
    for (j = 0; j <= 2; j++) {
        t1[i][j] = Math.floor(Math.random() * 100) + 1;
        text += t1[i][j] + " , ";
    }
    text += "<br>";
}
document.getElementById("array1").innerHTML = text;
text = "";
for (i = 0; i <= 2; i++) {
    for (j = 0; j <= 3; j++) {
        t2[i][j] = Math.floor(Math.random() * 100) + 1;
        text += t2[i][j] + " , ";
    }
    text += "<br>";
}
document.getElementById("array2").innerHTML = text;

function turn1() {
    document.getElementById("ans1").innerHTML = cal(t1, 2, 2, 1, 0);
}

function turn2() {
    document.getElementById("ans2").innerHTML = cal(t2, 2, 3, 1, 0);
}

function cal(t, imax, jmax, imin, jmin) {
    var i = 0,
        j = 0,
        ans = "";
    while (imax != 0 && jmax != 0) {
        while (j <= jmax) {
            ans += t[i][j] + " , ";
            j++;
        }
        jmax -= 1;
        j--;
        i++;
        while (i <= imax) {
            ans += t[i][j] + " , ";
            i++;
        }
        imax -= 1;
        i--;
        j--;
        while (j >= jmin && jmin == 0) {
            ans += t[i][j] + " , ";
            j--;
        }
        jmin += 1;
        j++;
        i--;
        while (i >= imin) {
            ans += t[i][j] + " , ";
            i--;
        }
        imin += 1;
        i++;
        j++;
    }
    return ans;
}