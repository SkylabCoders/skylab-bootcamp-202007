import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text
} from "react-native";
import {loginUser} from "../../actions/authActions"


export default function Login({navigation}) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

   const logUser = event =>{
     
     event.preventDefault()
     const userParams = {username, password}
     
   
  
   loginUser(userParams)
  }
    
      return (

        <View style={styles.container}>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Username" 
            defaultValue= ""
            placeholderTextColor="#003f5c"
            onChangeText={ (username) => setUsername(username)}/>
        </View>
        <View style={styles.inputView} >
          <  TextInput
            style={styles.inputText}
            placeholder="Password" 
            defaultValue=""
            secureTextEntry={true}
            placeholderTextColor="#003f5c"
            onChangeText={ (password) => setPassword(password)}
            />
        </View>
       
        <TouchableOpacity style={styles.loginBtn}
        onPress={logUser}>
          <Text style={styles.loginText}
          
          >LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=> navigation.navigate("Register")}>
          <Text style={styles.loginText}
          >Register</Text>
        </TouchableOpacity>
      </View>
      );
    }
  
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputView:{
        width:"80%",
        backgroundColor:"#E9E4F0",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      inputText:{
          height:50,
          color:"#00AF80"
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#00AF80",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
  });