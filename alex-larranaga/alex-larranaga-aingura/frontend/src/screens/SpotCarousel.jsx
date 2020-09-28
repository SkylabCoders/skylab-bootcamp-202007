import React from "react";
import { Image } from "react-native-elements";
import Carusel from "react-native-snap-carousel";

export default function SpotCarousel(props) {
  const { images, height, width } = props;

  const renderItem = ({ item, index }) => {
    return <Image source={item} style={{ width, height }} />;
  };

  return (
    <Carusel
      layout={"default"}
      data={images}
      renderItem={renderItem}
      itemWidth={width}
      sliderWidth={width}
      resizeMode="contain"
    />
  );
}
