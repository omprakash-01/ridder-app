import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const EditNameScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Edit Name</Text>

        <View style={styles.inputMainContainer}>
          {/* First Name Input */}
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="First Name" />
            <TouchableOpacity style={styles.clearButton}>
              <Ionicons name="close-circle" size={20} color="#000" />
            </TouchableOpacity>
          </View>

          {/* Last Name Input */}
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Last Name" />
            <TouchableOpacity style={styles.clearButton}>
              <Ionicons name="close-circle" size={20} color="#000" />
            </TouchableOpacity>
          </View>

          {/* Save Button */}
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#e7f3fb",
    padding: 16
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 24,
    color: "#000",
    textAlign: "center"
  },
  inputMainContainer: {
    marginHorizontal: 10
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
    height: 48
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    height: "100%",
    borderWidth: 0,
    outlineStyle: "none"
  },
  clearButton: {
    padding: 8
  },
  saveButton: {
    backgroundColor: "#2196F3",
    borderRadius: 25,
    padding: 15,
    alignItems: "center",
    marginTop: 24,
    height: 50,
    justifyContent: "center"
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600"
  }
});

export default EditNameScreen;
