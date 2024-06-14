import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useTaskMode } from "@/hooks/useTaskMode";

const AddTask = () => {
  const { changeTaskMode } = useTaskMode();

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.circle} onPress={() => changeTaskMode()}>
        <Icon name={"plus"} size={25} color={"white"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 0,
    paddingBottom: 0,
    position: "relative",
  },
  circle: {
    backgroundColor: "#f52d56",
    width: 60,
    height: 60,
    position: "absolute",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 2,
    marginBottom: 2,
    right: 15,
    marginTop: 12,
  },
});

export default AddTask;
