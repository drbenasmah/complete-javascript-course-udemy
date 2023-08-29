/* Write your code below. Good luck! 🙂 */

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphin = calcAverage(85, 54, 41);
let scoreKoala = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgKoalas > avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else if (avgDolphins > avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log(`No Team wins (${avgKoalas} vs. ${avgDolphins})`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);
