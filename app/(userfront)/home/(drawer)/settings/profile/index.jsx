import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Feather, } from "@expo/vector-icons";
import BottomSheet from "react-native-gesture-bottom-sheet";
import EditName from "../../../../../../components/EditName"

const ProfileMenu = () => {
  const router = useRouter();
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
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {/* Profile Items */}
      <View style={styles.content}>
        {/* Name */}
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={showBottomSheet}
        >
          <View style={styles.iconContainer}>
            <Ionicons name="person-outline" size={24} color="#666" />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>John Doe</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>
        <View style={styles.separator} />

        {/* Phone Number */}
        <TouchableOpacity style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="call-outline" size={24} color="#666" />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <Text style={styles.value}>+91 232345678</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />

        {/* Email */}
        <TouchableOpacity style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="mail-outline" size={24} color="#666" />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.label}>E-mail</Text>
            <Text style={styles.value}>johndoes@gmail.com</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>
        <View style={styles.separator} />

        {/* Date of Birth */}
        <TouchableOpacity style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="calendar-outline" size={24} color="#666" />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.label}>Date of birth</Text>
            <Text style={styles.value}>23-09-2024</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>
        <View style={styles.separator} />

        {/* Member Since */}
        <TouchableOpacity style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="person-outline" size={24} color="#666" />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.label}>Member Since</Text>
            <Text style={styles.value}>may 2023</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>
        <View style={styles.separator} />

        {/* Emergency Contacts */}
        <TouchableOpacity style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="people-outline" size={24} color="#666" />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.label}>Emergency Contacts</Text>
            <Text style={styles.value}>87866e329, 79846602397, 21211234</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>
        <View style={styles.separator} />
      </View>
      <BottomSheet ref={bottomSheetRef} height={300} hasDraggableIcon>
        {/* Close button inside BottomSheet */}
        <View style={styles.closeIconContainer}>
          <TouchableOpacity onPress={closeBottomSheet}>
            <Feather name="x" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <EditName />
      </BottomSheet>
    </SafeAreaView>
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
  backButton: {
    padding: 4
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 16,
    fontFamily: "Nunito"
  },

  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16
  },
  iconContainer: {
    width: 40,
    alignItems: "center"
  },
  contentContainer: {
    flex: 1,
    marginLeft: 12
  },
  label: {
    fontSize: 14,
    color: "#333"
  },
  value: {
    fontSize: 13,
    color: "#666",
    marginTop: 4
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#ccc",
    marginHorizontal: 25
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

export default ProfileMenu;
