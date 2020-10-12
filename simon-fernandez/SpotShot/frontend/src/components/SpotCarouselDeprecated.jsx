import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import spotStore from "../stores/spotStore";
import stylesSpotList from "../styles/spotList-style";

export default function SpotCarousel() {
  const [spotList, setSpotList] = useState(null);

  function onChange() {
    setSpotList(spotStore.getSpots());
  }

  useEffect(() => {
    spotStore.addChangeListener(onChange);
    return () => spotStore.removeChangeListener(onChange);
  }, []);
  return (
    <>
      <FlatList
        style={stylesSpotList.containerSpotList}
        data={spotList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Spot", { id: item._id })}
          >
            <SpotCarouselItem spot={item.type} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item._id}
      />
    </>
  );
}
