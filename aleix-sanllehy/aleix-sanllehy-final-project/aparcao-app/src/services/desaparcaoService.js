import { desaparcao } from "../actions/mapActions";

export async function desaparcaoService(user) {
  const name = user.name;
  const userLatitude = null;
  const userLongitude = null;
  const params = { name, userLatitude, userLongitude };
  await desaparcao(params);
}
