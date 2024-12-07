import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Image,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  Entypo,
  AntDesign
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Animated, {
  SlideInDown,
  SlideOutUp
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";



const SearchLocation = () => {
    const router=useRouter();
  const [pickupSearch, setPickupSearch] = useState("");
  const [dropSearch, setDropSearch] = useState("");
  const [activeSearch, setActiveSearch] = useState(null);


  const locations = [
    {
      id: 1,
      name: "Pharma Apartments",
      address: "Ip extension, Madhu Vihar road, New Delhi",
      icon: "back-in-time"
    },
    {
      id: 2,
      name: "Home",
      address: "Ip extension, Madhu Vihar road, New Delhi",
      icon: "heart"
    },
    {
      id: 3,
      name: "Metro station IP Extension",
      address: "Ip extension, Madhu Vihar road, New Delhi",
      icon: "back-in-time"
    },
    {
      id: 4,
      name: "Pharma Apartments",
      address: "Ip extension, Madhu Vihar road, New Delhi",
      icon: "back-in-time"
    },
    {
      id: 5,
      name: "Shri Ram Mini Stadium",
      address: "Ip extension, Madhu Vihar road, New Delhi",
      icon: "heart"
    },
    {
      id: 6,
      name: "Stop",
      address: "Ip extension, Madhu Vihar road, New Delhi",
      icon: "suitcase"
    }
  ];

  const filteredLocations = locations.filter((location) => {
    const searchTerm = activeSearch === "pickup" ? pickupSearch : dropSearch;
    return (
      location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleLocationSelect = (location) => {
    if (activeSearch === "pickup") {
      setPickupSearch(location.name);
    } else if (activeSearch === "drop") {
      setDropSearch(location.name);
    }
    setActiveSearch(null);
    Keyboard.dismiss();
  };

  const handleClearInput = (type) => {
    if (type === "pickup") {
      setPickupSearch("");
    } else if (type === "drop") {
      setDropSearch("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle="dark-content" /> */}

      <Animated.View
        exiting={SlideOutUp.duration(500)}
        entering={SlideInDown.duration(500)}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.push("/home")}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Drop</Text>
          <TouchableOpacity style={styles.forMeButton}>
            <Text style={styles.forMeText}>For me</Text>
            <Entypo name="chevron-down" style={styles.entypoIcon} size={10} />
          </TouchableOpacity>
        </View>

        {/* Search Boxes */}
        <View style={styles.searchContainer}>
          {/* left side */}
          <View style={styles.locationImage}>
            <Image source={require("../../../assets/images/pickup.svg")} />
            <Text style={styles.connector}>|</Text>
            <Image source={require("../../../assets/images/drop.svg")} />
          </View>
          {/* Right Side */}
          <View>
            <View style={styles.searchBox}>
              <TouchableOpacity
                style={[activeSearch === "pickup" && styles.activeSearchBox]}
                onPress={() => setActiveSearch("pickup")}
              >
                <TextInput
                  style={[styles.searchInput]}
                  placeholder="Pickup location"
                  value={pickupSearch}
                  onChangeText={setPickupSearch}
                  onFocus={() => setActiveSearch("pickup")}
                  placeholderTextColor="#999"
                  // input:focus={outline:none}
                  outline="none"
                />
              </TouchableOpacity>
              {pickupSearch.length > 0 && (
                <TouchableOpacity onPress={() => handleClearInput("pickup")}>
                  <AntDesign name="close" size={15} />
                </TouchableOpacity>
              )}
            </View>
            <Text style={styles.pickupDropDiver}>
              ----------------------------------------------------
            </Text>
            <View style={styles.searchBox}>
              <TouchableOpacity
                style={[activeSearch === "drop" && styles.activeSearchBox]}
                onPress={() => setActiveSearch("drop")}
              >
                <TextInput
                  style={styles.searchInput}
                  placeholder="Drop location"
                  value={dropSearch}
                  onChangeText={setDropSearch}
                  onFocus={() => setActiveSearch("drop")}
                  placeholderTextColor="#999"
                  input
                />
              </TouchableOpacity>
              {dropSearch.length > 0 && (
                <TouchableOpacity onPress={() => handleClearInput("drop")}>
                  <AntDesign name="close" size={15} />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.mapButton}
          onPress={() => router.push("/bookcab")}
        >
          <Image source={require("../../../assets/images/map.svg")} />
          <Text style={styles.mapButtonText}>Select on map</Text>
        </TouchableOpacity>

        {/* ScrollView for locations */}

        <ScrollView>
          {filteredLocations.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.locationItem}
              onPress={() => handleLocationSelect(item)}
            >
              <View style={styles.locationIcon}>
                <Entypo name={item.icon} color="#27a4f2" size={24} />
              </View>

              <View style={styles.locationInfo}>
                <Text style={styles.locationName}>{item.name}</Text>
                <Text style={styles.locationAddress}>{item.address}</Text>
              </View>
              {/* <TouchableOpacity style={styles.favoriteButton}>
              <MaterialIcons
                name={item.isFavorite ? "favorite" : "favorite-border"}
                size={24}
                color="#999"
              />
            </TouchableOpacity> */}
              <TouchableOpacity style={styles.favoriteButton}>
                <Entypo name="heart-outlined" size={24} color="#999" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 5
  },
  backButton: {
    padding: 4
  },
  headerTitle: {
    flex: 1,
    color: "#000",
    fontFamily: "Nunito",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 22,
    marginLeft: 4
  },
  forMeButton: {
    backgroundColor: "#27A4F2",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    flexDirection: "row",
    height: 20,
    alignItems: "center"
  },
  forMeText: {
    fontWeight: "500",
    color: "#FFF",
    fontFamily: "Nunito",
    fontSize: 10
  },
  entypoIcon: {
    color: "#FFF",
    marginLeft: 2
  },
  searchContainer: {
    backgroundColor: "#E8E8E8",
    marginHorizontal: 20,
    marginVertical: 10,
    height: 70,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  locationImage: {
    gap: 1,
    marginLeft: 20
  },
  connector: {
    marginLeft: 5,
    marginBottom: 3,
    color: "rgba(0, 0, 0, 0.25)"
  },
  pickupDropDiver: {
    color: "rgba(0, 0, 0, 0.25)",
    marginLeft: 20
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  searchInput: {
    color: "#263238",
    fontFamily: "Nunito",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 22,
    marginLeft: 20,
    borderColor: "transparent",
    width: 225,
    borderWidth: 0,
    outlineStyle: "none"
  },

  mapButton: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    width: 102,
    height: 20
  },
  mapButtonText: {
    color: "#000",
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: "Nunito",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 22
  },
  locationItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  locationIcon: {
    // width: 40,
    alignItems: "center"
    // color: "#27a4f2"
  },
  locationInfo: {
    flex: 1,
    marginLeft: 12
  },
  locationName: {
    color: "#000",
    fontFamily: "Nunito",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 22
  },
  locationAddress: {
    color: "#000",
    fontFamily: "Nunito",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 22
  },
  favoriteButton: {
    padding: 4
  }
});

export default SearchLocation;
