var ss = [0, 0, 0, 0, 0, 0];
var i;
for (i = 0; i <= 5; i++) {
    ss[i] = Math.floor(Math.random() * 100) + 1;
}
document.getElementById("array").innerHTML = ss;

function mix() {
    var max = Math.max.apply(null, ss);
    min = Math.min.apply(null, ss);
    document.getElementById("ans1").innerHTML = max;
    document.getElementById("ans2").innerHTML = min;
}

function sort() {
    var s = ss.sort(function(a, b) {
        return a - b;
    });
    document.getElementById("ans3").innerHTML = s.join(",");
}

function sea() {
    var n = document.getElementById("input").value;
    if (ss.indexOf(Number(n)) >= 0) {
        document.getElementById("ans4").innerHTML = "存在";
    } else {
        document.getElementById("ans4").innerHTML = "不存在";
    }
}

function rev() {
    var s = ss.sort(function(a, b) {
        return a - b;
    }).reverse();
    document.getElementById("ans5").innerHTML = s.join(",");
}

function addel() {
    var s = ss;
    s.pop();
    s.push(16);
    document.getElementById("ans6").innerHTML = s.join(",");
}

function rem() {
    var n = Number(document.getElementById("input2").value);
    var s = ss;
    if (s.indexOf(n) != -1) {
        s.splice(ss.indexOf(n), 1);
    }
    document.getElementById("ans7").innerHTML = s.join(",");
}