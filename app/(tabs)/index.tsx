import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Task from "../../components/Task";
import AddTask from "@/components/AddTask";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
console.log(deviceHeight, deviceWidth);

const Index = () => {
  const [taskMode, setTaskMode] = useState(true);

  useEffect(() => {
    console.log("useEffect");
  }, [taskMode]);

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.innerContainer}>
          <View style={styles.taskContainer}>
            <Text style={styles.heading}>Today</Text>
            <Task taskName="task 1" />
            <Task taskName="task 2" />
          </View>

          {/* Container />*/}

          {taskMode ? (
            <View style={styles.addTaskContainer}>
              {/* Make a container  */}
              <TextInput
                style={styles.addTaskInput}
                placeholder={"Add Task"}
                placeholderTextColor={"black"}
                autoFocus={true}
              ></TextInput>
            </View>
          ) : null}
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "gray",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "space-around",
  },
  taskContainer: {
    paddingTop: 20,
    backgroundColor: "red",
    paddingBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  addTaskContainer: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    height: 120,
    justifyContent: "space-between",
    padding: 10,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  addTaskInput: {
    backgroundColor: "#f5f5f5",
    width: deviceWidth - 40,
    height: 40,
    margin: 20,
    borderRadius: 10,
    padding: 10,
    paddingEnd: 0,
    paddingBottom: 0!,
    alignContent: "flex-end",
    justifyContent: "flex-end",
  },
  icon: {},
});






export default Index;
