// mirip soal pasangan , namun agak beda
// 1 orang bisa ngerjain soal ini , klo dia bisa, kamu juga
function soal2(param) {
  var x = [];
  var length = 0;
  if (param.length % 2 === 1) {
    length = Math.floor(param.length / 2);
  }
  for (var i = 0; i < param.length / 2; i++) {
    x.push([param[i], param[param.length - 1 - i]]);
  }
  if (x[length][0] === x[length][1]) {
    x[length][1] = "Instruktur";
  }
  return x;
}

console.log(soal2(["Aries", "Dimas", "Gatot", "Nurmantyo", "Zainul", "Majdi"]));
/*
    output: 
    [['Aries','Majdi'],['Dimas','Zainul'],['Gatot','Nurmantyo']]
*/

console.log(soal2(["A", "B", "C", "D", "E"])); //
// [ ['A','E'] , ['B','D'], ['C','Instruktur']]

console.log(
  soal2(["Susan", "Albert", "Erithiana", "Zaki", "Sisijoan", "Henry", "Nio"])
);
// [['Susan','Nio'],['Albert','Henry'],['Erithiana','Sisijoan'],['Zaki','Instruktur']]
