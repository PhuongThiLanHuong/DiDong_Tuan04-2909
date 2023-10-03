import  React from  'react';

import { StyleSheet, View ,Text, Pressable,TextInput, Linking} from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  const openFB = () => {
    Linking.openURL("https://www.facebook.com/");
  }
  const openGmail = () => {
    Linking.openURL("https://mail.google.com/");
  }
  const openZaLo = () => {
    Linking.openURL("https://chat.zalo.me/");
  }
  const handleForgetPS = () => {
    navigation.navigate("ForgetScreen");
  };
  const [hidePassword, setHidePassword] = React.useState(true);

   return(
    <View>
        <Text style={styles.logoText}>LOGIN</Text>
         <View style={styles.inputView}>
        <View style={styles.passwordView}>
         <TextInput style={styles.text} placeholder="Email" />
          <TextInput style={styles.text} placeholder="Password" />
         <Pressable
          style={styles.eyeIcon}
          onPress={() => setHidePassword(!hidePassword)}
        >
          <Icon
            name={hidePassword ? "eye-slash" : "eye"}
            size={20}
            color="#000"
          />

        </Pressable>
          </View>
                  </View>
                  <Pressable style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </Pressable>
      <View style={styles.textContainer}>
      <Text style={{ textAlign: 'center' }}>When you agree to terms and condition</Text>
      <Text style={styles.bodySubText} onPress={handleForgetPS}>
        For got your password?
      </Text>
      <Text style={{ textAlign: 'center' }}>Or Login with</Text>

      </View>
      <View style={styles.iconContainer}>
      <Pressable onPress={openFB}>
        <View >
          <Icon name="facebook" size={30} backgroundColor="#3b5998" />
        </View>
      </Pressable>
      <Pressable onPress={openZaLo} >
        <View>
          <Icon name="z" size={30} />
        </View>
      </Pressable>
      <Pressable openFB={openGmail}>
        <View>
          <Icon name="google" size={30} color="#DB4437" />
        </View>
      </Pressable>
    
    </View>
    </View>
   );
 }
 const styles = StyleSheet.create({
  logoText: {
    marginTop: 50,
    fontSize: 40,
    fontWeight: "bold",
    borderColor: "#55DAF7",
    textAlign: "center",
  },
  inputView:{
    marginTop: 40,
    width:"90%",
    marginLeft: 30,
  },
  text:{
    width: "94%",
    height: 60,
    borderColor: "#000",
    backgroundColor: "#fff",
    marginTop: 30,
    marginBottom: 10,
    padding: 15,
  },
  eyeIcon: {
    position: "absolute",
    marginTop: 150,
    marginLeft: "85%",
  },
  button: {
    marginTop: 30,
    marginLeft: 30,
    width: "84%",
    height: 60,
    backgroundColor: "red",
  },
  buttonText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  textContainer: {
    marginTop: 20,
  },
  bodySubText: {
    fontSize: 16,
    color: "blue",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 15,
  },
  iconContainer: {
    marginTop: 60,
    marginLeft: 30,
    width: "80%",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "#D8EFDE",
  },
 });
    export default Login;