import React from "react";
import { Drawer } from "expo-router/drawer";
import CustomDrawer from "../../../components/CustomDrawer";

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          padding: 0, // Set padding to 0
          margin: 0
        }
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="(drawer)/settings/index"
        options={{ title: "Settings" }}
      />
    </Drawer>
  );
}
