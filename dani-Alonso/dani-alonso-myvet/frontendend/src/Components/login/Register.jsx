import React , {useState}from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text
} from "react-native"
import {createUser} from "../../actions/authActions"

export default function Register({navigation}) {
  const [username, setUsername] = useState('')
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [password, setPassword] = useState('')

  const regUser=event =>{
    event.preventDefault()
    const newUserParams = {username, firstName, lastName, password}
    createUser(newUserParams)
    
  }
    
      return (<>
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
          <TextInput  
            style={styles.inputText}
            placeholder="First Name" 
            defaultValue= ""
            placeholderTextColor="#003f5c"
            onChangeText={ (firstName) => setFirstname(firstName)}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Last Name" 
            defaultValue= ""
            placeholderTextColor="#003f5c"
            onChangeText={ (lastName) => setLastname(lastName)}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Password" 
            defaultValue= ""
            secureTextEntry={true}
            placeholderTextColor="#003f5c"
            onChangeText={ (password) => setPassword(password)}/>
        </View>
       
        <TouchableOpacity style={styles.loginBtn}
        onPress={regUser}
        >
          <Text style={styles.loginText}
          >
          Register</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.loginText}
          onPress={()=> navigation.navigate("Login")}>Login</Text>
        </TouchableOpacity>
      </View>
      </>);
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
        padding:20,
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
        marginBottom:10,
      }
  });