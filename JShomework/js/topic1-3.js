function img1() {
    var ans = "";
    for (var i = 1; i <= 5; i++) {
        for (var j = 1; j <= 5; j++) {
            ans += "*" + " ";
        }
        ans += "<br>";
    }
    document.getElementById("ans").innerHTML = ans;
}

function img2() {
    var ans = "";
    for (var i = 1; i <= 5; i++) {
        for (var j = 1; j <= i; j++) {
            ans += "*" + " ";
        }
        ans += "<br>";
    }
    document.getElementById("ans").innerHTML = ans;
}

function img3() {
    var ans = "";
    for (var i = 1; i <= 5; i++) {
        for (var j = 1; j <= 5 - i; j++) {
            ans += "&nbsp;";
        }
        for (var k = 1; k <= i; k++) {
            ans += "*" + "&nbsp;";
        }
        ans += "<br>";
    }
    document.getElementById("ans").innerHTML = ans;
}

function img4() {
    var ans = "";
    for (var i = 1; i <= 5; i++) {
        for (var j = 1; j <= 5; j++) {
            if (i == 5 || j == 5 || i == 1 || j == 1) {
                ans += "*" + "&nbsp;";
            } else {
                ans += "&nbsp;" + "&nbsp;" + "&nbsp;";
            }
        }
        ans += "<br>";
    }
    document.getElementById("ans").innerHTML = ans;
}

function img5() {
    var ans = "";
    for (var i = 1; i <= 5; i++) {
        for (var j = 1; j <= i; j++) {
            if (i == j || j == 1 || i == 5) {
                ans += "*" + "&nbsp;";
            } else {
                ans += "&nbsp;" + "&nbsp;" + "&nbsp;";
            }
        }
        ans += "<br>";
    }
    document.getElementById("ans").innerHTML = ans;
}