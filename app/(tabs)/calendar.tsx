import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Calendar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Calendar</Text>
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

export default Calendar;
