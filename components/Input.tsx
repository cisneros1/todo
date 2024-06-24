import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useRef } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDataStore } from "@/hooks/useDataStore";

export default function Input() {
  const [enteredTask, setEnteredTask] = React.useState("");
  const taskStore = useDataStore();

  useEffect(() => {
    console.log("tasks: ", taskStore.tasks);
  }, [taskStore.tasks]);

  const handleSubmit = (text: string) => {
    if (text === "") return;
    console.log("submit: " + text);
    try {
      taskStore.addTask({
        taskId: taskStore.tasks.length + 1,
        taskName: text,
      });
    } catch (error) {
      console.log("ERROR IN TRY CATCH");
    }
  };

  const handlePress = () => {
    if (enteredTask === "") return;
    console.log("pressed");
    console.log(enteredTask);
  };

  return (
    <View style={styles.screen}>
      <TextInput
        id="textInputId"
        style={styles.textInput}
        placeholder="Enter something here"
        onSubmitEditing={(event) => {
          event.preventDefault();
          handleSubmit(event.nativeEvent.text);
        }}
        clearTextOnFocus={true}
        onChangeText={(text) => setEnteredTask(text)}
      />
      <TouchableOpacity onPress={() => handlePress()} style={styles.button}>
        <Icon
          name={"arrow-up"}
          size={20}
          color={"white"}
          style={{
            shadowColor: "black",
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 2 },
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#4066a3",
  },
  textInput: {
    backgroundColor: "#fff",
    marginBottom: 65,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
    padding: 7,
    paddingBottom: 10,
    height: 40,
    width: 300,
  },
  button: {
    width: 38,
    height: 38,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 50,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: "gray",
    marginLeft: 10,
  },
});
