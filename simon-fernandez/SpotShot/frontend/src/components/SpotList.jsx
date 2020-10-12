import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { loadSpots } from "../actions/spotActions";
import spotStore from "../stores/spotStore";
import SpotListItem from "./SpotListItem";
import stylesSpotList from "../styles/spotList-style";

export default function SpotList({ navigation }) {
  const [spotList, setSpotList] = useState(null);

  function onChange() {
    setSpotList(spotStore.getSpots());
  }

  useEffect(() => {
    spotStore.addChangeListener(onChange);
    !spotList && loadSpots();
    return () => spotStore.removeChangeListener(onChange);
  }, []);
  return (
    <SafeAreaView>
      {spotList ? (
        <FlatList
          style={stylesSpotList.containerSpotList}
          data={spotList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Spot", { id: item._id })}
            >
              <SpotListItem spot={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item._id}
        />
      ) : (
        <ActivityIndicator style={stylesSpotList.activityIndicator} />
      )}
    </SafeAreaView>
  );
}
