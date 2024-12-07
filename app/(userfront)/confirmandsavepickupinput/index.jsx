import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
import Map from "../../../components/Map";
import Animated, { SlideInRight } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";


const ConfirmAndSavePickupinput = () => {
    const router=useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={styles.container} entering={SlideInRight.duration(500)}>
        {/* Map */}
        <View style={styles.mapContainer} >
          <Map />
        </View>

        {/* Bottom Sheet */}
        <View style={styles.bottomSheet}>
          <View style={styles.topContainer}>
            <Text style={styles.title}> Double check pickup point</Text>
          </View>

          <View style={styles.locationContainer}>
            <View>
              <Image source={require("../../../assets/images/drop.svg")} />
            </View>
            <View>
              <Text style={styles.locationText}>Vaishali sector 2</Text>
              <Text style={styles.addressText}>
                23, st 32 a/6 xyc nagar extension delhi 32
              </Text>
            </View>
          </View>

          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Others</Text>
            <View style={styles.hr}></View>
          </View>

          {/* Input for location */}
          <View style={styles.inputConatiner}>
            <TextInput
              style={styles.input}
              placeholder="eg: Grandma place"
              placeholderTextColor="#A0A0A0"
            />
          </View>

          {/* Button to show BottomSheet */}
          <TouchableOpacity
            style={styles.selectButton}
            onPress={()=>router.push("/faredetails")}
          >
            <Text style={styles.selectButtonText}>Confirm & Save Pickup</Text>
          </TouchableOpacity>
        </View>

        {/* BottomSheet component with FareDetails */}

      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mapContainer: {
    height: 440,
    overflow: "hidden",
    width: "100"
  },
  bottomSheet: {
    backgroundColor: "#E0E2F0",

    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,

    width: "100%",
    paddingVertical: 30,
    paddingHorizontal: 30,
    height: 280
  },
  title: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 20
  },
  subtitle: {
    color: "rgba(0, 0, 0, 0.50)",
    fontFamily: "Inter",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400"
  },
  subtitleContainer: {
    flexDirection: "row",
    marginBottom: 10,
    gap: 10,
    alignItems: "center"
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  locationContainer: {
    marginVertical: 16,
    padding: 10,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    borderColor: "rgb(232, 232, 232)"
  },
  locationText: {
    color: "#000",
    fontFamily: "Nunito",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 22
  },
  addressText: {
    color: "rgba(0, 0, 0, 0.50)",
    fontFamily: "Nunito",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "500"
  },
  inputConatiner: {
    marginBottom: 10,
    alignItems: "center"
  },
  input: {
    height: 25,
    width: 280,
    borderWidth: 0.2,
    borderColor: "rgba(0, 0, 0, 0.50)",
    backgroundColor: "#f3f3f9",
    color: "rgba(0, 0, 0, 0.60)",
    fontFamily: "Inter",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "400",
    borderRadius: 10,
    paddingLeft: 20,
    borderWidth:0,
    outlineStyle:"none"
  },
  selectButton: {
    backgroundColor: "#2b2d55",
    width: 300,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    alignSelf: "center",
    marginTop:5
  },
  selectButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 22
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.50)",
    width: "80%"
  }
});

export default ConfirmAndSavePickupinput;
