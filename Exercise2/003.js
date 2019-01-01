function soal3(param) {
  var tampung = {};
  tampung.A = [];
  tampung.B = [];
  tampung.C = [];
  tampung.K = [];
  tampung.M = [];
  tampung.S = [];
  tampung.L = [];
  tampung.Z = [];
  for (var i = 0; i < param.length; i++) {
    if (param[i][0] === "A") {
      tampung.A.push(param[i]);
    } else if (param[i][0] === "B") {
      tampung.B.push(param[i]);
    } else if (param[i][0] === "C") {
      tampung.C.push(param[i]);
    } else if (param[i][0] === "K") {
      tampung.K.push(param[i]);
    } else if (param[i][0] === "M") {
      tampung.M.push(param[i]);
    } else if (param[i][0] === "S") {
      tampung.S.push(param[i]);
    } else if (param[i][0] === "L") {
      tampung.L.push(param[i]);
    } else if (param[i][0] === "Z") {
      tampung.Z.push(param[i]);
    }
  }
  if (tampung.A.length == 0) {
    delete tampung.A;
  }
  if (tampung.B.length == 0) {
    delete tampung.B;
  }
  if (tampung.C.length == 0) {
    delete tampung.C;
  }
  if (tampung.K.length == 0) {
    delete tampung.K;
  }
  if (tampung.M.length == 0) {
    delete tampung.M;
  }
  if (tampung.S.length == 0) {
    delete tampung.S;
  }
  if (tampung.L.length == 0) {
    delete tampung.L;
  }
  if (tampung.Z.length == 0) {
    delete tampung.Z;
  }
  return tampung;
}

console.log(
  soal3([
    "Ayam",
    "Kucing",
    "Bebek",
    "Sapi",
    "Babi",
    "Curut",
    "Cacing",
    "Monyet"
  ])
);
/*
    {
        A:['Ayam'],
        B:['Bebek','Babi'],
        C:['Cacing','Curut'],
        K:['Kucing'],
        M:['Monyet'],
        S:['Sapi']
    }
*/

console.log(
  soal3(["Anjing", "Kuda", "Anoa", "Zebra", "Lipan", "Kudanil", "Landak"])
);

/*
    {
        A:['Anjing','Anoa'],
        L:['Lipan','Landak'],
        K:['Kuda','Kudanil'],
        Z:['Zebra']
    }
*/
