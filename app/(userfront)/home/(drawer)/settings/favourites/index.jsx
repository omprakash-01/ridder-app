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
import { Feather } from "@expo/vector-icons";
import BottomSheet from "react-native-gesture-bottom-sheet";
import DeleteLocationDialog from "../../../../../../components/DeletLocation";

const FavoritesScreen = () => {
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
        <Text style={styles.headerTitle}>Favourites</Text>
      </View>

      {/* Locations List */}
      <View style={styles.locationsList}>
        {/* Grandma house */}
        <View style={styles.locationItem}>
          <View style={styles.leftContent}>
            <Ionicons
              name="heart"
              size={24}
              color="red"
              style={styles.locationIcon}
            />
            <View style={styles.textContainer}>
              <Text style={styles.locationName}>Grandma house</Text>
              <Text style={styles.locationAddress}>
                32, street 5, new welcome lane new delhi 78
              </Text>
            </View>
          </View>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="pencil" size={20} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={showBottomSheet}>
              <Ionicons name="trash-outline" size={20} color="red" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Work */}
        <View style={styles.locationItem}>
          <View style={styles.leftContent}>
            <Ionicons
              name="briefcase"
              size={24}
              color="#000"
              style={styles.locationIcon}
            />
            <View style={styles.textContainer}>
              <Text style={styles.locationName}>Work</Text>
              <Text style={styles.locationAddress}>
                32, street 5, new welcome lane new delhi 78
              </Text>
            </View>
          </View>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="pencil" size={20} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="trash-outline" size={20} color="red" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Home */}
        <View style={styles.locationItem}>
          <View style={styles.leftContent}>
            <Ionicons
              name="home"
              size={24}
              color="#000"
              style={styles.locationIcon}
            />
            <View style={styles.textContainer}>
              <Text style={styles.locationName}>Home</Text>
              <Text style={styles.locationAddress}>
                32, street 5, new welcome lane new delhi 78
              </Text>
            </View>
          </View>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="pencil" size={20} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="trash-outline" size={20} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <BottomSheet ref={bottomSheetRef} height={200} hasDraggableIcon>
        {/* Close button inside BottomSheet */}
        <View style={styles.closeIconContainer}>
          <TouchableOpacity onPress={closeBottomSheet}>
            <Feather name="x" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <DeleteLocationDialog />
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
    padding: 16,
    backgroundColor: "#e7f3fb"
  },
  backButton: {
    padding: 4
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 16
  },
  locationsList: {
    paddingHorizontal: 16
  },
  locationItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },
  locationIcon: {
    marginRight: 12,
    width: 24
  },
  textContainer: {
    flex: 1
  },
  locationName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4
  },
  locationAddress: {
    fontSize: 14,
    fontWeight: "400",
    color: "#666"
  },
  actionButtons: {
    flexDirection: "row",
    alignItems: "center"
  },
  actionButton: {
    padding: 8,
    marginLeft: 8
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

export default FavoritesScreen;
