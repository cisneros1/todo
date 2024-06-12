import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Task from "./Task";

const ListView = () => {
  return (
    <View style={styles.outerContainer}>
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
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "space-around",
  },
  container: {
    flex: 1,
    marginBottom: 60,
    backgroundColor: "#fefdfc",
  },
  taskContainer: {
    paddingTop: 15,
    paddingBottom: 20,
  },
});

export default ListView;
