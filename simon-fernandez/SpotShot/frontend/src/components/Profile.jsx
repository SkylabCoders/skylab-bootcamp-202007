import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import stylesProfile from "../styles/profile-style";
import authStore from "../stores/authStore";
import spotStore from "../stores/spotStore";
import { deleteSpot } from "../actions/spotActions";
import { signOut } from "../actions/authActions";
import SpotListItem from "./SpotListItem";

const removeConfirm = (spotId) => {
  Alert.alert(
    "Are you sure you want to delete this spot?",
    "This will remove this spot permanently",
    [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Remove",
        onPress: () => deleteSpot({ spotId }),
        style: "destructive",
      },
    ]
  );
};

export default function Profile({ navigation }) {
  const [user, setUser] = useState(authStore.getUser());
  const [createdSpots, setCreatedSpots] = useState(
    spotStore.getCreatedSpots(user.username)
  );

  async function logOutUser() {
    await AsyncStorage.clear();
    signOut();
  }

  function onChange() {
    setUser(authStore.getUser());
    setCreatedSpots(spotStore.getCreatedSpots(user.username));
  }

  useEffect(() => {
    spotStore.addChangeListener(onChange);

    return () => {
      spotStore.removeChangeListener(onChange);
    };
  }, []);

  return (
    <View style={stylesProfile.profileContainer}>
      <ImageBackground
        source={
          user.image ? user.image : require("../Images/defaultProfile.jpg")
        }
        style={stylesProfile.backgroundImage}
      >
        <View style={stylesProfile.headerContainer}>
          <View></View>
          <TouchableOpacity
            style={stylesProfile.logOutButtonContainer}
            onPress={() => logOutUser()}
          >
            <Text style={stylesProfile.logOutButton}>logOut</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={stylesProfile.favouriteContainer}
        >
          <View>
            <Text style={stylesProfile.userName}>
              {user.firstName ? user.firstName : "Guest user"}
            </Text>
            <Text style={stylesProfile.userName}>{user.lastName}</Text>
          </View>
          {createdSpots.length !== 0 ? (
            <Text style={stylesProfile.titleCreatedSpot}>Created Spots</Text>
          ) : (
            <Text style={stylesProfile.titleCreatedSpot}>
              You did not create any spot yet :(
            </Text>
          )}

          {createdSpots.map((item) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Spot", { id: item._id })}
              key={item._id}
            >
              <TouchableOpacity
                style={stylesProfile.deleteButton}
                onPress={() => removeConfirm(item._id)}
              >
                <Text style={stylesProfile.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
              <SpotListItem spot={item} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
