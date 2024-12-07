import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

const CustomDrawer = (props) => {
  return (
    <View {...props} style={[styles.container, { padding: 0, margin: 0 }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Icon
            name="arrow-back"
            size={24}
            color="white"
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <View style={styles.profileContainer}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Peter Anthony</Text>
            <Text style={styles.profileEmail}>peteranthony121@test.com</Text>
            <View style={styles.linkContainer}>
              <Text style={styles.profileLink}>shweyy-7836837ghjf/link</Text>
              <TouchableOpacity>
                <Image
                  source={require("../assets/images/copy.png")}
                  style={styles.copyImage}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Image
            source={require("../assets/images/profile.svg")}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.hr} />
        {/* Menu Section */}
        <View>
          <DrawerItem
            icon="star"
            lefticons="chevron-forward"
            label="4.14 My Rating"
            onPress={() => props.navigation.navigate("(drawer)/rating/index")}
          />
          <DrawerItem
            icon="help-circle"
            lefticons="chevron-forward"
            label="Help"
            onPress={() => props.navigation.navigate("(drawer)/help/index")}
          />
          <DrawerItem
            icon="card"
            lefticons="chevron-forward"
            label="Payment"
            onPress={() => props.navigation.navigate("(drawer)/payments/index")}
          />
          <DrawerItem
            icon="car"
            lefticons="chevron-forward"
            label="My Rides"
            onPress={() => props.navigation.navigate("(drawer)/myrides/index")}
          />
          <DrawerItem
            icon="shield"
            lefticons="chevron-forward"
            label="Safety"
            onPress={() => props.navigation.navigate("(drawer)/safety/index")}
          />
          <DrawerItem
            icon="gift"
            lefticons="chevron-forward"
            label="My Rewards"
            onPress={() => props.navigation.navigate("(drawer)/myreward/index")}
          />
          <DrawerItem
            icon="notification"
            lefticons="chevron-forward"
            label="Notifications"
            onPress={() =>
              props.navigation.navigate("(drawer)/notification/index")
            }
          />
          <DrawerItem
            icon="settings"
            lefticons="chevron-forward"
            label="Settings"
            onPress={() => props.navigation.navigate("(drawer)/settings/index")}
          />
        </View>
      </View>
    </View>
  );
};

const DrawerItem = ({ icon, label, onPress, lefticons }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Ionicons name={icon} size={24} color="#666" />
    <Text style={styles.menuText}>{label}</Text>
    <Ionicons name={lefticons} size={24} color="#666" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cedcf0"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2b2e57",
    height: 55,
    paddingHorizontal: 16,
    justifyContent: "flex-start"
  },
  backIcon: {
    marginRight: 16
  },
  headerTitle: {
    color: "#FFF",
    fontFamily: "Helvetica",
    fontSize: 21,
    fontWeight: "400"
  },
  profileContainer: {
    flex: 1,
    backgroundColor: "#cedcf0",
    padding: 16
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15
  },
  profileImage: {
    width: 66,
    height: 66,
    borderRadius: 33
  },
  profileInfo: {
    flex: 1,
    marginLeft: 10
  },
  profileName: {
    fontFamily: "Helvetica",
    fontSize: 20,
    fontWeight: "700",
    color: "#292B52"
  },
  profileEmail: {
    fontFamily: "Helvetica",
    fontSize: 13,
    fontWeight: "400",
    color: "#292B52",
    marginVertical: 5
  },
  linkContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  profileLink: {
    fontFamily: "Nunito",
    fontSize: 12,
    fontWeight: "600",
    color: "#000"
  },
  copyImage: {
    width: 14,
    height: 14,
    marginLeft: 8
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.50)",
    marginBottom: 12
  },
  menuContainer: {
    paddingBottom: 20
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: "#DFEBF9"
  },
  menuText: {
    flex: 1,
    color: "#292B52",
    fontFamily: "Inter",
    fontSize: 13,
    fontWeight: "400",
    marginLeft: 10
  }
});

export default CustomDrawer;
