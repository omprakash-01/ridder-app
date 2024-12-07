import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import BottomSheet from "react-native-gesture-bottom-sheet";
import  { useRef } from "react";
import StopSearch from "./StopSearch";

const FareDetails = () => {
      const bottomSheetRef = useRef(null);

      const showBottomSheet = () => {
        bottomSheetRef.current.show(); 
      };


  return (
    <View style={styles.container}>
      <View style={styles.antdesignContainer}>
        <TouchableOpacity>
          <AntDesign name="close" size={30} />
        </TouchableOpacity>
      </View>
      {/* Bottom Sheet */}
      <View style={styles.bottomSheet}>
        <Text style={styles.title}>Bike fare details</Text>
        <View style={styles.subtitleContaier}>
          <Text style={styles.subtitle}>
            Total estimated fare price including taxes
          </Text>
          <Text style={styles.price}>₹78</Text>
        </View>
        <View style={styles.hr}></View>
        <View style={styles.fare}>
          <View style={styles.fareItemContainer}>
            <Text style={styles.fareItem}>Ride fare</Text>
            <Text style={styles.fareItem}>₹78</Text>
          </View>
          <Text style={styles.fareNote}>
            *Price may vary if you change pick or drop location, toll area
          </Text>
          <Text style={styles.fareNote}>
            Get quick comfortable rides at the lowest price!
          </Text>
        </View>
        <TouchableOpacity style={styles.selectButton} onPress={showBottomSheet}>
          <Text style={styles.selectButtonText}>GOT IT</Text>
        </TouchableOpacity>
      </View>
      <BottomSheet ref={bottomSheetRef} height={350} hasDraggableIcon>
        <StopSearch/>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  antdesignContainer: {
    backgroundColor: "#fff",
    position: "absolute",
    padding: 5,
    borderRadius: 50,
    top: 330,
    right: 30
  },
  bottomSheet: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    width: "100%",
    height: 280
  },
  title: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 20,
    marginLeft: 15
  },
  subtitleContaier: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  subtitle: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "500",
    width: 190
  },
  price: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 22,
    fontWeight: "500"
  },
  fare: {
    paddingVertical: 10,
    width: 330
  },
  fareItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8
  },
  fareItem: {
    color: "rgba(0, 0, 0, 0.60)",
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "500"
  },
  fareNote: {
    color: "rgba(0, 0, 0, 0.60)",
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 10
  },
  selectButton: {
    backgroundColor: "#27A4F2",
    width: 330,
    height: 45,
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
    fontWeight: "600",
    lineHeight: 22
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.50)",
    width: "100%",
    marginVertical: 10
  }
});

export default FareDetails;
