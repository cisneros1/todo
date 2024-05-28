import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Task = (task: { taskName: string }) => {
  return (
    <View style={styles.taskContainer} className="border-solid">
      {/* checkbox */}
      <View style={styles.checkbox}></View>

      {/* task name */}
      <Text style={styles.taskDescription}>{task.taskName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    // flex: 1,
    flexDirection: "row",
    marginTop: 8,
    backgroundColor: "alticeblue",
    paddingLeft: 8,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: "auto",
    padding: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: "red",
  },
  taskDescription: {
    paddingLeft: 8,
  },
});

export default Task;
