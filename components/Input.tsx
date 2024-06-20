import {
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useRef } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDataStore } from "@/hooks/useDataStore";

export default function Input() {
  const textInputRef = useRef<TextInput | null>(null);
  const tasks = useDataStore();

  const handleSubmit = (input: string) => {
    textInputRef.current != null ? textInputRef.current.clear() : null;
    console.log(input);

    // add task to list
    tasks.addTask({
      taskId: tasks.tasks.length + 1,
      taskName: input,
    });
  };

  return (
    <View
      style={styles.screen}
      onLayout={(event) => {
        const { x, y, width, height } = event.nativeEvent.layout;
        const AddTaskHeight = height;
      }}
    >
      <TextInput
        ref={textInputRef}
        style={styles.textInput}
        placeholder="Enter something here"
        onSubmitEditing={(event) => handleSubmit(event.nativeEvent.text)}
        clearTextOnFocus={true}
      />
      <TouchableOpacity style={styles.button}>
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
