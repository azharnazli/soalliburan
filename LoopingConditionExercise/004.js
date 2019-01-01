/*
    ================
    simple Trapesium
    ================

    [INSTRUCTION]
    buatlah sebuah program yg dapat membuat trapesium sederhana
    program ini hanya memiliki 1 input yaitu 
    - tinggi (t)

    Program ini memiliki 2 release. 
    yaitu : 

    [RELEASE 0]
    trapesiumRelease0(5)
    output: 
    ooooo
    oooooo
    ooooooo
    oooooooo
    ooooooooo

    [RELEASE 1]
    trapesiumRelease1(5)
    output:
    ooooo
    o    o
    o     o
    o      o
    ooooooooo

*/

function trapesiumRelease0(t) {
  var count = t;
  for (var i = 0; i < t; i++) {
    var ooo = "";
    for (var j = 0; j < t * 2; j++) {
      if (j < count) {
        ooo += "o";
      } else {
        ooo += " ";
      }
    }
    count++;
    console.log(ooo);
  }
}

trapesiumRelease0(5);
/*
ooooo
oooooo
ooooooo
oooooooo
ooooooooo
*/

function trapesiumReleaseFinal(t) {
  var count = t;
  for (var i = 0; i < t; i++) {
    var ooo = "";
    for (var j = 0; j < t * 2; j++) {
      if (j < count) {
        if (i == 0) {
          ooo += "o";
        } else if (i === t - 1) {
          ooo += "o";
        } else if (j === 0) {
          ooo += "o";
        } else if (j === count - 1) {
          ooo += "o";
        } else {
          ooo += " ";
        }
      }
    }
    count++;
    console.log(ooo);
  }
}

trapesiumReleaseFinal(5);
/*
ooooo
o    o
o     o
o      o
ooooooooo
*/
