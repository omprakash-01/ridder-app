import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialIcons, } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState("");


  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headTitle}>Payment</Text>
      </View>
      <Text style={styles.fareText}>Total Fare : ₹213</Text>

      {/* Section: Wallets */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Wallets</Text>
        <View style={styles.hr} />
        <View style={styles.methodContainer}>
          <RadioButton.Group
            onValueChange={(newValue) => setSelectedMethod(newValue)}
            value={selectedMethod}
          >
            <TouchableOpacity
              style={[
                styles.method,
                selectedMethod === "My wallet" && styles.selectedMethod
              ]}
            >
              <View style={styles.methodDetails}>
                <MaterialIcons
                  name="account-balance-wallet"
                  size={24}
                  color="#007bff"
                  style={styles.materialIcons}
                />
                <View>
                  <Text style={styles.methodLabel}>My wallet</Text>
                  <Text style={styles.methodBalance}>Balance: ₹28.00</Text>
                </View>
              </View>
              <RadioButton
                value="My wallet"
                status={
                  selectedMethod === "My wallet" ? "checked" : "unchecked"
                }
                onPress={() => setSelectedMethod("My wallet")}
              />
            </TouchableOpacity>
            <View style={styles.hr} />

            <TouchableOpacity
              style={[
                styles.method,
                selectedMethod === "Amazon Pay" && styles.selectedMethod
              ]}
            >
              <View style={styles.methodDetails}>
                <View style={styles.methodImage}>
                  <Image source={require("../assets/images/amazon-pay.svg")} />
                </View>
                <Text style={styles.methodLabel}>Amazon Pay</Text>
              </View>
              <Text style={styles.linkText}>Link</Text>

            </TouchableOpacity>
          </RadioButton.Group>
        </View>
      </View>

      {/* Section: Pay By any UPI app */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pay By any UPI app</Text>
        <View style={styles.hr} />
        <View style={styles.methodContainer}>
          <RadioButton.Group
            onValueChange={(newValue) => setSelectedMethod(newValue)}
            value={selectedMethod}
          >
            <TouchableOpacity
              style={[
                styles.method,
                selectedMethod === "Paytm" && styles.selectedMethod
              ]}
            >
              <View style={styles.methodDetails}>
                <Image
                  source={require("../assets/images/paytm.svg")}
                  style={styles.methodImage}
                />
                <Text style={styles.methodLabel}>Paytm</Text>
              </View>
              <RadioButton
                value="Paytm"
                status={selectedMethod === "Paytm" ? "checked" : "unchecked"}
                onPress={() => setSelectedMethod("Paytm")}
              />
            </TouchableOpacity>
            <View style={styles.hr} />
            <TouchableOpacity
              style={[
                styles.method,
                selectedMethod === "GPay" && styles.selectedMethod
              ]}
            >
              <View style={styles.methodDetails}>
                <Image
                  source={require("../assets/images/google.svg")}
                  style={styles.methodImage}
                />
                <Text style={styles.methodLabel}>GPay</Text>
              </View>
              <RadioButton
                value="GPay"
                status={selectedMethod === "GPay" ? "checked" : "unchecked"}
                onPress={() => setSelectedMethod("GPay")}
              />
            </TouchableOpacity>
            <View style={styles.hr} />
            <TouchableOpacity
              style={[
                styles.method,
                selectedMethod === "Phonepe" && styles.selectedMethod
              ]}
            >
              <View style={styles.methodDetails}>
                <Image
                  source={require("../assets/images/paytm.svg")}
                  style={styles.methodImage}
                />
                <Text style={styles.methodLabel}>Phonepe</Text>
              </View>
              <RadioButton
                value="Phonepe"
                status={selectedMethod === "Phonepe" ? "checked" : "unchecked"}
                onPress={() => setSelectedMethod("Phonepe")}
              />
            </TouchableOpacity>
          </RadioButton.Group>
        </View>
      </View>

      {/* Section: Pay Later */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pay Later</Text>
        <View style={styles.hr} />
        <View style={styles.methodContainer}>
          <RadioButton.Group
            onValueChange={(newValue) => setSelectedMethod(newValue)}
            value={selectedMethod}
          >
            <TouchableOpacity
              style={[
                styles.method,
                selectedMethod === "Pay at drop" && styles.selectedMethod
              ]}
            >
              <View style={styles.methodDetails}>
                <MaterialIcons
                  name="account-balance-wallet"
                  size={24}
                  color="#007bff"
                  style={styles.materialIcons}
                />
                <View>
                  <Text style={styles.methodLabel}>Pay at drop</Text>
                  <Text style={styles.methodDescription}>
                    Go cashless after ride pay by scanning QR
                  </Text>
                </View>
              </View>
              <RadioButton
                value="Pay at drop"
                status={
                  selectedMethod === "Pay at drop" ? "checked" : "unchecked"
                }
                onPress={() => setSelectedMethod("Pay at drop")}
              />
            </TouchableOpacity>
            <View style={styles.hr} />
            <TouchableOpacity
              style={[
                styles.method,
                selectedMethod === "simpl" && styles.selectedMethod
              ]}
            >
              <View style={styles.methodDetails}>
                <Image
                  source={require("../assets/images/amazon-pay.svg")}
                  style={styles.methodImage}
                />
                <Text style={styles.methodLabel}>simpl</Text>
              </View>
              <Text style={styles.linkText}>Link</Text>
            </TouchableOpacity>
          </RadioButton.Group>
        </View>
      </View>

      {/* Section: Others */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Others</Text>
        <View style={styles.hr} />
        <View style={styles.methodContainer}>
          <RadioButton.Group
            onValueChange={(newValue) => setSelectedMethod(newValue)}
            value={selectedMethod}
          >
            <TouchableOpacity
              style={[
                styles.method,
                selectedMethod === "Cash" && styles.selectedMethod
              ]}
            >
              <View style={styles.methodDetails}>
                <MaterialIcons
                  name="payments"
                  size={24}
                  color="#007bff"
                  style={styles.materialIcons}
                />
                <Text style={styles.methodLabel}>Cash</Text>
              </View>
              <RadioButton
                value="Cash"
                status={selectedMethod === "Cash" ? "checked" : "unchecked"}
                onPress={() => setSelectedMethod("Cash")}
              />
            </TouchableOpacity>
          </RadioButton.Group>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#f9f9f9",
    padding: 16,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  topContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center"
  },
  headTitle: {
    color: "#000",
    fontFamily: "Nunito",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 22
  },
  fareText: {
    color: "#000",
    fontFamily: "Nunito",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 22,
    backgroundColor: "rgba(39, 164, 242, 0.20)",
    width: 112,
    height: 23,
    borderRadius: 10,
    textAlign: "center",
    marginVertical: 15
  },
  section: {
    marginBottom: 24
  },
  sectionTitle: {
    color: "#000",
    fontFamily: "Nunito",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20,
    marginBottom: 10
  },
  methodContainer: {
    backgroundColor: "#DBE1E6",
    borderRadius: 8
  },
  method: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12
  },
  materialIcons: {
    marginRight: 12
  },
  methodDetails: {
    flexDirection: "row"
  },
  methodImage: {
    marginRight: 12
  },
  methodLabel: {
    color: "#000",
    fontFamily: "Nunito",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20
  },
  methodBalance: {
    color: "rgba(0, 0, 0, 0.40)",
    textAlign: "center",
    fontFamily: "Nunito",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20
  },
  methodDescription: {
    color: "rgba(0, 0, 0, 0.40)",
    textAlign: "center",
    fontFamily: "Nunito",
    fontSize: 10,
    fontWeight: "300",
    lineHeight: 20
  },
  linkText: {
    color: "#04619A",
    textAlign: "center",
    fontFamily: "Nunito",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 20
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#6c757d"
  },
  selectedRadio: {
    borderColor: "#007bff",
    backgroundColor: "#007bff"
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: "#9AACBA",
    marginBottom: 15
  }
});

export default Payment;
