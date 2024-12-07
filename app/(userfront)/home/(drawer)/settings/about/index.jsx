import { useRouter } from "expo-router";
import React, { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


const AboutScreen = () => {
    const router=useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.back()}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={[styles.item, styles.borderBottom]}
          onPress={() => router.push("/home/settings/about/privacypolicy")}
        >
          <Text style={styles.itemText}>Privacy policy</Text>
          <Icon name="chevron-forward" style={styles.chevron} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.item, styles.borderBottom]}
          onPress={() => router.push("/home/settings/about/termcondition")}
        >
          <Text style={styles.itemText}>Terms and conditions</Text>
          <Icon name="chevron-forward" style={styles.chevron} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.item, styles.borderBottom]}>
          <Text style={styles.itemText}>Join the team</Text>
          <Icon name="chevron-forward" style={styles.chevron} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.item, styles.borderBottom]}
          onPress={() => router.push("/home/settings/about/blog")}
        >
          <Text style={styles.itemText}>blog</Text>
          <Icon name="chevron-forward" style={styles.chevron} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.item, styles.borderBottom]}
          onPress={() => router.push("/home/settings/about/softwarelicense")}
        >
          <Text style={styles.itemText}>Software License</Text>
          <Icon name="chevron-forward" style={styles.chevron} />
        </TouchableOpacity>
      </View>
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
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  backButton: {
    padding: 8
  },
  backButtonText: {
    fontSize: 20,
    color: "#000"
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 8
  },
  menuContainer: {
    marginTop: 1,
    marginHorizontal: 20
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB"
  },
  itemText: {
    fontSize: 15,
    color: "#000"
  },
  chevron: {
    fontSize: 18,
    color: "#C5C5C5"
  },
  footer: {
    position: "absolute",
    bottom: 20,
    right: 20
  },
  recenterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6
  },
  recenterText: {
    color: "#fff",
    marginRight: 8,
    fontSize: 14
  },
  shortcutText: {
    color: "#999",
    fontSize: 12
  },

});

export default AboutScreen;
