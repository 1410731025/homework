var person = { "name": "allen", "phone": "0912345678", "age": "20" };
console.log(JSON.stringify(person));
/*-------------------------------------------*/
var s = ["score1", "score2", "score3"],
    i;
for (i = 0; i <= 2; i++) {
    person[s[i]] = Math.floor((Math.random() * 100)) + 1;
}
console.log(JSON.stringify(person));