import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import {useRouter} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { SlideInRight, } from "react-native-reanimated";


function ForgetPasswordScreen() {
    const router=useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={styles.content} entering={SlideInRight.duration(500)} >
        {/* Back Button */}

        <View>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.push("/login")}
          >
            <Icon5 name="chevron-left" size={20} color="#1E232C" />
          </TouchableOpacity>
          {/* Title */}
          <Text style={styles.title}>Forgot Password?</Text>
          {/* Subtitle */}
          <Text style={styles.subtitle}>
            Don't worry! It occurs. Please enter the email address linked with
            your account.
          </Text>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#8391A1"
            />
          </View>

          {/* Send Code Button */}
          <TouchableOpacity style={styles.registerButton} onPress={()=>router.push("/otpverification")}>
            <Text style={styles.registerButtonText}>Send Code</Text>
          </TouchableOpacity>
        </View>
        {/* Register Link */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Remember Password? </Text>
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text style={styles.loginLink}>Login</Text>
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
    padding: 20,
    justifyContent: "space-between"
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    color: "#1E232C",
    backgroundColor: "#fff",
    borderRadius: 12
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#1E232C",
    marginTop: 20,
    marginBottom: 20,
    lineHeight: 30
  },
  subtitle: {
    color: "#8391A1",
    fontFamily: "Urbanist",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 24
  },
  inputContainer: {
    gap: 16,
    marginTop: 30,
    marginBottom: 30
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
  registerButton: {
    backgroundColor: "#1E232C",
    borderRadius: 8,
    padding: 18,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20
  },
  registerButtonText: {
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
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  socialIcon: {
    width: 24,
    height: 24
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 32
  },
  loginText: {
    color: "#1E232C",
    fontSize: 15,
    fontWeight: "500"
  },
  loginLink: {
    fontSize: 15,
    fontWeight: "600"
  }
});

export default ForgetPasswordScreen;
