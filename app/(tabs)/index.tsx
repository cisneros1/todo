import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Button,
} from "react-native";
import IndexHeading from "@/components/IndexHedaing";
import ListView from "@/components/ListView";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
// console.log(deviceHeight, deviceWidth);

const Index = () => {
  const [taskMode, setTaskMode] = useState(false);

  const addTask = () => {
    console.log("add task");
  };

  useEffect(() => {
    console.log("useEffect");
  }, [taskMode]);

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <IndexHeading />
        <ListView />

        {taskMode ? (
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
            {/* Button ends here */}
          </View>
        ) : null}
        {/* inner container ends here} */}
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "purple",
  },

  addTaskContainer: {
    flexDirection: "column",
    flex: 1,

    marginTop: 165,
    // ------------------ Color ------------------
    backgroundColor: "orange",

    // Size
    height: 135,

    // ------------------ Border Radius ------------------
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },

  addTaskInput: {
    backgroundColor: "yellow",
    width: deviceWidth - 40,
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
  icon: {},
});

export default Index;
