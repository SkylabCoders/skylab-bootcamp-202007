import React from "react";
import { Text, Image, ActivityIndicator, View } from "react-native";
import stylesSpotCarousel from "../styles/spotCarousel-style";

export default function SpotCarousel({ spot }) {
  return (
    <>
      {spot ? (
        <View style={stylesSpotCarousel.suggestionContainer}>
          <Image
            style={stylesSpotCarousel.suggestionChildImage}
            source={{ uri: spot.image[0].uri }}
          />
          <Text style={stylesSpotCarousel.suggestionChildMainText}>
            {spot.title}
          </Text>
          <Text style={stylesSpotCarousel.suggestionChildText}>
            {spot.type}
          </Text>
        </View>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
}
