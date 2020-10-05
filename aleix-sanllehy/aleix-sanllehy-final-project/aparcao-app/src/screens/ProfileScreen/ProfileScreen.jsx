import React, { useEffect, useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { Picker } from "@react-native-community/picker";
import { loadMakes, loadModels } from "../../actions/carsActions";
import { selectCarService } from "../../services/selectCarService";
import { toast } from "../../_helpers/toast";
import authStore from "../../stores/authStore";
import carsStore from "../../stores/carsStore";
import styles from "./styles";

const image = require("../../../assets/backgrounds/jdm.jpg");

function ProfileScreen({ navigation }) {
  const [user, setUser] = useState(authStore.getUser());
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  const [message, setMessage] = useState(undefined);
  useEffect(() => {
    authStore.addChangeListener(onMessageChange);
    setMessage(undefined);
    return () => {
      authStore.removeChangeListener(onMessageChange);
    };
  }, [message]);
  function onMessageChange() {
    setUser(authStore.getUser());
    setMessage(authStore.getMessage());
  }

  useEffect(() => {
    carsStore.addChangeListener(onChange);
    if (makes.length === 0) loadMakes();
    return () => {
      carsStore.removeChangeListener(onChange);
    };
  }, []);

  function onChange() {
    setMakes(carsStore.getMakes());
  }

  useEffect(() => {
    carsStore.addChangeListener(onMakeChange);
    if (!models) loadModels({ make: selectedMake });
    return () => {
      carsStore.removeChangeListener(onMakeChange);
    };
  }, [makes]);

  function onMakeChange() {
    setModels(carsStore.getModels());
  }

  return (
    <View style={styles.container}>
      {message ? toast(message) : null}

      <ImageBackground source={image} style={styles.image} />
      <View style={styles.body}>
        <Text>{user.name} profile</Text>
        <Text>Select your car</Text>
        <Text>
          Current car: {user.make} {user.model}
        </Text>

        <View style={styles.picker}>
          <Picker
            selectedValue={selectedMake}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedMake(itemValue);
              loadModels({ make: itemValue });
            }}
          >
            {makes &&
              makes.map((make) => (
                <Picker.Item
                  key={make._id}
                  label={make.make}
                  value={make.make}
                />
              ))}
          </Picker>
        </View>

        <View style={styles.picker}>
          <Picker
            selectedValue={selectedModel}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedModel(itemValue);
            }}
          >
            {models &&
              models.map((model) => (
                <Picker.Item
                  key={model._id}
                  label={model.model}
                  value={model}
                />
              ))}
          </Picker>
        </View>

        <View style={styles.top_row_buttons}>
          <TouchableOpacity
            onPress={(e) => {
              e.preventDefault();
              selectCarService(user, selectedModel);
              navigation.navigate("Home");
            }}
            style={(styles.button, styles.top_row_button)}
          >
            <Text style={styles.button_text}>Apply</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Settings")}
            style={styles.top_row_button}
          >
            <Text style={styles.button_text}>Settings</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => authStore.logout()}
          style={styles.button}
        >
          <Text style={styles.button_text}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProfileScreen;
