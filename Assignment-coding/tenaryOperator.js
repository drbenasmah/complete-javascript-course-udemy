const bill = 430;

/* Write your code below. Good luck! 🙂 */

let tip;

tip = bill <= 50 && bill >= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`
);

// if(50<= bill >=300){
//   console.log(bill * 0.15);
// }else
// {console.log(bill * 0.2)}
