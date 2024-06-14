import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type TaskProps = {
  // taskId: number;
  taskName: string;
};

const Task = ({ taskName }: TaskProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{taskName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "blue",
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    marginHorizontal: 15,
    marginBottom: 12,
  },
  text: {
    fontSize: 18,
    color: "black",
  },
});

export default Task;
