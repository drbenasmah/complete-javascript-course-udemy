const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

console.log(
  john.calcBMI() > mark.calcBMI()
    ? `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
        mark.fullName
      }'s (${mark.calcBMI()})!`
    : `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
        john.fullName
      }'s (${john.calcBMI()})!`
);
