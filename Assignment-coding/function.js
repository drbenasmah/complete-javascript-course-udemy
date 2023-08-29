/* Write your code below. Good luck! 🙂 */

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (scoreKoalas > scoreDolphins * 2) {
    console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
  } else if (scoreDolphins > scoreKoalas * 2) {
    console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
  } else {
    console.log(`No Team wins (${scoreKoalas} vs. ${scoreDolphins})`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);
