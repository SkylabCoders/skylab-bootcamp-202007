import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
 Dimensions,
  Image,
  
} from "react-native";
import background from "../../../assets/location20.png";
import detailStore from "../../stores/detailStore"
import mapStore from "../../stores/mapStore"
import Carousel from "../../Components/detail/Carousel"

export default function Detail({route, navigation}) {


  const [detailVets, setDetailVets] = useState(mapStore.getSpots())
  
  const {vet} = route.params;

  useEffect(()=>{
    detailStore.addChangeListener(onChange);
    
    if(!detailVets) detailStore.getVetDetails()
  }, [])
  function onChange(){
    setDetailVets(detailStore.getVetDetails())
    
    return ()=> detailStore.removeChangeListener(onChange) 
  }

  
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.title}>{vet.vetname}</Text>
          <TouchableOpacity style={styles.button}
           onPress={()=> navigation.navigate("Home")}>
            <Image style={styles.back}
            source={require("../../../assets/back.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      
        <View style={styles.carousel}>  
          <Carousel/>
        </View>

        <View style={styles.text__tag}>
        {vet.tags && vet.tags.map(tag =><Text key={tag} style={styles.text__tagsDetail}>{tag} {'|'} </Text>)}
        </View>
        <View style={styles.text__comments}>
          <Text style={styles.text__commentsText}>Best vet in the world</Text>
          <Text style={styles.text__commentsText}>They take good care of animals</Text>
        </View>
        <View style={styles.bottom__buttons}>
          
          <TouchableOpacity 
          style={styles.bottom__buttonContact}
          onPress={()=> navigation.navigate("Question")}
          >
            <Text style={styles.bottom__buttonContactText}>CONTACT</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    resizeMode: "cover",
    opacity:1
  },

  header: {
    flex: 0.4,
    flexDirection: "row",
    top: 30,
  },
  title: {
    flex: 10,
    fontSize: 32,
    marginBottom:10,
    height: 50,
    marginLeft:59
  },
  button: {
    flex: 1,
    borderColor: "black",
    marginTop:8,
    borderWidth: 1,
    marginRight: 20,
    height: 30,
    width: 10,
    backgroundColor: "white",
    borderRadius:19
  },
  back:{
    width:"30%",
    height: 20,
    marginLeft:8,
    marginTop:4
  },
 
  text__tag: {
    flexDirection: "row",
    flexWrap:"wrap",
    height:180
  },
  text__tagsDetail: {
    display: 'flex',
    flexDirection: "row",
    fontSize: 20,
    marginTop:15,
    marginLeft:3,
  },
  text__comments: {
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
    height:200,
    borderRadius:6,
    
    width:"90%",
    marginLeft:20
  },
  text__commentsText:{
    fontSize: 20,
  },
  bottom__buttons: {
    width: "30%",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius:11,
    marginLeft:140,
    marginTop:3
  },
  bottom__buttonContactText:{
    marginLeft:25,
    marginTop:3,
    
  },
  
  bottom__buttonContact: {
    borderColor: "black",
    borderWidth: 1,
    flex: 9,
     width: "10%",
     height: 30,
     borderRadius:9
  },
  carousel:{ 
    position:"relative",
    
    zIndex:1,
    height:"30%",
    borderRadius: 6,
    justifyContent:"center",
    width: Dimensions.get("window").width,
    marginTop:100
  },
  
 })
