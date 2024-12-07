
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import BottomSheet from "react-native-gesture-bottom-sheet";
import React, { useRef } from "react";
import DeleteAccountReason from "./DeleteAccountReasong";

const DeleteAccount = () => {
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
      <View style={styles.dialog}>
        <Text style={styles.title}>Delete Account</Text>

        <Text style={styles.message}>
          Are you sure you want to DeleteAccount from the app?
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Go back</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.deleteButton} onPress={showBottomSheet}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomSheet ref={bottomSheetRef} height={500} hasDraggableIcon>
        {/* Close button inside BottomSheet */}
        <View style={styles.closeIconContainer}>
          <TouchableOpacity onPress={closeBottomSheet}>
            <Feather name="x" size={24} color="black" />
          </TouchableOpacity>
        </View>

       <DeleteAccountReason/>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  dialog: {
    // backgroundColor: "#eaf6fe",
    borderRadius: 12,
    padding: 20,
    width: "100%",
    maxWidth: 340
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8
  },
  message: {
    fontSize: 15,
    color: "#666",
    marginBottom: 20,
    lineHeight: 20
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12
  },
  cancelButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1
  },
  deleteButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: "#DC3545"
  },
  cancelButtonText: {
    fontSize: 15,
    color: "#333"
  },
  deleteButtonText: {
    fontSize: 15,
    color: "white"
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

export default DeleteAccount;
