import { aparcao } from "../actions/mapActions";

export async function aparcaoService(location, user) {
  const name = user.name;
  const userLatitude = location.latitude;
  const userLongitude = location.longitude;
  const params = { name, userLatitude, userLongitude };
  await aparcao(params);
}
