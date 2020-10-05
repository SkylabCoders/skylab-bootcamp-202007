import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";

const image = require("../../../assets/backgrounds/chaos.jpg");

function AboutScreen({ navigation }) {
  return (
    <>
      <ImageBackground source={image} style={styles.background} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.body}>
            <Text style={styles.paragraph}>
              Aparcao is a mobile-oriented app purposed on finding free spots to
              park a car in the street.
            </Text>
            <Text style={styles.paragraph}>
              The aim for this project is to reduce the time spent on driving by
              arriving somewhere and find a place to park when no other options
              are available.
            </Text>
            <Text style={styles.paragraph}>
              The application is inspired by other parking apps where you can
              find private parkings o pay the parking fare in major cities with
              your smartphone.
            </Text>
            <Text style={styles.paragraph}>
              The main difference (right now) is that this application comes to
              be community-driven, where users can communicate to each other
              indirectly by telling there's a parking spot nearby when they take
              the car out.
            </Text>
            <Text style={styles.paragraph}>
              As of today, this Skylab final project made in 2.5 weeks has
              become the result of learning the JavaScript fundamentals as some
              incredible technologies such as React Native.
            </Text>
            <Text style={styles.paragraph}>
              Special thanks to Skylab Coders Academy and anyone involved in the
              2020-07 Bootcamp.
            </Text>
            <Image
              onPress={() => Linking.openURL("http://google.com")}
              style={styles.skylab}
              source={require("../../../assets/png/social-media/skylab.png")}
            />
            <Text style={styles.paragraph}>Follow us on...</Text>
            <View style={styles.image_row}>
              <Image
                style={styles.image}
                source={require("../../../assets/png/social-media/facebook_256.png")}
              />
              <Image
                style={styles.image}
                source={require("../../../assets/png/social-media/github_256.png")}
              />
              <Image
                style={styles.image}
                source={require("../../../assets/png/social-media/linkedin_256.png")}
              />
              <Image
                style={styles.image}
                source={require("../../../assets/png/social-media/twitter_256.png")}
              />
              <Image
                style={styles.image}
                source={require("../../../assets/png/social-media/youtube_256.png")}
              />
            </View>

            <View style={styles.button_row}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.button_text}>Back to Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default AboutScreen;
