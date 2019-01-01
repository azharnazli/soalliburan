/* 
    ================
    Row Sum Triangle
    ================

    [INSTRUCTION]
    diberikan sebuah segitiga yang berisi angka - angka ganjil 

    1 
    3 5 
    7 9 11
    13 15 17 19
    21 23 25 27 29
    31 33 35 37 39 41
    ...

    tugas kalian adalah dapat mengetahui jumlah angka per baris bila 
    baris nya disebutkan.

    [EXAMPLE]
    rowSumTriangle(4)
    dibaris 4 terdapat angka :
    13 + 15 + 17 + 19 = 64
    output: 64 

    rowSumTriangle(27)
    output : 19683


*/

function rowSumTriangle(row) {
  var count = 1;
  var result = 0;
  for (var i = 0; i < row; i++) {
    var arr = [];
    for (var j = 0; j <= i; j++) {
      arr.push(count);
      count += 2;
    }
  }
  for (k = 0; k < arr.length; k++) {
    result += arr[k];
  }
  return result;
}

console.log(rowSumTriangle(4)); // 64

console.log(rowSumTriangle(27)); // 19683
