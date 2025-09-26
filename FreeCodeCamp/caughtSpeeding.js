function speeding(speeds, limit) {
  let carAmount = 0,
    avgOverSpeed = 0,
    sum = 0;
  let res = [];

  for (let i = 0; i < speeds.length; i++) {
    if (speeds[i] > limit) {
      console.log();
      carAmount++;
      sum = sum + (speeds[i] - limit);
    }
  }
  sum > 0 ? (avgOverSpeed = sum / carAmount) : (avgOverSpeed = 0);
  res.push(carAmount, avgOverSpeed);

  return res;
}

console.log(speeding([50, 60, 55], 60));
console.log(speeding([58, 50, 60, 55], 55));
console.log(speeding([61, 81, 74, 88, 65, 71, 68], 70));
speeding([100, 105, 95, 102], 100);
// speeding([40, 45, 44, 50, 112, 39], 55);
