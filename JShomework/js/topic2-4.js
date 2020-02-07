function turn1() {
    var t = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    document.getElementById("ans1").innerHTML = cal(t, 2, 2, 1, 0);
}

function turn2() {
    var t = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
    ];
    document.getElementById("ans2").innerHTML = cal(t, 2, 3, 1, 0);
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