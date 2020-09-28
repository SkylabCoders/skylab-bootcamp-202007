import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image,
    ImageBackground
} from "react-native"
import { ScrollView } from 'react-native-gesture-handler';
import background from "../../../assets/location20.png";
import {loadVetsQuestionList} from "../../actions/questionVetActions"
import detailStore from '../../stores/detailStore';


export default function QuestionVet(navigation) {
  
    const [questionVets, setQuestionVets]= useState([]);

    useEffect(()=>{
      detailStore.addChangeListener(onChange);
      if(questionVets.length ===0){loadVetsQuestionList()}
    }, [])

    function onChange(){
      
      setQuestionVets(detailStore.getShowVetQuestions())
    }

    function handleSubmit(){
      loadVetsQuestionList()

  } 
      return (<>
        <View style={styles.container}>
            <ImageBackground source={background} style={styles.background}>
        <TouchableOpacity style={styles.button}
           onPress={()=> navigation.navigate("Detail")}>
            <Image style={styles.back}
            source={require("../../../assets/back.png")}
            ></Image>
          </TouchableOpacity>
        
          <ScrollView>
          {questionVets && questionVets.map((item)=>{
            return(
              <View 
              key={Math.random()}
              style={styles.inputView__question}>
              <Text
                  multiline={true}
                  >Name: {item.name}</Text>

                   <Text
                  multiline={true}
                  >eMail: {item.email}</Text>

                  <Text
                  multiline={true}
                  >Telf: {item.telf}</Text>

                  <Text
                  multiline={true}
                  >Question: {item.question}</Text>
              </View>
            )
          })}
            </ScrollView>
       
        
        </ImageBackground>
      </View>
      </>);
}
  
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
      },
      button: {
        
        borderColor: "black",
        marginTop:30,
        marginBottom:30,
        borderWidth: 1,
        marginLeft: 330,
        height: 30,
        width: 30,
        backgroundColor: "white",
        borderRadius:19
      },
      back:{
        width:"30%",
        height: 20,
        marginLeft:8,
        marginTop:4
      },
      background: {
        flex: 1,
        resizeMode: "cover",
        opacity:1
      },
   
      inputView__question:{
        
        backgroundColor:"#E9E4F0",
        borderRadius:25,
        
        opacity:0.8,
        marginBottom:5,
        justifyContent:"center",
        padding:20,
        flexShrink: 1,

      },
      inputText:{
          height:"90%",
          color:"black",
          
      },
      loginBtn:{
        width:150,
        backgroundColor:"#00AF80",
        borderRadius:25,
        height:50,
        alignItems:"center",
        marginLeft:125,
        justifyContent:"center",
        
        marginBottom:10,
      }
  });