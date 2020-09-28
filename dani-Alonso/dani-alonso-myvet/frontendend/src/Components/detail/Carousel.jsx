import React, { Component } from 'react';
import {
  
  View,
  Image,
  Dimensions,
  StyleSheet,
  
} from 'react-native';
import Carousel from 'react-native-looped-carousel';

const { width, height } = Dimensions.get('window');

export default class CarouselDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      Width:width,
      Height:height
    };
  }


  render() {
    return (
      <View style={{ flex: 1, borderRadius: 10, justifyContent:"center", alignItems:"center" }} onLayout={this._onLayoutDidChange}>
        <Carousel
          delay={4000}
          style={{width: Dimensions.get("window").width, height: Dimensions.get("window").height*0.33}}
          autoplay
          pageInfo={false}
         
        >
          <View >
            <Image style={{ width: Dimensions.get("window").width, height: Dimensions.get("window").height*0.33, borderRadius: 10}} source={require('../../../assets/cat.jpg')}></Image>
          </View>
          <View>
          <Image  style={{ width: Dimensions.get("window").width, height: Dimensions.get("window").height*0.33,borderRadius: 10}} source={require('../../../assets/chameleon.jpg')}></Image>
          </View>
          <View>
          <Image  style={{ width: Dimensions.get("window").width, height: Dimensions.get("window").height*0.33,borderRadius: 10}} source={require('../../../assets/sphynx.jpg')}></Image>
          </View>
          <View>
          <Image  style={{ width: Dimensions.get("window").width, height: Dimensions.get("window").height*0.33,borderRadius: 10}} source={require('../../../assets/dog3.jpg')}></Image>
          </View>
          <View>
          <Image  style={{ width: Dimensions.get("window").width, height: Dimensions.get("window").height*0.33,borderRadius: 10}} source={require('../../../assets/petauro.jpg')}></Image>
          </View>
        </Carousel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode:'stretch',
  },

 
 })
