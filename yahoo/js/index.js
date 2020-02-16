document.onclick = lang;

function lang(e) {
    var id = e.target.id;
    if (id == "language") {
        document.getElementById("langbox").className = "langbox";
        document.getElementById(id).setAttribute("dis_none", "langbox");
    } else {
        document.getElementById("langbox").className = "dis_none";
        document.getElementById(id).setAttribute("langbox", "dis_none");
    }
}

function new2lilock() {
    unlock();
    var id = event.currentTarget.id;
    var idlist = { "new2li1": "new2_01", "new2li2": "new2_02", "new2li3": "new2_03", "new2li4": "new2_04", "new2li5": "new2_05", "new2li6": "new2_06" };
    var contentid = idlist[id];
    document.getElementById(id).className = "lock";
    document.getElementById(id).setAttribute("unlock", "lock");
    document.getElementById(contentid).className = "new2_lock";
    document.getElementById(contentid).setAttribute("new2_unlock", "new2_lock");
}

function unlock() {
    var i = 1;
    for (i = 1; i <= 6; i++) {
        var id = "new2li" + i;
        document.getElementById(id).className = "unlock";
        document.getElementById(id).setAttribute("lock", "unlock");
    }
    for (i = 1; i <= 6; i++) {
        var contentid = "new2_0" + i;
        document.getElementById(contentid).className = "new2_unlock";
        document.getElementById(contentid).setAttribute("new2_lock", "new2_unlock");
    }
}