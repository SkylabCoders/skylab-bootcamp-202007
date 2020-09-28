function validateDistance(point, interest, distance) {
  const R = 6371;
  const deg2rad = (n) => {
    return Math.tan(n * (Math.PI / 180));
  };

  const dLat = deg2rad(interest.lat - point.lat);
  const dLon = deg2rad(interest.lng - point.lng);
  console.log(dLat, dLon);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(point.lat)) *
      Math.cos(deg2rad(interest.lat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.asin(Math.sqrt(a));
  const d = R * c;
  console.log(d);

  return d < distance;
}

async function validateGeoLocation(givenLoc, model) {
  const ainguraColl = await model.find();
  const validationArray = [];
  ainguraColl.forEach((aingura) => {
    const { lat, lng } = aingura;
    const coordenates = { lat, lng };
    validationArray.push(validateDistance(givenLoc, coordenates, 6));
  });
  if (validationArray.some((spot) => spot === true)) {
    return true;
  }
  return false;
}

module.exports = { validateGeoLocation, validateDistance };
