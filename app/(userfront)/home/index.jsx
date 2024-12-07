import React, { useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import Animated, { SlideInDown, SlideOutUp } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import Services from "../../../components/Services";
import BottomSheet from "react-native-gesture-bottom-sheet";
import { useNavigation } from "@react-navigation/native"; //

export default function HomeScreen() {
  const router = useRouter();
  const navigation = useNavigation();

  const bottomSheetRef = useRef(null);

  // Function to show the bottom sheet
  const showBottomSheet = () => {
    bottomSheetRef.current.show();
  };

  // Function to close the bottom sheet
  const closeBottomSheet = () => {
    bottomSheetRef.current.close();
  };

  const recentLocations = [
    {
      id: "1",
      name: "Pharma Apartments",
      address: "IP extension, Madhu Vihar road, New Delhi"
    },
    {
      id: "2",
      name: "Shri Ram Mini Stadium",
      address: "IP extension, Madhu Vihar road, New Delhi"
    },
    {
      id: "3",
      name: "Metro station IP Extension",
      address: "IP extension, Madhu Vihar road, New Delhi"
    }
  ];

  const exploreOptions = [
    { id: "1", name: "Cab", image: require("../../../assets/images/cab.png") },
    {
      id: "2",
      name: "Auto",
      image: require("../../../assets/images/auto.png")
    },
    {
      id: "3",
      name: "Bike",
      image: require("../../../assets/images/bike.png")
    },
    {
      id: "4",
      name: "Parcel",
      image: require("../../../assets/images/parcel.png")
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Animated.View
        exiting={SlideOutUp.duration(500)}
        entering={SlideInDown.duration(500)}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.featherContainer}
            onPress={() => navigation.openDrawer()}
          >
            <Feather name="menu" size={20} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.searchContainer}
            onPress={() => router.push("/searchlocation")}
          >
            <Icon name="search" size={20} style={styles.searchIcon} />
            <TextInput
              style={styles.searchBar}
              placeholder="Where are you going ?"
            />
          </TouchableOpacity>
        </View>

        {/* Recent Locations */}
        <View style={styles.recentLocationsContainer}>
          {recentLocations.map((location) => (
            <TouchableOpacity key={location.id}>
              <View style={styles.locationItem}>
                <MaterialIcons
                  name="history"
                  size={30}
                  color="black"
                  style={styles.icon}
                />
                <View style={styles.locationTextContainer}>
                  <Text style={styles.locationName}>{location.name}</Text>
                  <Text style={styles.locationAddress}>{location.address}</Text>
                </View>
                <Feather name="heart" size={14} color="black" />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Explore Section */}
        <View style={styles.exploreButtonContanier}>
          <TouchableOpacity>
            <Text style={styles.exploreText}>Explore</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.exploreAllText} onPress={showBottomSheet}>
              Explore all
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.exploreContainer}>
          {exploreOptions.map((option) => (
            <TouchableOpacity key={option.id} style={styles.exploreItem}>
              <Image source={option.image} style={styles.exploreImage} />
              <Text style={styles.optionText}>{option.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Referral Banner */}
        <View style={styles.bannerContainer}>
          <View style={styles.banner}>
            <Image source={require("../../../assets/images/carryimage.png")} />
          </View>
        </View>
      </Animated.View>

      {/* Bottomsheet */}
      <BottomSheet ref={bottomSheetRef} height={300} hasDraggableIcon>
        {/* Close button inside BottomSheet */}
        <View style={styles.closeIconContainer}>
          <TouchableOpacity onPress={closeBottomSheet}>
            <Feather name="x" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <Services />
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0E2F0"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "space-between",
    padding: 16
  },
  featherContainer: {
    backgroundColor: "#F3F3F9",
    borderRadius: "50%",
    padding: 8
  },
  searchContainer: {
    backgroundColor: "#F3F3F9",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderRadius: 10,
    height: 45
  },
  searchIcon: {
    marginLeft: 40,
    position: "absolute",
    fontSize: 20,
    color: "#7f7f7f",
    marginLeft: 10
  },
  searchBar: {
    flex: 1,
    padding: 12,
    fontSize: 14,
    paddingLeft: 45,
    height: 40,
    width: 283,
    color: "#000",
    borderWidth: 0,
    outlineStyle: "none"
  },
  recentLocationsContainer: {
    backgroundColor: "#F3F3F9",
    paddingVertical: 12
  },
  locationItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    paddingHorizontal: 25,
    paddingVertical: 4
  },
  icon: {
    marginRight: 12
  },
  locationTextContainer: {
    flex: 1
  },
  locationName: {
    fontSize: 14
  },
  locationAddress: {
    fontSize: 12,
    marginTop: 5
  },
  exploreButtonContanier: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 35,
    paddingTop: 30,
    paddingBottom: 15
  },
  exploreContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 16,
    paddingHorizontal: 35,
    gap: 5
  },
  exploreItem: {
    alignItems: "center",
    marginBottom: 16,
    width: "22%"
  },
  exploreImage: {
    width: 73,
    height: 79
  },
  exploreText: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Nunito",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: -0.408
  },
  exploreAllText: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Nunito",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: -0.408
  },
  optionText: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Nunito",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 22,
    letterSpacing: -0.408,
    marginTop: 5
  },
  bannerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  closeIconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
    backgroundColor: "#F3F3F9",
    borderRadius: 50,
    padding: 10
  }
});
