import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const TabRoots = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="aboutus"
        options={{
          title: "About us",
          tabBarIcon: ({ color, size }) => {
            return (
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  backgroundColor: "white",
                  bottom:15,
                  justifyContent:'center',
                  alignItems:'center',
                  borderColor:'gray',
                  borderWidth:StyleSheet.hairlineWidth
                }}
              >
                 <FontAwesome size={28} name="globe" color={color} />
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user-circle-o" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabRoots;
