/*
    analisa sendiri dengan apa yang diminta soal melalui test case. 
    wajib menggunakan pseudocode

    function soal1(param)
      if param equal to 0
        result "invalid input"
      
    STORE "symbol" with value !,@,#
    STORE "tampung"
    FOR initial with 0,intial less than param, increment intial
      STORE "isi" with value intial modulo symbol length
      Add last result to tampung
    Display tampung
    



*/
function soal1(param) {
  if (param === 0) {
    return "invalid input";
  }
  var symbol = ["!", "@", "#"];
  var tampung = [];
  for (var i = 0; i < param; i++) {
    var isi = i % symbol.length;
    tampung.push(symbol[isi]);
  }
  return tampung;
}

console.log(soal1(3));
output: ["!", "@", "#"];

console.log(soal1(6));
// output : ['!','@','#','!','@','#']

console.log(soal1(4));
// output : ['!','@','#','!']

console.log(soal1(0)); // invalid input
