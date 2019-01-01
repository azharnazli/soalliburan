function persegi(param1, param2) {
  if (param1 === 0 || param2 === 0) {
    return "invalid input";
  }

  for (var i = 0; i < param2; i++) {
    var tag = "";
    for (var j = 0; j < param1; j++) {
      if (i === 0) {
        tag += "#";
      } else if (i === param2 - 1) {
        tag += "#";
      } else if (j === 0) {
        tag += "#";
      } else if (j === param1 - 1) {
        tag += "#";
      } else {
        tag += " ";
      }
    }
    console.log(tag);
  }
}

console.log(persegi(5, 7));

/*
    #####
    #   #
    #   #
    #   #
    #   #
    #   #
    #####
*/

console.log(persegi(6, 3));

/*
    ######
    #    #
    ######
*/

console.log(persegi(0, 7)); // invalid value
console.log(persegi(4, 0)); // invalid value
