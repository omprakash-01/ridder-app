import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import Animated, {
  SlideInRight,
} from "react-native-reanimated";
import {useRouter} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";


function RegisterScreen() {
    const router=useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={styles.content}
        entering={SlideInRight.duration(500)}
      >
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={()=>router.push("/")}>
          <Icon5 name="chevron-left" size={20} color="#1E232C" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>Hello! Register to get started</Text>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#8391A1"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#8391A1"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#8391A1"
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#8391A1"
          />
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>

        {/* Social Login Section */}
        <View style={styles.socialLoginSection}>
          <Text style={styles.socialLoginText}>Or Register with</Text>
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
                source={require("../../../assets/images/apple.png")}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Login Link */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={()=>router.push("/login")}>
            <Text style={styles.loginLink}>Login Now</Text>
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
    padding: 20
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    color: "#1E232C",
    borderColor: "#E8ECF4",
    borderRadius: 12,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor:"#fff"
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#1E232C",
    marginTop: 20,
    marginBottom: 20,
    lineHeight: 30
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
    outlineStyle:"none",
    borderWidth:0
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
    color: "#35C2C1",
    fontSize: 15,
    fontWeight: "600"
  }
});

export default RegisterScreen;
