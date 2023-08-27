let scoreDolphins = [96, 108, 89];
let avgDolphins = (96 + 108 + 89) / 3;

let scoreKoalas = [88, 91, 110];
let avgKoalas = (88 + 91 + 110) / 3;

if (avgKoalas > avgDolphins) {
  console.log("Koalas win the trophy");
} else if (avgKoalas < avgDolphins) {
  console.log("Dolphins win the trophy");
} else {
  console.log("Both win the trophy");
}

console.log(avgKoalas);
