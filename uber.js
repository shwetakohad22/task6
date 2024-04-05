class Uber {
  constructor(baseFare, costPerKilometer, costPerMinute) {
    this.baseFare = baseFare;
    this.costPerKilometer = costPerKilometer;
    this.costPerMinute = costPerMinute;
  }

  calculatePrice(distance, time) {
    const distanceCost = distance * this.costPerKilometer;
    const timeCost = time * this.costPerMinute;
    const totalPrice = this.baseFare + distanceCost + timeCost;

    return totalPrice;
  }
}


const uberXCalculator = new Uber(20, 10, 3);

const distance = 60; 
const time = 40;

const totalPrice = uberXCalculator.calculatePrice(distance, time);
console.log("UberX Price:", totalPrice.toFixed(2),"Rupees");
