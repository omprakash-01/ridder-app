import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, } from "react-native";
import {useRouter} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { SlideInRight, } from "react-native-reanimated"


const PasswordChangedScreen = () => {
    const router=useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View entering={SlideInRight}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/images/Successmark.svg")}
            style={styles.socialIcon}
          />
        </View>

        <Text style={styles.title}>Password Changed!</Text>

        <Text style={styles.subtitle}>
          Your password has been changed successfully.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.buttonText}>Back to Login</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40
  },

  title: {
    color: "#1E232C",
    textAlign: "center",
    fontFamily: "Urbanist",
    fontSize: 26,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    marginBottom: 10
  },
  subtitle: {
    color: "#8391A1",
    textAlign: "center",
    fontFamily: "Urbanist",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 22.5,
    width: 226
  },
  button: {
    backgroundColor: "#1E232C",
    borderRadius: 8,
    padding: 18,
    alignItems: "center",
    marginBottom: 32,
    width: "100%",
    marginTop: 20
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600"
  }
});

export default PasswordChangedScreen;
