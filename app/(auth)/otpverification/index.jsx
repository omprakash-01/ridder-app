import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import {useRouter} from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { SlideInRight } from "react-native-reanimated";

function OtpVerificationScreen() {
    const router=useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={styles.content} entering={SlideInRight.duration(500)}>
        {/* Back Button */}
        <View>
          <TouchableOpacity style={styles.backButton} onPress={()=>router.push("/forgetpassword")}>
            <Icon5 name="chevron-left" size={20} color="#1E232C" />
          </TouchableOpacity>
          {/* Title */}
          <Text style={styles.title}>OTP Verification</Text>
          {/* Subtitle */}
          <Text style={styles.subtitle}>
            Enter the verification code we just sent on your email address.
          </Text>

          {/* OTP Input Fields */}
          <View style={styles.inputContainer}>
            {Array(4)
              .fill("")
              .map((_, index) => (
                <TextInput
                  key={index}
                  style={styles.input}
                  maxLength={1}
                  keyboardType="numeric"
                  placeholder="•"
                  placeholderTextColor="#8391A1"
                />
              ))}
          </View>

          {/* Verify Button */}
          {/* <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Verify</Text>
          </TouchableOpacity> */}
          <TouchableOpacity style={styles.registerButton} onPress={()=>router.push("/newpassword")}>
            <Text style={styles.registerButtonText}>Verify</Text>
          </TouchableOpacity>
        </View>
        {/* Resend Link */}
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn’t receive code? </Text>
          <TouchableOpacity>
            <Text style={styles.resendLink}>Resend</Text>
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 30
  },
  input: {
    width: 65,
    height: 65,
    backgroundColor: "#F7F8F9",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8ECF4",
    textAlign: "center",
    color: "#1E232C",
    fontFamily: "Urbanist",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    borderWidth:0,
    outlineStyle:"none"
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
  resendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 32
  },
  resendText: {
    color: "#1E232C",
    fontSize: 15,
    fontWeight: "500"
  },
  resendLink: {
    fontSize: 15,
    fontWeight: "600",
    color: "#27A4F2"
  }
});

export default OtpVerificationScreen;
