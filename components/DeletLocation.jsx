import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const DeleteLocationDialog = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dialog}>
        <Text style={styles.title}>Delete Location</Text>

        <Text style={styles.message}>
          Are you sure you want to delete as a favourite location?
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Go back</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    padding: 20
  },
  dialog: {

    borderRadius: 12,
    padding: 20,
    width: "100%",
    maxWidth: 340
  },
  title: {
    fontSize: 17,
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
    backgroundColor: "#fff"
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
  }
});

export default DeleteLocationDialog;
