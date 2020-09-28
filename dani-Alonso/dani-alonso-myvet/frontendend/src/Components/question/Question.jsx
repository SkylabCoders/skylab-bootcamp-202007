import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    Image,
    
} from "react-native"
import {createQuestion} from "../../actions/questionActions"

export default function Question({navigation}) {
  


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telf, setTelf] = useState('')
  const [question, setQuestion] = useState('')
  
  const handleButton=event =>{
    event.preventDefault()
    
    const user={name, email,telf,question}
    
    //cridar la funcio de l'actions i passar per parametre el user
    createQuestion(user)
  };
  
 
    
      return (<>
        <View style={styles.container}>
        <TouchableOpacity style={styles.button}
           onPress={()=> navigation.navigate("Question")}>
            <Image style={styles.back}
            
            source={require("../../../assets/back.png")}
            ></Image>
          </TouchableOpacity>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Name" 
            defaultValue= ""
            placeholderTextColor="#003f5c"
            onChangeText={ (name) => setName(name)}
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            defaultValue= ""
            placeholderTextColor="#003f5c"
            onChangeText={ (email) => setEmail(email)}
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Telf" 
            defaultValue= ""
            placeholderTextColor="#003f5c"
            onChangeText={ (telf) => setTelf(telf)}
            />
        </View>
        <View style={styles.inputView__question} >
          <TextInput  
            style={styles.inputText}
            placeholder="Question" 
            defaultValue= ""
            multiline={true}
            numberOfLines={10}
            placeholderTextColor="#003f5c"
            onChangeText={ (question) => setQuestion(question)}
            />
        </View>
       
        <TouchableOpacity style={styles.loginBtn}
         onPress={handleButton
          }
        >
          <Text style={styles.loginText}
          >
          Submit</Text>
        </TouchableOpacity>
       
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
        marginLeft: 290,
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
      inputView:{
        width:"80%",
        backgroundColor:"#E9E4F0",
        borderRadius:25,
        height:50,
        marginBottom:30,
        justifyContent:"center",
        padding:20,
        flexShrink: 1,
      },
      inputView__question:{
        width:"80%",
        backgroundColor:"#E9E4F0",
        borderRadius:25,
        height:150,
        marginBottom:20,
        justifyContent:"center",
        padding:20,
        flexShrink: 1,

      },
      inputText:{
          height:50,
          color:"#00AF80",
          
      },
      bottom__buttonContact: {
        borderColor: "black",
        flex: 9,
         width: "30%",
         height: 20,
         borderRadius:9
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#00AF80",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        
        marginBottom:10,
      }
  });