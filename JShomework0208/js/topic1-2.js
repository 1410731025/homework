function cal() {
    var s = document.getElementById("input").value;
    var en = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M",
        "N", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "W", "Z", "I", "O"
    ];
    var fn = en.indexOf(s.charAt(0)) + 10;
    var a = Number(fn.toString().charAt(0)) + (fn.toString().charAt(1) * 9);
    var j = 8;
    for (var i = 1; i < s.length - 1; i++) {
        a += s.substring(i, i + 1) * j;
        j -= 1;
    }
    a += Number(s.substring(s.length - 1, s.length));
    if (a % 10 == 0) {
        document.getElementById("ans").innerHTML = "real";
    } else {
        document.getElementById("ans").innerHTML = "not real";
    }

}