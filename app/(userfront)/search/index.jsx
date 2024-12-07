import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { SlideInRight } from "react-native-reanimated";
import Map from "../../../components/Map";
const Search = () => {
  return (
    <SafeAreaView>
      <Animated.View entering={SlideInRight.duration(500)}>
      <View style={styles.mapContainer}>
        <Map/>
      </View>
        <View style={styles.bottomContainer}>
          {/* Heading */}
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Looking for Bike</Text>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: "20%" }]} />
            </View>
          </View>
          <View style={styles.bottomSheet}>
            {/* Trip Details */}
            <View style={styles.tripDetailsContainer}>
              <View style={styles.tripDetails}>
                <Text style={styles.tripTitle}>Trip Details</Text>
                <View style={styles.tripItem}>
                  <Ionicons name="radio-button-on" size={16} color="green" />
                  <View style={styles.tripInfo}>
                    <Text style={styles.tripText}>32, xyz street</Text>
                    <Text style={styles.subText}>
                      IP extension metro station. IP extension
                    </Text>
                  </View>
                </View>

                <View style={styles.tripItem}>
                  <Ionicons name="radio-button-on" size={16} color="red" />
                  <View style={styles.tripInfo}>
                    <Text style={styles.tripText}>32, xyz street</Text>
                    <Text style={styles.subText}>
                      LP extension metro station. LP extension
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Fare Section */}
            <View style={styles.fareSection}>
              <Text style={styles.fareText}>Fare</Text>
              <Text style={styles.amount}>₹67</Text>
            </View>

            {/* Payment Method */}
            <View style={styles.paymentMethodContainer}>
              <Image
                source={require("../../../assets/images/cash.png")}
                style={styles.paymentIcon}
              />
              <Text style={styles.paymentText}>Paying via cash</Text>
            </View>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.backButton}>
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton}>
                <Text style={styles.cancelText}>Cancel Ride</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    height: 240,
    overflow: "hidden",
    width: "100"
  },
  bottomContainer: {
    flex: 1,
  },
  map: {
    flex: 1
  },
  markerContainer: {
    alignItems: "center"
  },

  headingContainer: {
    backgroundColor: "#dceaf4",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: 70,
    padding: 16
  },
  heading: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5
  },
  progressBarContainer: {
    height: 4,
    backgroundColor: "#ddd",
    borderRadius: 2
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#007bff",
    borderRadius: 2
  },
  bottomSheet: {
    backgroundColor: "#eaf6fe"
  },

  tripDetailsContainer: {
    padding: 16
  },
  tripTitle: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Nunito"
  },
  tripItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12
  },
  tripInfo: {
    marginLeft: 8
  },
  tripText: {
    fontSize: 12,
    fontWeight: "500"
  },
  subText: {
    fontSize: 12,
    color: "#666"
  },
  fareSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: "#dceaf4",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8
  },
  fareText: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Nunito"
  },
  amount: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Nunito"
  },
  paymentMethodContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dceaf4",
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    borderRadius: 8
  },
  paymentIcon: {
    width: 24,
    height: 24,
    marginRight: 10
  },
  paymentText: {
    fontSize: 14,
    color: "#666"
  },
  buttonContainer: {
    gap: 10,
    padding: 16
  },
  backButton: {
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
    width: 345,
    height: 35
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600"
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: "#000",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
    width: 345,
    height: 35
  },
  cancelText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500"
  }
});

export default Search;
