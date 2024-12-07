import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { SlideInRight, } from "react-native-reanimated";

const OffersScreen = () => {
    const router=useRouter();
  return (
    <View style={styles.container}>

      {/* Bottom Sheet */}
      <View style={styles.bottomSheet}>
        <View style={styles.titleContainer}>
         
          <Text style={styles.title}>Offers</Text>
        </View>
        <View style={styles.hr} />
        {/* Coins Section */}
        <View style={styles.coinsSection}>
          <View>
            <Text style={styles.coinsText}>Use Coins</Text>
            <Text style={styles.coinsSubText}>
              you don’t have any coins currently
            </Text>
          </View>
          <View style={styles.coinsCount}>
            <Image
              source={require("../assets/images/dollar.png")} // Add your coin icon here
              style={styles.coinIcon}
            />
            <Text style={styles.coinValue}>0</Text>
          </View>
        </View>

        {/* Coupon Section */}
        <Text style={styles.couponTitle}>Coupons</Text>
        <View style={styles.couponInputContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.couponInput}
              placeholder="Enter coupon code"
              placeholderTextColor="#A0A0A0"
            />
          </View>
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>

        {/* No Coupons Available */}
        <View style={styles.noCouponsContainer}>
          <Text style={styles.noCouponsTitle}>Oh No !</Text>
          <Text style={styles.noCouponsText}>
            No Coupons available currently
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  mapContainer: {
    height: "60%"
  },
  bottomSheet: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    width: "100%",
    height: 550
  },
  titleContainer: {
    flexDirection: "row"
  },
  title: {
    color: "#000",
    fontFamily: "Nunito",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 22,
    marginLeft: 5
  },
  coinsSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#DBE1E6",
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 30,
    height: 50,
    marginBottom: 25
  },
  coinsText: {
    color: "#000",
    fontFamily: "Nunito",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 20
  },
  coinsSubText: {
    color: "#000",
    fontFamily: "Nunito",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: 20
  },
  coinsCount: {
    flexDirection: "row",
    alignItems: "center"
  },
  coinIcon: {
    width: 24,
    height: 24,
    marginRight: 8
  },
  coinValue: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Nunito",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 2
  },
  couponTitle: {
    color: "#000",
    fontFamily: "Nunito",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 20,
    marginBottom: 10
  },
  couponInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 10
  },
  inputContainer: {
    height: 35,
    width: 290
  },
  couponInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 8,
    paddingHorizontal: 10,
    color: "#000",
    fontFamily: "Nunito",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 20
  },
  applyButton: {
    // marginLeft: 8,
    // paddingHorizontal: 16,
    // paddingVertical: 8,
    // backgroundColor: "#007BFF",
    // borderRadius: 8
  },
  applyButtonText: {
    color: "#8096A8",
    textAlign: "center",
    fontFamily: "Nunito",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 20
  },
  noCouponsTitle: {
    color: "#6A6868",
    textAlign: "center",
    fontFamily: "Nunito",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 20
  },
  noCouponsText: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Nunito",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 20
  },
  noCouponsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: "#9AACBA",
    marginVertical: 15
  }
});

export default OffersScreen;
