import React from "react";
import { StyleSheet, View } from "react-native";

import { Rating } from "react-native-elements";

export default function AinguraRating(props) {
  const rating = props.rating;
  console.log(rating);
  return (
    <View style={styles.ratingStyles}>
      <View style={{ flexDirection: "row", backgroundColor: "pink" }}>
        <Rating
          style={styles.ratingStyles}
          type="bell"
          ratingBackgroundColor="pink"
          startingValue={rating}
          ratingColor="#457b9d"
        ></Rating>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
  },
  textContainer: {
    marginTop: 50,
    justifyContent: "center",
  },
  titleStyles: {
    fontSize: 30,
    fontWeight: "bold",
  },
  ratingStyles: {
    flexDirection: "row-reverse",
  },
  ainguraCounterStyles: {
    width: 35,
    height: 35,
  },
  //AHORA FUNCIONA
  mapContainer: {
    flex: 1,
    height: 200,
    width: 400,
    marginTop: 20,
    marginLeft: 10,
    borderRadius: 30,
  },
  mapStyles: {
    flex: 1,
  },
});
