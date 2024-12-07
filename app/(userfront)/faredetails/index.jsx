import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Animated, { SlideInRight } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../../../components/Map";
import { useRouter } from "expo-router";

const FareDetails = () => {
    const router=useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={styles.container}
        entering={SlideInRight.duration(500)}
      >
        <View style={styles.mapContainer}>
         <Map/>
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
          <TouchableOpacity style={styles.selectButton} onPress={()=>router.push("/stopsearch")}>
            <Text style={styles.selectButtonText}>Got It</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaf6fe"
  },
  mapContainer: {
    height: 410,
    overflow: "hidden",
    width: "100"
  },
  bottomSheet: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
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
    height: 40,
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
