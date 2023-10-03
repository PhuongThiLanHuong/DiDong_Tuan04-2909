import React from 'react';
import { StyleSheet, View ,Text, Image,TextInput,Pressable} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
const ForgotScreen = () => {
  const sendRequest = () => {
    // Gửi request lấy dữ liệu từ server
    alert("Send request to server");
  }

  return (
    <LinearGradient colors={["#a6f5f5", "#00CCF9"]} style={styles.container}>
     <View style={styles.logoContainer}>
      <Image style={styles.logo} />
      <Text style={styles.text}>FORGET</Text>
      <Text style={styles.text}>PASSWORD</Text>
      <Text style={styles.bodySubText}>Provide your email for which you want to reset your password</Text>
      <View style={styles.inputView}>
      <Icon style={styles.emailIcon} name="envelope" size={20} color="#000" />
      <TextInput style={styles.emailText} placeholder="Email" />
      </View>
      <Pressable style={styles.button} onPress={sendRequest}>
        <Text style={styles.buttonText}>NEXT</Text>
      </Pressable>
    </View>
    
        </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex', // Đặt hiển thị thành flex
    flex: 1, // Đặt flex thành 1
    backgroundColor: "linear-gradient(135deg, #CBF4F6, #00CCF9)",
    width: '100%', // Đặt chiều rộng thành 100%
    height: '100%', // Đặt chiều cao thành 100%
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
  },
  logo: {
    width: 250,
    height: 150,
  },
  text: {
    textAlign: 'center', // Căn giữa theo chiều ngang
    justifyContent: 'center', // Căn giữa theo chiều dọc
    fontSize: 30, // Đặt kích thước font chữ
    fontWeight: 'bold', // Đặt độ đậm của font chữ
  },
  bodySubText: {
    marginTop: 20,
    fontSize: 16,
    color: "#000000",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: 'bold', // Đặt độ đậm của font chữ

  },
  inputView: {
    backgroundColor: "#C4C4C4",
    width: "90%",
    marginBottom: 20,
    marginTop: 20,
  },
  emailIcon: {
    position: "absolute",
    marginTop: 15,
    marginLeft: 10,
  },
  emailText: {  
    height: 50,
    marginLeft: 40,
  },
  button :  {
    marginTop: 30,
    width: "90%",
    height: 50,
    backgroundColor: "#E3C000",
  },
  buttonText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
});

export default ForgotScreen;
