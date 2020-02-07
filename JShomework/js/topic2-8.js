var id = 0;
var user = [];

function save() {
    id++;
    var name = document.getElementById("name").value;
    var content = document.getElementById("content").value;
    var person = { "name": name, "content": content };
    addtr(id, name, content);
    user[id] = person;
}

function addtr(id, name, content) {
    var table = document.getElementById("table");
    var add = table.insertRow();
    var addid = "<td>" + id + "</td>";
    var addname = "<td>" + name + "</td>";
    var addcontent = "<td>" + content + "</td>";
    var addbtn = '<td><button class="btnedi" onclick="edi(this)">編輯</button><button class="btndel" onclick="delrow(this)">刪除</button></td>';
    add.innerHTML = addid + addname + addcontent + addbtn;
}

function delrow(r) {
    var n = r.parentNode.parentNode.rowIndex;
    document.getElementById('table').deleteRow(n);
}

function inq() {
    var n = document.getElementById("inq").value;
    var text = "ID：" + n + " 名稱：" + user[n].name + " 內容：" + user[n].content;
    alert(text);
}

function edi(obj) {
    var row = obj.parentNode.parentNode;
    row.cells[2].innerHTML = '<td><input id="edit_content" type="text"/></td>';
    row.cells[3].innerHTML = '<td><button class="btnedi" onclick="check(this)">確認</button><button class="btndel" onclick="delrow(this)">刪除</button></td>';
}

function check(obj) {
    var row = obj.parentNode.parentNode;
    var edit_text = document.getElementById("edit_content").value;
    var userid = Number(row.cells[0].innerText);
    user[userid].content = edit_text;
    row.cells[2].innerHTML = '<td>' + user[userid].content + '</td>';
    row.cells[3].innerHTML = '<td><button class="btnedi" onclick="edi(this)">編輯</button><button class="btndel" onclick="delrow(this)">刪除</button></td>';
}