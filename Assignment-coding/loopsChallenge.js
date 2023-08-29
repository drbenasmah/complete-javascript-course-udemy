const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let bill = 0; bill < bills.length; bill++) {
  tips.push(calcTip(bills[bill]));
  totals.push(tips[bill] + bills[bill]);
}

console.log("Tips:", tips);
console.log("Totals:", totals);
