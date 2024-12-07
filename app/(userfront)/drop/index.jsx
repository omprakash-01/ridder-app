import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Map from "../../../components/Map";
import { useRouter } from "expo-router";
import Animated, {  SlideInRight, } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const Drop = () => {
    const router=useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={styles.container} entering={SlideInRight.duration(500)}>
        {/* Map */}
        <View style={styles.mapContainer}>
          <Map />
        </View>

        {/* Bottom Sheet */}
        <View style={styles.bottomSheet}>
          <View style={styles.topContainer}>
            <Text style={styles.title}>Select your location</Text>
            <TouchableOpacity style={styles.changeButton}>
              <Text style={styles.changeButtonText}>Change</Text>
            </TouchableOpacity>
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
          <TouchableOpacity
            style={styles.selectButton}
            onPress={() => router.push("/confirmpickup")}
          >
            <Text style={styles.selectButtonText}>Select Drop</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mapContainer: {
    height: 540,
    overflow: "hidden",
    width: "100%"
  },

  bottomSheet: {
    backgroundColor: "white",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    width: "100%",
    paddingVertical: 30,
    paddingHorizontal: 30
  },
  title: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 20
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  changeButton: {
    borderRadius: 10,
    borderColor: "#bfbfbf",
    width: 100,
    height: 20,
    borderWidth: 1
  },
  changeButtonText: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 20,
    textAlign: "center"
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
    borderColor: "rgb(232, 232, 232, )"
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

  selectButton: {
    backgroundColor: "#27A4F2",
    width: 300,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    alignSelf: "center"
  },
  selectButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 22
  }
});

export default Drop;
