import { StyleSheet, View, TextInput } from "react-native";
import React from "react";

export default function Input() {
  return (
    <View style={styles.screen}>
      <TextInput style={styles.textInput} placeholder="Enter something here" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#4066a3",
  },
  textInput: {
    backgroundColor: "#fff",
    marginBottom: 65,
    borderWidth: 1,
    borderColor: "#999",
    padding: 7,
    height: 30,
    width: 300,
  },
});
