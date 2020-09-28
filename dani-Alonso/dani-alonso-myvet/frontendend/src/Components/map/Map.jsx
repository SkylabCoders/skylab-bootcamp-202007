import React, { useEffect, useState } from "react";
import {View, StyleSheet, Image, Text} from "react-native";

import { loadVets } from "../../actions/mapActions";
import mapStore from "../../stores/mapStore"
import MapView, { Marker, Callout } from "react-native-maps";

export default function Home({navigation}) {

  const [vets, setVets] = useState([])

  useEffect(()=>{
  mapStore.addChangeListener(onChange);
  
  if(vets.length=== 0) loadVets()
}, [])

function onChange(){
  setVets(mapStore.getSpots())
  
  return ()=> mapStore.removeChangeListener(onChange) 
}

return (
      <View style={styles.container}>
        <MapView style={styles.map}
        
          region = {{ 
              latitude: 41.38902836,
              longitude: 2.17871815,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
          }}
          >
              {vets && vets.map((vet)=> (
              <Marker 
              key={vet.latitude} coordinate={{
                latitude: vet.latitude,
                longitude: vet.longitude
              }} >
                <Image 
                style={styles.image}
                source={require("../../../assets/location.png")}
                />

                <Callout 
                style={styles.calloout}
                onPress={()=> navigation.navigate("Detail", {vet})}>
              <Text>{vet.vetname}</Text>
              <Text>{vet.horario}</Text>
                </Callout>
              
              </Marker>))}
          </MapView>
        
      </View>
    );
  }

  const styles = StyleSheet.create({

    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
  
   image:{ 
     width:58,
     height:58,
  },
  calloout:{

    width: 100,

  }
  })