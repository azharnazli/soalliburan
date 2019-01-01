/*
    wajib pseudocode. 
    
    function soal2(param)
      IF param = 0
        ruturn invalid input
      STORE "alphabet"with value a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,t,u,v,w,x,y,z
      STORE "count" to 0
      STORE "tampung" to []
      FOR inital i with value 0,i less than param,increment i
        STORE "array" with value []
        FOR initial j with value 0,j less then param,increment j
          Add array value with alphabet with index count
          increment count
          IF count equal to 26
            add count value to 0
        Add tampung  with value array
      Display tampung
          


    Jawaban pseudocode disini 
    
*/

function soal2(param) {
  if (param === 0) {
    return "invalid input";
  }
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  var count = 0;
  var tampung = [];
  for (var i = 0; i < param; i++) {
    var array = [];
    for (var j = 0; j < param; j++) {
      array.push(alphabet[count]);
      count++;
      if (count === 26) {
        count = 0;
      }
    }
    tampung.push(array);
  }
  return tampung;
}

console.log(soal2(8));
/*
    [
        ['a','b','c','d','e','f','g','h']
        ['i','j','k','l','m','n','o','p']
        ['q','r','s','t','u','v','w','x']
        ['y','z','a','b','c','d','e','f']
        ['g','h','i','j','k','l','m','n']
        ['o','p','q','r','s','t','u','v']
        ['w','x','y','z','a','b','c','d']
        ['e','f','g','h','i','j','k','l']
    ]
*/

console.log(soal2(2));
/*
    [
        ['a','b'],
        ['c','d']
    ]
*/

console.log(soal2(0)); // invalid input
