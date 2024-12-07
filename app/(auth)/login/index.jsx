import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { SlideInRight, } from "react-native-reanimated";

function LoginScreen() {
    const router=useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        entering={SlideInRight.duration(500)}
        style={styles.content}
      >
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.push("/")}>
          <Icon5 name="chevron-left" size={20} color="#1E232C" />
        </TouchableOpacity>
        {/* Title */}
        <Text style={styles.title}>Welcome back! Glad to see you, Again!</Text>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#8391A1"
          />
          <View style={styles.passwordWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#8391A1"
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={togglePasswordVisibility}
            >
              <Icon5
                name={isPasswordVisible ? "eye" : "eye-slash"}
                size={20}
                color="#8391A1"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Forgot Password */}

        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={() => router.push("/forgetpassword")}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={()=>router.push("/home")}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Social Login Section */}
        <View style={styles.socialLoginSection}>
          <Text style={styles.socialLoginText}>Or Login with</Text>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require("../../../assets/images/facebook.svg")}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require("../../../assets/images/google.svg")}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require("../../../assets/images/apple.svg")}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Register Link */}
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't have an account? </Text>

          <TouchableOpacity onPress={() => router.push("/register")}>
            <Text style={styles.registerLink}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0E2F0"
  },
  content: {
    flex: 1,
    padding: 24
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    color: "#1E232C",
    backgroundColor: "#fff",
    borderRadius: 12,
    borderRadius: 12
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#1E232C",
    marginTop: 32,
    marginBottom: 32,
    lineHeight: 36
  },

  inputContainer: {
    gap: 16
  },
  input: {
    backgroundColor: "#f3f3f9",
    borderRadius: 8,
    padding: 16,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#E8ECF4",
    borderWidth: 0,
    outlineStyle: "none"
  },
  passwordWrapper: {
    position: "relative"
  },
  eyeIcon: {
    position: "absolute",
    right: 16,
    top: 16
  },
  forgotPassword: {
    alignItems: "flex-end",
    marginTop: 16,
    marginBottom: 24
  },
  forgotPasswordText: {
    color: "#6A707C",
    fontSize: 14,
    fontWeight: "600"
  },
  loginButton: {
    backgroundColor: "#1E232C",
    borderRadius: 8,
    padding: 18,
    alignItems: "center",
    marginBottom: 32
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600"
  },
  socialLoginSection: {
    alignItems: "center",
    gap: 24
  },
  socialLoginText: {
    color: "#6A707C",
    fontSize: 14,
    fontWeight: "600"
  },
  socialButtons: {
    flexDirection: "row",
    gap: 16
  },
  socialButton: {
    width: 105,
    height: 56,

    justifyContent: "center",
    alignItems: "center"
  },
  socialIcon: {
    width: 24,
    height: 24
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 32
  },
  registerText: {
    color: "#1E232C",
    fontSize: 15,
    fontWeight: "500"
  },
  registerLink: {
    color: "#35C2C1",
    fontSize: 15,
    fontWeight: "600"
  }
});

export default LoginScreen;
