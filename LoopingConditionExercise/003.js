/*
    =========
    Triangel
    =========

    [INSTRUCTION]
    Buatlah sebuah program yang dapat mengenerate segitiga , dimana inputnya 
    adalah tinggi (t) nya.
    bila t = 1 maka outputnya : t is invalid
    
    [EXAMPLE]
    triangel(5)
    output:
        *    
       ***
      *****
     *******
    *********

    triangel(3)
    output:
        *    
       ***
      *****

*/

function triangel(t) {
  if (t === 1) {
    console.log("t is invalid ");
  } else {
    var count = 0;
    for (var i = 0; i < t; i++) {
      var stars = "";
      for (var j = 1; j < t * 2; j++) {
        if (j >= t - count && j <= t + count) {
          stars += "*";
        } else {
          stars += " ";
        }
      }
      count++;
      console.log(stars);
    }
  }
}

triangel(3);
/*
 *
 ***
 *****
 */

triangel(5);
/*
 *
 ***
 *****
 *******
 *********
 */

triangel(1); // t is invalid
