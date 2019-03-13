/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  const totalTriangles = preferences.reduce((acc, spichonee, i) => {
    const aFakeIndex = i + 1;
    const bRealIndex = spichonee - 1;
    const cRealIndex = preferences[bRealIndex] - 1;
    if (bRealIndex === cRealIndex) {
      return acc;
    }
    const c = preferences[cRealIndex];
    return c === aFakeIndex ? acc + 1: acc;
  }, 0);
  const uniqueTriangles = totalTriangles / 3;
  return uniqueTriangles;
};
