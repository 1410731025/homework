function tran() {
    var ss = document.getElementById("input").value;
    var en = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];
    var n = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..",
        "–", "-.", "---", ".--.", "--.-", ".-.", "...", "–", "..-", "...-", ".--", "-..-", "-.--", "--.."
    ];
    var s = ss.split(" "),
        ans = "";
    for (var i = 0; i < s.length; i++) {
        ans += en[n.indexOf(s[i])];
    }
    document.getElementById("ans").innerHTML = ans;
}