import Geocode from 'react-geocode';
export async function getLocation(address) {
  let newLocation = null;
  Geocode.setApiKey('AIzaSyA4g_bvfSpG_M_36CZphOAOTzMZedZDQ7w');
  Geocode.setLanguage('es');
  Geocode.setRegion('es');
  await Geocode.fromAddress(address).then(
    (response) => {
      newLocation = response.results[0].geometry.location;
    },
    (error) => {
      newLocation = error;
    }
  );
  return newLocation;
}
