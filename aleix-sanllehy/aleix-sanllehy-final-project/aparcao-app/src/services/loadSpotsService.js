import { loadSpots } from "../actions/mapActions";

export function loadSpotsService(user) {
  const carLength = user.carLength;
  loadSpots({ carLength });
}
