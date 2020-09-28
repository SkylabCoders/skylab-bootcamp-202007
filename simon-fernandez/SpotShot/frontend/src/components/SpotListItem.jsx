import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import stylesSpotListItem from "../styles/spotListItem-style";
import spotStore from "../stores/spotStore";

export default function SpotListItem({ spot }) {
  const [spotItem, setSpotItem] = useState(null);

  function onChange() {
    setSpotItem(spotStore.getSpotById(spot._id));
  }

  useEffect(() => {
    spotStore.addChangeListener(onChange);
    setSpotItem(spotStore.getSpotById(spot._id));

    return () => spotStore.removeChangeListener(onChange);
  }, []);
  return (
    <>
      {spotItem && (
        <View style={stylesSpotListItem.containerSpotItem}>
          <Image
            style={stylesSpotListItem.containerSpotItemImage}
            source={spotItem.image[0]}
          />
          <View style={stylesSpotListItem.containerSpotItemTab}>
            <View style={stylesSpotListItem.containerSpotItemTabContainer}>
              <Text
                style={stylesSpotListItem.containerSpotItemTabContainerTitle}
              >
                {spotItem.title}
              </Text>
              <Text
                style={stylesSpotListItem.containerSpotItemTabContainerType}
              >
                {spotItem.spotStyle}
              </Text>
            </View>
          </View>
        </View>
      )}
    </>
  );
}
