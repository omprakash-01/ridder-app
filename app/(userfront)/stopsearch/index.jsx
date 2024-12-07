import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import Map from "../../../components/Map";
import { Link, } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { SlideInRight } from "react-native-reanimated";

const StopSearch = () => {

  return (
    <SafeAreaView style={Styles.container}>
      <Animated.View entering={SlideInRight.duration(500)}>
        <View style={Styles.mapContainer}>
          <Map />
        </View>
        <View style={Styles.bottomContainer}>
          <View style={Styles.title}>
            <Text style={Styles.titleLeft}>Looking for Bike</Text>
            <TouchableOpacity style={Styles.titleButton}>
              <Text style={Styles.titleButtonText}>Trip Details</Text>
            </TouchableOpacity>
          </View>

          <View style={Styles.imageContainer}>
            <Image
              source={require("../../../assets/images/search.gif")}
              style={Styles.image}
            />
          </View>

          <Text style={Styles.text}>
            Connecting you with a driver in a few minutes
          </Text>
          <Link href="/search">
            <TouchableOpacity style={Styles.btnContainer}>
              <Text style={Styles.btnText}>Stop Searching</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default StopSearch;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaf6fe"
  },
  bottomContainer: {
    backgroundColor: "#eaf6fe",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  mapContainer: {
    height: 400,
    overflow: "hidden",
    width: "100"
  },
  title: {
    backgroundColor: "#dceaf4",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20
  },
  titleLeft: {
    fontSize: 16,
    fontWeight: "600"
  },
  titleButton: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 5,
    borderRadius: 10,
    paddingHorizontal: 8,
    backgroundColor: "#eaf6fe"
  },
  titleButtonText: {
    fontSize: 12,
    fontWeight: "500"
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 200,
    height: 140,
    resizeMode: "contain"
  },
  text: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 12,
    fontWeight: 400,
    fontFamily: "Inter"
  },
  btnContainer: {
    borderWidth: 1,
    borderColor: "rgba(39, 164, 242, 1)",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 265,
    height: 30,
    marginTop: 10
  },
  btnText: {
    fontSize: 12,
    fontWeight: 400,
    fontFamily: "Inter"
  }
});
