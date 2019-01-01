/*
    ======================
    String to Multidimensi
    ======================

    [INSTRUKSI]
    diberikan sebuah string yang jumlah characternya bisa di akar pangkat
    (4, 9, 16, 25 , ... ) 
    ubahlah karakter - karakter itu menjadi array multidimensi
    dimana hasil akar pangkat jumlah karakternya menjadi row dan col

    [EXAMPLE]

    stringToMultidimensi("0120194124213712")
    jumlah char : 16 
    row dan col = akar 16 
    row dan col = 4
    output: 
    [
         1 2 3 4 
        [0,1,2,0], 1 
        [1,9,4,1], 2 
        [2,4,2,1], 3
        [3,7,1,2]  4
    ]

 */

function stringToMultidimensi(str) {
  var akar = Math.sqrt(str.length);
  if (akar % 1 !== 0) {
    console.log("char count invalid");
  } else {
    var tampung = [];
    var result = [];
    for (var i = 0; i < str.length; i++) {
      tampung.push(str[i]);
      if (tampung.length % akar === 0) {
        isi.push(tampung);
        tampung = [];
      }
    }
  }
  return result;
}

stringToMultidimensi("0120194124213712");
/*
    [
        [0,1,2,0],
        [1,9,4,1],
        [2,4,2,1],
        [3,7,1,2]
    ]
 */

stringToMultidimensi("01201941242137127");
/*
    // char count invalid
 */
