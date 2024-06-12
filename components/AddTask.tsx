import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useTaskMode } from "@/hooks/useTaskMode";

const AddTask = () => {
  const { changeTaskMode } = useTaskMode();

  return (
    <View>
      <TouchableOpacity style={styles.circle} onPress={() => changeTaskMode()}>
        <Icon name={"plus"} size={25} color={"white"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    backgroundColor: "#f52d56",
    width: 60,
    height: 60,
    position: "absolute",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    bottom: 10,
    right: 15,
  },
});

export default AddTask;
