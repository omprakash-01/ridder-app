import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Payment from "../../../components/Payment";
import OfferValidation from "../../../components/OfferValidation";
import Map from "../../../components/Map";
import { router } from "expo-router";
import BottomSheet from "react-native-gesture-bottom-sheet";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { SlideInRight } from "react-native-reanimated";


export default function Book() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [contentToShow, setContentToShow] = useState(null);
  const [bottomSheetHeight, setBottomSheetHeight] = useState(600);
  const bottomSheetRef = useRef(null);

  const showBottomSheet = () => {
    bottomSheetRef.current.show();
  };

  const rideOptions = [
    {
      type: "Cab",
      time: "6 min",
      price: "₹360.0",
      image: require("../../../assets/images/cab.png"),
      drop: "8:50 PM",
      passenger: "4"
    },
    {
      type: "Auto",
      time: "3 min",
      price: "₹230.0",
      image: require("../../../assets/images/auto.png"),
      drop: "8:51 PM",
      passenger: "3"
    },
    {
      type: "Bike",
      time: "9 min",
      price: "₹120.0",
      image: require("../../../assets/images/bike.png"),
      drop: "8:52 PM",
      passenger: "1",
      carryimage: require("../../../assets/images/rectangle.png"),
      speed: "Fastest"
    },
    {
      type: "Cab Prime",
      time: "1 min",
      price: "₹580.0",
      image: require("../../../assets/images/cabprime.png"),
      drop: "8:53 PM",
      passenger: "6"
    },
    {
      type: "Parcel",
      time: "1 min",
      price: "₹110.0",
      image: require("../../../assets/images/parcel.png"),
      drop: "8:54 PM"
    }
  ];

  // Function to show Payment content
  const showPaymentContent = () => {
    setContentToShow("payment");
    setBottomSheetHeight(600);
    showBottomSheet();
  };

  // Function to show OfferValidation content
  const showOfferContent = () => {
    setContentToShow("offer");
    setBottomSheetHeight(550);
    showBottomSheet();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={styles.container} entering={SlideInRight.duration(500)}>
        <View style={styles.mapContainer}>
          <Map />
        </View>

        <ScrollView style={[styles.rideOptions]}>
          {rideOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionCard,
                selectedOption === index && styles.selectedOption
              ]}
              onPress={() => setSelectedOption(index)}
            >
              <Image source={option.image} style={styles.icon} />
              <View style={styles.details}>
                <View style={styles.typeContainer}>
                  <Text style={styles.title}>{option.type}</Text>
                  <Image source={require("../../../assets/images/user.svg")} />
                  <Text style={styles.passenger}>{option.passenger}</Text>
                  <View style={styles.carryImage}>
                    <Image source={option.carryimage} />
                    <Text style={styles.carryText}>{option.speed}</Text>
                  </View>
                </View>
                <Text style={styles.subtitle}>
                  {`${option.time} • Drop ${option.drop}`}
                </Text>
              </View>
              <Text style={styles.price}>{option.price}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.footer}>
          <View style={styles.paymentRow}>
            <TouchableOpacity
              style={styles.paymentOption}
              onPress={showPaymentContent}
            >
              <View style={styles.paymentContent}>
                <Image
                  source={require("../../../assets/images/cash.png")}
                  style={styles.paymentIcon}
                />
                <Text style={styles.paymentText}>Cash</Text>
              </View>
              <AntDesign
                name="right"
                size={12}
                color="#8096a8"
                style={styles.rightarrow}
              />
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.paymentOption} onPress={showOfferContent}>
              <View style={styles.paymentContent}>
                <Image
                  source={require("../../../assets/images/Vector.png")}
                  style={styles.offerIcon}
                />
                <Text style={styles.paymentText}>Offers</Text>
              </View>
              <AntDesign
                name="right"
                size={12}
                color="#8096a8"
                style={styles.rightarrow}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.horizontalDivider} />
          <View style={styles.bookButtonContainer}>
            <TouchableOpacity
              style={styles.bookButton}
              onPress={() => router.push("/drop")}
            >
              <Text style={styles.bookText}>BOOK CAB</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>

      {/* BottomSheet with dynamic content */}
      <BottomSheet
        ref={bottomSheetRef}
        height={bottomSheetHeight}
        key={contentToShow}
        hasDraggableIcon
      >
        {contentToShow === "payment" && <Payment />}
        {contentToShow === "offer" && <OfferValidation />}
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff"
  },
  mapContainer: {
    height: 300,
    overflow: "hidden",
    width:"100%"
  },
  rideOptions: {
    flex: 1,
    marginTop: 10,
    width: "100%"
  },
  optionCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    width: "100%"
  },
  selectedOption: {
    borderWidth: 2,
    borderColor: "#000"
  },
  icon: {
    width: 83,
    height: 55,
    marginRight: 15,
    borderRadius: 12
  },
  details: {
    flex: 1
  },
  typeContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
    marginRight: 5
  },
  passenger: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 16,
    marginBottom: 8,
    marginRight: 5
  },
  carryImage: {
    width: 47,
    height: 12
  },
  carryText: {
    position: "absolute",
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "500",
    left: 10
  },
  subtitle: {
    color: "rgba(0, 0, 0, 0.36)",
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 20
  },
  price: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20
  },
  footer: {
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5"
  },
  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    marginTop: 8
  },
  paymentOption: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5
  },
  paymentContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  paymentIcon: {
    width: 39,
    height: 30,
    resizeMode: "contain"
  },
  offerIcon: {
    width: 29,
    height: 26,
    resizeMode: "contain"
  },
  rightarrow: {
    marginTop: 3
  },
  paymentText: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "500"
  },
  divider: {
    width: 1,
    height: "100%",
    backgroundColor: "#E5E5E5"
  },
  horizontalDivider: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#E5E5E5"
  },
  bookButtonContainer: {
    alignItems: "center",
    marginTop: 7,
    marginBottom: 5
  },
  bookButton: {
    backgroundColor: "#27A4F2",
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    width: 336,
    height: 35
  },
  bookText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter"
  },
  paymentContainer: {
    position: "absolute",
    width: "100%",
    top: 50
  },

});
