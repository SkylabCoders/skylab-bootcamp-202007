import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import {
  View,
  Text,
  TouchableNativeFeedback,
  ImageBackground,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import authStore from "../stores/authStore";
import feedStore from "../stores/feedStore";
import { Post } from "../screens/FeedComponent";
import { ScrollView } from "react-native-gesture-handler";

export default function ProfileComponent({ navigation }) {
  const [userInfo, setUserInfo] = useState(authStore.getUser());
  const [userAinguraData, setUserAinguraData] = useState(
    feedStore.getUsersAinguras(userInfo.username)
  );

  console.log(userAinguraData);

  useEffect(() => {
    authStore.addChangeListener(onChange);
    return () => {
      authStore.removeChangeListener(onChange);
    };
  }, []);

  function onChange() {
    setUserInfo(authStore.getUser());
  }

  return (
    <View>
      <View>
        <ImageBackground
          source={require("../../assets/aingura-back.jpg")}
          style={{ ...StyleSheet.absoluteFillObject }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View
            style={{
              backgroundColor: "#e0e0e0",
              width: "65%",
              padding: "2%",
              margin: "2%",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontSize: Dimensions.get("window").width * 0.08,
                fontWeight: "6",
                color: "#293133",
              }}
            >
              {userInfo.username} 's Profile
            </Text>

            <Text
              style={{
                fontSize: Dimensions.get("window").width * 0.04,
                fontWeight: "6",
                color: "#293133",
              }}
            >
              Name: {userInfo.firstName}
            </Text>
            <Text
              style={{
                fontSize: Dimensions.get("window").width * 0.04,
                fontWeight: "6",
                color: "#293133",
              }}
            >
              Lastname: {userInfo.lastName}
            </Text>
            <Text
              style={{
                fontSize: Dimensions.get("window").width * 0.04,
                fontWeight: "6",
                color: "#293133",
              }}
            >
              Created: {userInfo.createdDate}
            </Text>
          </View>
          <View style={{ width: "20%", height: "100%" }}>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple("#EEE")}
              onPress={() => authStore.logoutUser()}
            >
              <Image
                source={require("../../assets/logout.jpg")}
                style={{
                  width: Dimensions.get("window").width * 0.2,
                  height: Dimensions.get("window").height * 0.1,
                  margin: Dimensions.get("window").width * 0.04,
                  marginLeft: "auto",
                }}
              />
            </TouchableNativeFeedback>
          </View>
        </View>
        {userAinguraData.length === 0 ? (
          <Text>You didn't post any Aingura yet...</Text>
        ) : (
          <ScrollView>
            <Text>Ainguras you've posted</Text>
            <FlatList
              data={userAinguraData}
              renderItem={(post) => (
                <Post post={post} navigation={navigation} />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </ScrollView>
        )}
      </View>
    </View>
  );
}
