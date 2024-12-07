import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { RadioButton } from "react-native-paper";

const DeleteAccountReason = () => {
  const [selectedReason, setSelectedReason] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delete account reason</Text>

      <View style={styles.radioContainer}>
        <Text style={styles.radioText}>App unserviceable in my area</Text>
        <RadioButton
          value="App unserviceable in my area"
          status={
            selectedReason === "App unserviceable in my area"
              ? "checked"
              : "unchecked"
          }
          onPress={() => setSelectedReason("App unserviceable in my area")}
        />
      </View>

      <View style={styles.radioContainer}>
        <Text style={styles.radioText}>Have my own vehicle now</Text>
        <RadioButton
          value="Have my own vehicle now"
          status={
            selectedReason === "Have my own vehicle now"
              ? "checked"
              : "unchecked"
          }
          onPress={() => setSelectedReason("Have my own vehicle now")}
        />
      </View>

      <View style={styles.radioContainer}>
        <Text style={styles.radioText}>No exciting offers</Text>
        <RadioButton
          value="No exciting offers"
          status={
            selectedReason === "No exciting offers" ? "checked" : "unchecked"
          }
          onPress={() => setSelectedReason("No exciting offers")}
        />
      </View>

      <View style={styles.radioContainer}>
        <Text style={styles.radioText}>Poor app experience</Text>
        <RadioButton
          value="Poor app experience"
          status={
            selectedReason === "Poor app experience" ? "checked" : "unchecked"
          }
          onPress={() => setSelectedReason("Poor app experience")}
        />
      </View>

      <View style={styles.radioContainer}>
        <Text style={styles.radioText}>
          Moved to a different Ride booking app
        </Text>
        <RadioButton
          value="Moved to a different Ride booking app"
          status={
            selectedReason === "Moved to a different Ride booking app"
              ? "checked"
              : "unchecked"
          }
          onPress={() =>
            setSelectedReason("Moved to a different Ride booking app")
          }
        />
      </View>

      <View style={styles.radioContainer}>
        <Text style={styles.radioText}>Change of phone number</Text>
        <RadioButton
          value="Change of phone number"
          status={
            selectedReason === "Change of phone number"
              ? "checked"
              : "unchecked"
          }
          onPress={() => setSelectedReason("Change of phone number")}
        />
      </View>

      <Text style={styles.otherText}>Other</Text>
      <TextInput style={styles.input} placeholder="Enter your reason" />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor: "#E9F4FE",
    borderRadius: 10
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10
  },
  radioText: {
    fontSize: 16
  },
  otherText: {
    fontSize: 16,
    marginTop: 10,
    height: 60,
  },
  input: {
    height:"100%",
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 0,
    outlineStyle: "none",
    backgroundColor: "#E5E4E1"
  },
  button: {
    backgroundColor: "#008CFF",
    padding: 10,
    borderRadius: 10,
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 16
  }
});

export default DeleteAccountReason;
