import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Task from "../../components/Task";
import BottomNav from "@/components/BottomNav";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Today</Text>

      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default Settings;
