import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";
import Map from "../../../components/Map";
import { useRouter } from "expo-router";
import Animated, { SlideInRight } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const carouselData = [
  { id: "1", title: "Home" },
  { id: "2", title: "Work" },
  { id: "3", title: "Gym" },
  { id: "4", title: "Others" }
];

const ConfirmAndSavePickup = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const router = useRouter();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.carouselItem,
        selectedItem === item.id && styles.selectedItem
      ]}
      onPress={() => {
        setSelectedItem(item.id); 
        console.log(`${item.title} pressed`);
      }}
    >
      <Text style={styles.carouselTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={styles.container}
        entering={SlideInRight.duration(500)}
      >
        {/* Map */}
        <View style={styles.mapContainer}>
          <Map />
        </View>

        {/* Bottom Sheet */}
        <View style={styles.bottomSheet}>
          <View style={styles.topContainer}>
            <Text style={styles.title}>Double check pickup point</Text>
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
            <Text style={styles.subtitle}>Save as</Text>
            <View style={styles.hr}></View>
          </View>

          {/* Horizontal Carousel with TouchableOpacity */}
          <View>
            <FlatList
              data={carouselData}
              horizontal={true}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <TouchableOpacity
            style={styles.selectButton}
            onPress={() => router.push("/confirmandsavepickupinput")}
          >
            <Text style={styles.selectButtonText}>Confirm & Save Pickup</Text>
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
    height: 440,
    overflow: "hidden",
    width: "100%"
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
  selectButton: {
    backgroundColor: "#2b2d55",
    width: 300,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    alignSelf: "center",
    marginTop: 15
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
  },
  carouselItem: {
    width: 90,
    height: 25,
    backgroundColor: "#f3f3f9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginRight: 10,
    elevation: 5
  },
  carouselTitle: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 16
  },
  selectedItem: {
    borderWidth: 2,
    borderColor: "#2b2d55",
    backgroundColor: "#E0E2F0"
  }
});

export default ConfirmAndSavePickup;
