import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from "react-native";

import TaskContainer from "./Task";
import { useTaskMode } from "@/hooks/useTaskMode";
import Input from "@/components/Input";
import AddTask from "@/components/AddTask";
import EAddTaskHeight from "@/components/AddTask";
import { useDataStore, TaskInterface, TaskList } from "@/hooks/useDataStore";

const deviceHeight = Dimensions.get("window").height;
console.log(deviceHeight);

const height = EAddTaskHeight;
console.log(height);

const ListView = () => {
  const { taskMode } = useTaskMode();

  const { tasks }: TaskList = useDataStore();
  console.log(tasks);

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={100}
      behavior={Platform.OS == "ios" ? "position" : "height"}
      style={styles.wrapper}
    >
      <ScrollView style={styles.scrollView}>
        {tasks.map((task: TaskInterface) => (
          <TaskContainer
            key={task.taskId}
            taskId={task.taskId}
            taskName={task.taskName}
          />
        ))}
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
