function soal1(param) {
  var arr = [];
  for (var i = 1; i <= param; i++) {
    if (i % 4 === 0) {
      arr.push("fizz");
    } else if (i % 7 === 0) {
      arr.push("Buzz");
    }
    if (i % 4 === 0 && i % 7 === 0) {
      arr.push("FizzBuzz");
    } else {
      arr.push("");
    }
  }
  return arr;
}

console.log(soal1(20));
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz']

console.log(soal1(10));
// ['','','','Fizz','','','Buzz','Fizz','','']

console.log(soal1(30));
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz','Buzz','','','Fizz','','','','FizzBuzz','','']
