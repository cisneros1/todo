import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";

import Task from "./Task";
import { useTaskMode } from "@/hooks/useTaskMode";
import Input from "@/components/Input";
import AddTask from "@/components/AddTask";
import EAddTaskHeight from "@/components/AddTask";

const deviceHeight = Dimensions.get("window").height;
console.log(deviceHeight);

const height = EAddTaskHeight;
console.log(height);

const ListView = () => {
  const { taskMode } = useTaskMode();
  const DATA = [
    {
      taskID: 1,
      taskName: "Task 1",
    },
    {
      taskID: 2,
      taskName: "Task 2",
    },
    {
      taskID: 3,
      taskName: "Task 3",
    },
    {
      taskID: 4,
      taskName: "Task 4",
    },
    {
      taskID: 5,
      taskName: "Task 5",
    },
    {
      taskID: 6,
      taskName: "Task 6",
    },
    {
      taskID: 7,
      taskName: "Task 7",
    },
    {
      taskID: 8,
      taskName: "Task 8",
    },
    {
      taskID: 9,
      taskName: "Task 9",
    },
    {
      taskID: 10,
      taskName: "Task 10",
    },
    {
      taskID: 11,
      taskName: "Task 11",
    },
    {
      taskID: 12,
      taskName: "Task 12",
    },
    {
      taskID: 13,
      taskName: "Task 13",
    },
    {
      taskID: 14,
      taskName: "Task 14",
    },
  ];

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={100}
      behavior={Platform.OS == "ios" ? "position" : "height"}
      style={styles.wrapper}
    >
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Task taskName={item.taskName} />}
          keyExtractor={(item) => item.taskID.toString()}
          contentContainerStyle={styles.list}
          nestedScrollEnabled={true}
        />
      </ScrollView>
      {!taskMode ? <Input /> : <AddTask />}
    </KeyboardAvoidingView>
  );
};

// just some styles for our app
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
  },
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#4066a3",
  },

  listContainer: {
    flex: 1,
    marginBottom: 100, // Ensure the list container has space at the bottom for the TextInput
  },
  list: {
    flexGrow: 1,
  },
  scrollView: {
    marginTop: 10,
    marginBottom: 10,
    height: deviceHeight - 346,
  },
});

export default ListView;
