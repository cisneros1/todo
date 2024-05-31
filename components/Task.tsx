import React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";

const Task = (task: { taskName: string }) => {
  return (
    <View style={styles.taskContainer} className="border-solid">
      {/* checkbox */}
      <TouchableOpacity style={styles.checkbox}></TouchableOpacity>

      {/* task name */}
      <Text style={styles.taskDescription}>{task.taskName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    // flex: 1,
    flexDirection: "row",
    backgroundColor: "alticeblue",
    paddingLeft: 8,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: "blue",
    borderRadius: 50,
  },
  taskDescription: {
    paddingLeft: 8,
  },
});

export default Task;



