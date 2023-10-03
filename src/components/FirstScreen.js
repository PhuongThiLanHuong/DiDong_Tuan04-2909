import React from 'react';
import { StyleSheet, View ,Text, Pressable} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const FirstScreen = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate("MainScreen");

  };

  const handleSignupPress = () => {
  };

  return (
    <View style={styles.container}>
    <View style={styles.circle} />
     <View style={styles.textContainer}>
      <Text style={styles.text}>GROW</Text>
      <Text style={styles.text}>YOUR BUSINESS</Text>
      <Text style={styles.bodySubText}>We will help you to grow your business using online server</Text>
     </View>
     <View>
     <Pressable onPress={handleLoginPress} style={styles.buttonLeft}>LOGIN</Pressable>
     <Pressable onPress={handleSignupPress} style={styles.buttonRight}>SIGNUP</Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex', // Đặt hiển thị thành flex
    flex: 1, // Đặt flex thành 1
    backgroundColor: '#00CCF9', // Đặt màu nền thành xanh dương
    width: '100%', // Đặt chiều rộng thành 100%
    height: '100%', // Đặt chiều cao thành 100%
  },
  circle: {
    width: "140px",
    height: "140px",
    top: "105px",
    left: "130px",
    borderRadius: 50,
    borderWidth: 15, // Độ rộng của viền đen (có thể điều chỉnh)
    borderColor: 'black', // Màu viền đen
    backgroundColor: 'rgba(0, 0, 0, 0)', // Màu nền trong suốt
    borderRadius: 100, // Đặt độ cong để tạo hình tròn (50% của chiều rộng)
  },
  textContainer: {
    marginTop: 140,
    marginLeft: 1,
  },
  text: {
    textAlign: 'center', // Căn giữa theo chiều ngang
    justifyContent: 'center', // Căn giữa theo chiều dọc
    fontSize: 40, // Đặt kích thước font chữ
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

export default FirstScreen;
