import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

function TermAndCondition() {
  if (Platform.OS === "web") {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Hello Term condition page</h1>
      </div>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello Term condition page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default TermAndCondition;
