import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Task from "./Task";

const ListView = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.taskContainer}>
        <Task taskName="task 1" />
        <Task taskName="task 2" />
        <Task taskName="task 3" />
        <Task taskName="task 4" />
        <Task taskName="task 5" />
        <Task taskName="task 6" />
        <Task taskName="task 7" />
        <Task taskName="task 8" />
        <Task taskName="task 9" />
        <Task taskName="task 10" />
        <Task taskName="task 11" />
        <Task taskName="task 12" />
        <Task taskName="task 13" />
        <Task taskName="task 14" />
        <Task taskName="task 15" />
        <Task taskName="task 16" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 60,
  },
  taskContainer: {
    paddingTop: 20,
    backgroundColor: "red",
    paddingBottom: 20,
  },
});

export default ListView;
