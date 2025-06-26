import { Drawer } from "expo-router/drawer";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const DrawerRootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="index" options={{ title: "My home page" }} />
        <Drawer.Screen name="setting" options={{ title: "Settings" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerRootLayout;
