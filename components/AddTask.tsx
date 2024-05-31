import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

// const [keyboardStatus, setKeyboardStatus] = useState("");

export default function AddTask() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => console.log("Add Task")}
      >
        <Icon name={"plus"} size={25} color={"white"} />

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  circle: {
    backgroundColor: "#f52d56",
    width: 60,
    height: 60,
    position: "absolute",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,
    right: 15,
  },
});
