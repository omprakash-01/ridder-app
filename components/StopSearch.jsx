import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView
} from "react-native";
import BottomSheet from "react-native-gesture-bottom-sheet";
import Search from "./Search";

const StopSearch = () => {
  // Create a ref for the BottomSheet
  const bottomSheetRef = useRef(null);

  const showBottomSheet = () => {

    bottomSheetRef.current.show(); // Show the BottomSheet when button is pressed
  };

  return (
    <SafeAreaView style={Styles.container}>
    
    </SafeAreaView>
  );
};

export default StopSearch;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#eaf6fe",
    flex: 1,
    alignItems: "center",
    justifyContent: "center", // Ensure content is centered
    height: "100%" // Ensure it takes full screen height
  },
  title: {
    backgroundColor: "#dceaf4",
    flexDirection: "row",
    justifyContent: "space-between", // Adjusted for better spacing
    height: 60,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20 // Added padding to avoid edge-to-edge alignment
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
    height: 160,
    resizeMode: "contain"
  },
  text: {
    textAlign: "center",
    marginVertical: 20,
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
    marginTop: 20
  },
  btnText: {
    fontSize: 12,
    fontWeight: 400,
    fontFamily: "Inter"
  }
});
