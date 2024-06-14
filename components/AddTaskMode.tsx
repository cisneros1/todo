import { TextInput } from "react-native";
import React from "react";

export default function AddTaskMode() {
  return (
    <TextInput
      placeholder="Enter task"
      placeholderTextColor={"black"}
      style={{
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
      }}
    />
  );
}
