/*
    membuat bendera scotlandia

    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *

     petunjuk : 
    - input harus lebih dari 3 , jika tidak maka "invalid input"
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/

function scotlandFlag(param) {
  if (param <= 3 || param % 2 === 0) {
    console.log("Invalid input");
  } else {
    var count = 0;
    for (var i = 0; i < param; i++) {
      var stars = "";
      for (var j = 0; j < param; j++) {
        if (j === param - 1 - count) {
          stars += "*";
          count++;
        } else if (i === j) {
          stars += "*";
        } else {
          stars += " ";
        }
      }
      console.log(stars);
    }
  }
}

console.log(scotlandFlag(5));
/*
    '*   *'
    ' * * '
    '  *  '
    ' * * '
    '*   *'
*/

console.log(scotlandFlag(9));
/*
    '*       *'
    ' *     * '
    '  *   *  '
    '   * *   '
    '    *    '
    '   * *   '
    '  *   *  '
    ' *     * '
    '*       *'
*/
