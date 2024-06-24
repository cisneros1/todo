import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { TaskInterface } from "/Users/brianc/Software/todo/hooks/useDataStore";

const TaskContainer = ({ taskId, taskName }: TaskInterface) => {
  console.log(taskId);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}></TouchableOpacity>
      <Text style={styles.text}>{taskName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 12,
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "blue",
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  text: {
    paddingLeft: 6.5,
    paddingTop: 3,
    fontSize: 18,
    color: "black",
  },
  button: {
    height: 25,
    width: 25,
    borderRadius: 50,
    backgroundColor: "grey",
  },
});

export default TaskContainer;
