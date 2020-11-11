function simulateProfit(princes) {
  if (princes.length <= 1) {
    return 0;
  }
  var profit = 0;
  var low = princes[0];

  for (let i = 0; i < princes.length; i++) {
    if (princes[i] <= low) {
      low = princes[i];
    } else {
      profit = Math.max(princes[i] - low, profit);
    }
  }
  return profit;
}

console.log(simulateProfit([7, 1, 5, 3, 6, 4]));
