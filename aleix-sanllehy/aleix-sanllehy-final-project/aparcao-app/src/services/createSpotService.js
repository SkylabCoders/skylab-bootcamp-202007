import { createSpot } from "../actions/mapActions";
import { loadSpotsService } from "./loadSpotsService";

export async function createSpotService(location, user) {
  const spotLatitude = location.latitude;
  const spotLongitude = location.longitude;
  const carLength = user.carLength;
  const params = { spotLatitude, spotLongitude, carLength };
  createSpot(params);
  loadSpotsService(user);
}
