import { Link, useRouter } from "expo-router";
import React, { useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Feather } from "@expo/vector-icons";
import BottomSheet from "react-native-gesture-bottom-sheet";
import DeleteAccount from "../../../../../components/DeleteAccount";
const SettingsScreen = () => {
    const router=useRouter();
     const bottomSheetRef = useRef(null);

     // Function to show the bottom sheet
     const showBottomSheet = () => {
       bottomSheetRef.current.show();
     };
     // Function to close the bottom sheet
     const closeBottomSheet = () => {
       bottomSheetRef.current.close();
     };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/home")}>
          <Icon name="arrow-back" size={20} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      {/* Main Section */}
      <View style={styles.sectionContainer}>
        {/* <Text style={styles.sectionTitle}>Main</Text> */}
        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => router.push("/home/settings/profile")}
        >
          <View style={styles.iconContainer}>
            <Icon name="person" size={24} color="#5A67D8" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Profile</Text>
            <Text style={styles.subtitle}>+91 1231231230</Text>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => router.push("/home/settings/favourites")}
        >
          <View style={styles.iconContainer}>
            <Icon name="favorite" size={24} color="#5A67D8" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Favourites</Text>
            <Text style={styles.subtitle}>See your favourite locations</Text>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.iconContainer}>
            <Icon name="tune" size={24} color="#5A67D8" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Preferences</Text>
            <Text style={styles.subtitle}>Manage Preferences</Text>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Others Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Others</Text>
        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => router.push("/home/settings/about")}
        >
          <View style={styles.iconContainer}>
            <Icon name="info" size={24} color="#5A67D8" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>About</Text>
            <Text style={styles.subtitle}>8.3.60</Text>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.iconContainer}>
            <Icon name="beta" size={24} color="#5A67D8" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Subscription to beta</Text>
            <Text style={styles.subtitle}>
              Get early access to latest features
            </Text>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity style={styles.optionContainer} onPress={()=>router.push("/")}>
          <View style={styles.iconContainer}>
            <Icon name="logout" size={24} color="#5A67D8" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Log Out</Text>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity style={styles.optionContainer} onPress={showBottomSheet}>
          <View style={styles.iconContainer}>
            <Icon name="delete" size={24} color="#5A67D8" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Delete Account</Text>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <BottomSheet ref={bottomSheetRef} height={200} hasDraggableIcon>
        {/* Close button inside BottomSheet */}
        <View style={styles.closeIconContainer}>
          <TouchableOpacity onPress={closeBottomSheet}>
            <Feather name="x" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <DeleteAccount />
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7f3fb"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "Nunito",
    marginLeft: 8
  },
  sectionContainer: {
    marginTop: 16,
    paddingHorizontal: 16
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    marginBottom: 8
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dceaf4",
    borderRadius: 8,
    padding: 16
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EBF4FF",
    borderRadius: 20,
    marginRight: 16
  },
  textContainer: {
    flex: 1
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000"
  },
  subtitle: {
    fontSize: 12,
    color: "#000",
    marginTop: 4
  },
  hr: {
    borderWidth: 1,
    borderColor: "#6f7d86",
    marginHorizontal: 10
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

export default SettingsScreen;
