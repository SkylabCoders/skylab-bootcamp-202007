function mutateDataForDb(req) {
  const name = req.body.ainguraName;
  const description = req.body.ainguraDesc;
  const location = req.body.ainguraApproxLocation;
  const lat = req.body.geoLocation.latitude;
  const lng = req.body.geoLocation.longitude;
  const images = [{ uri: req.body.uploadImage }];
  const author = req.body.author;
  const newAingura = {
    name,
    description,
    location,
    lat,
    lng,
    images,
    author,
  };
  if (req.body.uploadImage === null || req.body.uploadImage === undefined) {
    images[0].uri =
      "https://www.creativefabrica.com/wp-content/uploads/2018/11/Anchor-logo-by-Acongraphic-2.jpg";
    return newAingura;
  }

  return newAingura;
}

module.exports = { mutateDataForDb };
