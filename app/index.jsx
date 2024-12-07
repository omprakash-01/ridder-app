import { Link, useRouter } from "expo-router";
import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { SlideInRight,  } from "react-native-reanimated";

function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={styles.content}
        entering={SlideInRight.duration(500)}
      >
        {/* Image Section */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/taxi.png")}
            style={styles.image}
          />
        </View>

        {/* Login Button */}
        <TouchableOpacity
          style={styles.loginContainer}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        {/* Register Button */}
        <TouchableOpacity
          style={styles.registerContainer}
          onPress={() => router.push("/register")}
        >
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>

        {/* Guest Text */}
        <TouchableOpacity>
          <Text style={styles.guestText}>Continue as guest</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0E2F0",
    padding: 16
  },
  content: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16
  },
  imageContainer: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  loginContainer: {
    backgroundColor: "#1E232C",
    borderRadius: 8,
    height: 56,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16
  },
  loginText: {
    color: "#E0E2F0",
    fontSize: 16,
    fontWeight: "600"
  },
  registerContainer: {
    backgroundColor: "#E0E2F0",
    borderColor: "#1E232C",
    borderWidth: 1,
    borderRadius: 8,
    height: 56,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16
  },
  registerText: {
    color: "#1E232C",
    fontSize: 16,
    fontWeight: "600"
  },
  guestText: {
    color: "#27A4F2",
    fontSize: 16,
    fontWeight: "700",
    textDecorationLine: "underline",
    marginTop: 35
  }
});
