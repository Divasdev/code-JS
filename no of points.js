function points(games) {
  let total = 0;

  for (let match of games) {
    let [x, y] = match.split(":"); // "3:1" → ["3", "1"]

    x = Number(x);
    y = Number(y);

    if (x > y) {
      total += 3;
    } else if (x === y) {
      total += 1;
    } // else x < y → 0 points, so do nothing
  }

  return total;
}
