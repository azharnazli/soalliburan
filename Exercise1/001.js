function soal1(param) {
  var newArr = [];
  for (var i = 0; i < param; i++) {
    if (param % 2 === 0) {
      if (param / 2 == i) {
        newArr[i - 1] = "*";
        newArr[i] = "*";
      } else {
        newArr.push("");
      }
    } else if (param % 2 !== 0) {
      if (i == Math.floor(param / 2)) {
        newArr[i] = "*";
      } else {
        newArr.push("");
      }
    }
  }
  if (param === 0) {
    return "Invalid Input";
  } else {
    return newArr;
  }
}

// test case
console.log(soal1(5));
/*
    output : 
    ['','','*','','']
*/

console.log(soal1(4)); // ['','*','*','']

console.log(soal1(7)); // ['','','','*','','','']

console.log(soal1(10)); // ['','','','','*','*','','','','']

console.log(soal1(0)); // invalid input

console.log(soal1(1)); // ['*']
