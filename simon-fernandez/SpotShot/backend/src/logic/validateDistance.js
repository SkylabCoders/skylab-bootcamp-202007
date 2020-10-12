const validateDistance = (point, interest, distance) => {
  const R = 6371;
  const deg2rad = (n) => {
    return Math.tan(n * (Math.PI / 180));
  };
  const dLat = deg2rad(interest.lat - point.lat);
  const dLon = deg2rad(interest.lgn - point.lgn);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(point.lat)) *
      Math.cos(deg2rad(interest.lat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.asin(Math.sqrt(a));
  const d = R * c;
  return d < distance;
};

module.exports = { validateDistance };
