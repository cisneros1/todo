import {
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Input() {
  return (
    <View
      style={styles.screen}
      onLayout={(event) => {
        const { x, y, width, height } = event.nativeEvent.layout;
        const AddTaskHeight = height;
      }}
    >
      <TextInput style={styles.textInput} placeholder="Enter something here" />
      <TouchableOpacity style={styles.button}>
        <Icon
          name={"arrow-up"}
          size={20}
          color={"white"}
          style={{
            shadowColor: "black",
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 2 },
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#4066a3",
  },
  textInput: {
    backgroundColor: "#fff",
    marginBottom: 65,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
    padding: 7,
    paddingBottom: 10,
    height: 40,
    width: 300,
  },
  button: {
    width: 38,
    height: 38,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 50,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: "gray",
    marginLeft: 10,
  },
});
