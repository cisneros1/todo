import React, { useState } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
} from "react-native";

import Task from "./Task";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";
import { useTaskMode } from "@/hooks/useTaskMode";
import Input from "@/components/Input";
import AddTask from "@/components/AddTask";

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
  ];

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={60}
      behavior={Platform.OS == "ios" ? "position" : "height"}
      style={styles.wrapper}
    >
      <KeyboardAwareFlatList
        data={DATA}
        renderItem={({ item }) => <Task taskName={item.taskName} />}
        keyExtractor={(item) => item.taskID}
        contentContainerStyle={styles.list}
      />
      {taskMode ? <Input /> : <AddTask />}
    </KeyboardAvoidingView>
  );
};

// just some styles for our app
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#4066a3",
  },

  listContainer: {
    flex: 1,
    marginBottom: 60, // Ensure the list container has space at the bottom for the TextInput
  },
  list: {
    flexGrow: 1,
  },
});

export default ListView;
