import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Image } from "react-native-elements";
import { size } from "lodash";
//import { FlatList } from "react-native-gesture-handler";
import { loadFeed } from "../actions/feedActions";
import feedStore from "../stores/feedStore";
import { useNavigation } from "@react-navigation/native";

export default function feedComponent() {
  const [feed, setFeed] = useState([]);
  const navigation = useNavigation();

  function onChange() {
    setFeed(feedStore.getFeed());
  }
  useFocusEffect(() => {
    feedStore.addChangeListener(onChange);
    console.log("BUKLEA");

    let timer = setInterval(loadFeed, 1000);

    return () => {
      feedStore.removeChangeListener(onChange);
      clearInterval(timer);
    };
  }, [navigation]);

  return (
    <View>
      {size(feed) > 0 ? (
        <View>
          <ImageBackground
            source={require("../../assets/aingura-back.jpg")}
            style={{ ...StyleSheet.absoluteFillObject }}
          />
          <FlatList
            data={feed}
            renderItem={(post) => <Post post={post} navigation={navigation} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      ) : (
        <View style={styles.feedLoader}>
          <ActivityIndicator size="large" style={{ margin: "auto" }} />
          <Text>Loading feed...</Text>
        </View>
      )}
    </View>
  );
}

export function Post(props) {
  const { post } = props;
  const { images } = props.post.item;
  const {
    _id,
    name,
    author,
    description,
    location,
    lat,
    lng,
  } = props.post.item;
  const PostImage = images[0];

  const goToPost = () => {
    props.navigation.navigate("detail", { _id: _id });
  };

  return (
    <TouchableOpacity
      onPress={() => {
        goToPost();
      }}
    >
      <View style={styles.postStyle}>
        <View style={styles.postContainer}>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="cover"
              style={styles.postImageStyles}
              source={PostImage}
              PlaceholderContent={<ActivityIndicator color="fff" />}
            />
          </View>
          <View style={styles.postTextStyles}>
            <Text style={styles.locationStyles}> Location: {location}</Text>
            <Text style={styles.authorStyle}>{author}</Text>
            <Text style={styles.descriptionStyle}>
              {description.substr(0, 150)}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  feedLoader: {
    marginTop: 400,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  postContainer: {
    flexDirection: "column",
    backgroundColor: "#e0e0e0",
    flex: 1,
    justifyContent: "center",
    borderRadius: 6,
    borderWidth: 3,
    borderColor: "#008ECC",
    width: "100%",
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,

    height: 380,
  },
  postStyle: {
    margin: 10,
    marginRight: 20,
  },
  imageContainer: {
    margin: 0,
    paddingTop: 0,
    flex: 0.7,
  },
  postImageStyles: {
    height: 130,
    width: "100%",
    height: "100%",
  },
  postTextStyles: {
    flexDirection: "column",
    flex: 0.3,
  },
  locationStyles: {
    fontWeight: "bold",
    marginLeft: 3,
    fontSize: Dimensions.get("window").width * 0.045,
  },
  authorStyle: {
    paddingTop: 2,
    color: "#FFFFFF",
    backgroundColor: "#008ECC",
    marginLeft: 3,
    width: "25%",
    textAlign: "center",
    borderRadius: 5,
  },
  descriptionStyle: {
    color: "grey",
    height: "100%",
    margin: "2%",
    textAlign: "justify",
  },
});
