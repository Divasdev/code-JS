function betterThanAverage(classPoints, yourPoints) {
  const classAverage =
    classPoints.reduce((sum, value) => sum + value, 0) / classPoints.length;

  return yourPoints > classAverage;
}