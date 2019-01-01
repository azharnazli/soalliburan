function soal2(param) {
  var newArr = [
    {
      firtsname: param[0][0],
      lastname: param[0][1],
      hobbies: param[0][2],
      profession: param[0][3]
    },
    {
      firstname: param[1][0],
      lastname: param[1][1],
      hobbies: param[1][2],
      profession: param[1][3]
    }
  ];
  return newArr;
}

console.log(
  soal2([
    ["Aries", "Dimas", ["coding", "pubg", "anime"], "Web Developer"],
    ["Radit", "Dika", ["manga", "gaming"], "Web Developer"]
  ])
);

/* output 
  
  [
    {
        firtName:"Aries",
        lastName:"Dimas",
        hobbies:['coding','pubg','anime'],
        profession:'Web Developer'
    },
    {
        firtName:"Radit",
        lastName:"Dika",
        hobbies:['manga','gaming'],
        profession:'Web Developer'
    }
  ]

*/

console.log(
  soal2([
    ["Awtian", "Akbar", ["coding", "main kucing", "anime"], "Web Instructur"],
    ["Megalo", "Maniak", ["metal music", "maniac"], "Maniac Expert"]
  ])
);
