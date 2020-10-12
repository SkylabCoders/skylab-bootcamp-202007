import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, View, ActivityIndicator } from "react-native";
import MapView, { Circle, Marker } from "react-native-maps";
import { loadSpotsService } from "../../services/loadSpotsService";
import { createSpotService } from "../../services/createSpotService";
import { destroySpotService } from "../../services/destroySpotService";
import { aparcaoService } from "../../services/aparcaoService";
import { desaparcaoService } from "../../services/desaparcaoService";
import authStore from "../../stores/authStore";
import mapStore from "../../stores/mapStore";
import { loadUser } from "../../actions/authActions";
import styles from "./styles";

function HomeScreen() {
  let mounted = true;
  const [user, setUser] = useState(authStore.getUser());
  const [spots, setSpots] = useState(mapStore.getSpots());
  const [location, setLocation] = useState({
    latitude: undefined,
    longitude: undefined,
  });

  useEffect(() => {
    authStore.addChangeListener(onAuthChange);
    if (!user) loadUser(user);
    return () => authStore.removeChangeListener(onAuthChange);
  }, [user]);
  function onAuthChange() {
    setUser(authStore.getUser());
  }

  useEffect(() => {
    mapStore.addChangeListener(onMapChange);
    loadSpotsService(user);
    return () => mapStore.removeChangeListener(onMapChange);
  }, [user]);
  function onMapChange() {
    setSpots(mapStore.getSpots());
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      if (mounted)
        setLocation({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
    });
    // This line for real time spot update
    // loadSpotsService(user);
    return () => {
      mounted = false;
    };
  }, [location]);

  return typeof location.latitude !== "undefined" ? (
    <View style={styles.container}>
      <View style={styles.tools}>
        <TouchableOpacity
          onPress={() => loadSpotsService(user)}
          style={styles.toolsIcon}
        >
          <Image
            style={styles.toolsImg}
            source={require("../../../assets/png/radar_512.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.toolsIcon}
          onPress={() => {
            aparcaoService(location, user);
            destroySpotService(location, spots, user);
            loadSpotsService(user);
          }}
        >
          <Image
            style={styles.toolsImg}
            source={require("../../../assets/png/parking_512.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.toolsIcon}
          onPress={() => {
            desaparcaoService(user);
            createSpotService(location, user);
            loadSpotsService(user);
          }}
        >
          <Image
            style={styles.toolsImg}
            source={require("../../../assets/png/spot_512.png")}
          />
        </TouchableOpacity>
      </View>

      <MapView
        showsMyLocationButton={true}
        toolbarEnabled={true}
        loadingEnabled={true}
        showsBuildings={false}
        showsUserLocation={true}
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Circle
          center={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          radius={10}
          fillColor={"rgba(255, 200, 200, 0.33)"}
          strokeColor={"rgba(100, 100, 100, 0.33)"}
          strokeWidth={1}
        />
        {spots &&
          spots.map((spot) => (
            <Marker
              style={styles.marker}
              key={spot._id}
              coordinate={{
                latitude: spot.spotLatitude,
                longitude: spot.spotLongitude,
              }}
              pinColor={"red"}
              title={"FREE SPOT"}
              // image={require("../../../assets/png/spot128.png")}
            ></Marker>
          ))}

        {user.userLatitude && (
          <Marker
            style={styles.marker}
            coordinate={{
              latitude: user.userLatitude,
              longitude: user.userLongitude,
            }}
            pinColor={"blue"}
            title={"MY CAR"}
            // image={require("../../../assets/png/spot64.png")}
          ></Marker>
        )}
      </MapView>
    </View>
  ) : (
    <ActivityIndicator
      color="rgb(255,66,66)"
      size="large"
      style={styles.loading}
    />
  );
}

export default HomeScreen;
