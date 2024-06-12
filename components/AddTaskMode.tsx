import { Button, Dimensions, StyleSheet, TextInput, View } from "react-native";
import React from "react";

const deviceWidth = Dimensions.get("window").width;

const AddTaskMode = () => {
  const addTask = () => {
    console.log("add task");
  };

  return (
    <View style={styles.addTaskContainer}>
      <TextInput
        style={styles.addTaskInput}
        placeholder={"Add Task"}
        placeholderTextColor={"black"}
        autoFocus={false}
      ></TextInput>
      <View style={styles.button}>
        <Button
          onPress={addTask}
          title="Add Task"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addTaskContainer: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "orange",
    marginTop: 165,
    height: 135,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },

  addTaskInput: {
    width: deviceWidth - 40,
    backgroundColor: "white",
    height: 10,
    margin: 20,
    borderRadius: 10,
    padding: 15,
  },
  button: {
    backgroundColor: "green",
    margin: "auto",
    marginRight: 15,
    marginTop: 0,
    borderRadius: 5,
  },
});

export default AddTaskMode;
