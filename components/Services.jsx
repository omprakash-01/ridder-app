import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Services = () => {

  const Services = [
    { id: 1, name: "Cab", image: require("../assets/images/cab.png") },
    { id: 2, name: "Bike", image: require("../assets/images/bike.png") },
    { id: 3, name: "Auto", image: require("../assets/images/auto.png") },
    { id: 4, name: "Parcel", image: require("../assets/images/parcel.png") },
    {
      id: 5,
      name: "Cab Premium",
      image: require("../assets/images/cabprime.png")
    },
    {
      id: 6,
      name: "Auto Sharing",
      image: require("../assets/images/auto.png")
    },
    { id: 7, name: "Bike Lite", image: require("../assets/images/bike.png") },
    { id: 8, name: "Parcel", image: require("../assets/images/parcel.png") }
  ];

  return (
    <View style={styles.container}>

      {/* Bottom Sheet */}
      <View style={styles.bottomSheet}>
        <Text style={styles.title}>All Services</Text>
        <TouchableOpacity style={styles.serviceContainer}>
          {Services.map((item) => (
            <TouchableOpacity key={item.id} style={styles.serviceItem}>
              <Image source={item.image} style={styles.serviceImage} />
              <Text style={styles.serviceName}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"

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
    height: 300
  },
  title: {
    color: "#000",
    fontFamily: "Nunito",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 22,
    marginBottom: 20
  },
  serviceContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  serviceItem: {
    width: "23%",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 30
  },
  serviceImage: {
    width: 60,
    height: 60,
    marginBottom: 10
  },
  serviceName: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Nunito",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 22
  }
});

export default Services;
