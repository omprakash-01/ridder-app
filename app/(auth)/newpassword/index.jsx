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
import Animated, { SlideInRight } from "react-native-reanimated";

function NewPasswordScreen() {
    const router=useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={styles.content} entering={SlideInRight.duration(500)}>
        {/* Back Button */}
        <View>
          <TouchableOpacity style={styles.backButton} onPress={()=>router.push("/otpverification")}>
            <Icon5 name="chevron-left" size={20} color="#1E232C" />
          </TouchableOpacity>
          {/* Title */}
          <Text style={styles.title}>Create new password</Text>
          {/* Subtitle */}
          <Text style={styles.subtitle}>
            Your new password must be unique from those previously used.
          </Text>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="New Password"
              placeholderTextColor="#8391A1"
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#8391A1"
            />
          </View>

          {/* Verify Button */}
          {/* <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Reset Password</Text>
          </TouchableOpacity> */}
          <TouchableOpacity style={styles.registerButton} onPress={()=>router.push("/passwordchanged")}>
            <Text style={styles.registerButtonText}>Reset Password</Text>
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
    borderColor: "#E8ECF4",
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: "#fff"
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
    marginTop: 30
  },
  input: {
    backgroundColor: "#f3f3f9",
    borderRadius: 8,
    padding: 16,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#E8ECF4",
    borderWidth:0,
    outlineStyle:"none"
  },
  registerButton: {
    backgroundColor: "#1E232C",
    borderRadius: 8,
    padding: 18,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 35
  },
  registerButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600"
  }
});

export default NewPasswordScreen;
