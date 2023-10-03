import React from 'react';
import { StyleSheet, View ,Text, Pressable} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
const MainScreen = () => {
  const navigation = useNavigation();
  const handleLoginPress = () => {
    navigation.navigate("LoginScreen");

  };
  const handleSignupPress = () => {
    navigation.navigate("ForgetScreen");
  };

  return (
    <LinearGradient colors={["#a6f5f5", "#00CCF9"]} style={styles.container}>
    <View style={styles.circle} />
     <View style={styles.textContainer}>
      <Text style={styles.text}>GROW</Text>
      <Text style={styles.text}>YOUR BUSINESS</Text>
      <Text style={styles.bodySubText}>We will help you to grow your business using online server</Text>
      <Pressable onPress={handleLoginPress} style={styles.buttonLeft}>LOGIN</Pressable>
      <Pressable onPress={handleSignupPress} style={styles.buttonRight}>SIGNUP</Pressable>
      <Text style={styles.textSub}>HOW WE WORK?</Text>
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
  circle: {
    width: "140px",
    height: "140px",
    left: "130px",
    top: "90px",
    borderRadius: 50,
    borderWidth: 15, // Độ rộng của viền đen (có thể điều chỉnh)
    borderColor: 'black', // Màu viền đen
    backgroundColor: 'rgba(0, 0, 0, 0)', // Màu nền trong suốt
    borderRadius: 100, // Đặt độ cong để tạo hình tròn (50% của chiều rộng)
    display: 'flex', // Đặt hiển thị thành flex
  },
  textContainer: {
    marginTop: 120,
    marginLeft: 1,
  },
  textSub: {
    textAlign: 'center', // Căn giữa theo chiều ngang
    justifyContent: 'center', // Căn giữa theo chiều dọc
    fontSize: 20, // Đặt kích thước font chữ
    fontWeight: 'bold', // Đặt độ đậm của font chữ
    marginTop: 30,
  },
  text: {
    textAlign: 'center', // Căn giữa theo chiều ngang
    justifyContent: 'center', // Căn giữa theo chiều dọc
    fontSize: 30, // Đặt kích thước font chữ
    fontWeight: 'bold', // Đặt độ đậm của font chữ
  },
  bodySubText: {
    marginTop: 70,
    fontSize: 16,
    color: "#000000",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: 'bold', // Đặt độ đậm của font chữ

  },

  buttonLeft: {
    fontFamily: "Roboto",
    marginTop: 40,
    width: 120,
    height: 50,
    marginLeft: 30,
    fontSize: 20, // Đặt kích thước font chữ
    fontWeight: 'bold', // Đặt độ đậm của font chữ
    lineHeight: "23px",
    letterSpacing: "0em",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#E3C000",
  },
  buttonRight: {
    fontFamily: "Roboto",
    marginTop: -50,
    width: 125,
    height: 50,
    marginLeft: 230,
    fontSize: 20, // Đặt kích thước font chữ
    fontWeight: 'bold', // Đặt độ đậm của font chữ
    lineHeight: "23px",
    letterSpacing: "0em",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#E3C000",
  }

});

export default MainScreen;
