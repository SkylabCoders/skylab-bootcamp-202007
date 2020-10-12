import { findNearest, isPointWithinRadius } from "geolib";
import { destroySpot } from "../actions/mapActions";
import { loadSpotsService } from "./loadSpotsService";

export async function destroySpotService(location, spots, user) {
  const nearest = findNearest(location, spots);
  if (!nearest) {
    loadSpotsService(user);
  } else {
    const latitude = nearest.spotLatitude;
    const longitude = nearest.spotLongitude;
    const spot = { latitude, longitude };
    if (isPointWithinRadius(spot, location, 10)) {
      const spotLatitude = nearest.spotLatitude;
      const spotLongitude = nearest.spotLongitude;
      const params = { spotLatitude, spotLongitude };
      destroySpot(params);
      loadSpotsService(user);
    } else {
      loadSpotsService(user);
    }
  }
}
