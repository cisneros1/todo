import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, TextInput } from "react-native";
import Task from "../../components/Task";
import AddTask from "@/components/AddTask";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
console.log(deviceHeight, deviceWidth);

const Index = () => {
  const [taskMode, setTaskMode] = useState(true);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.taskContainer}>
          <Text style={styles.heading}>Today</Text>
          <Task taskName="task 1" />
          <Task taskName="task 2" />
        </View>

        {/* Container />*/}



        {taskMode ? (
          <View style={styles.addTaskContainer}>
          {/* Make a container  */}
            <TextInput style={styles.addTaskInput} placeholder={"Add Task"}>

            </TextInput>


          </View>
        ) : null


        }
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "gray",
    height: 80,
  },
  taskContainer: {
    paddingTop: 20,
    backgroundColor: "red",
    paddingBottom: 20,
    // width: "100%",
    // height: "100%",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  addTaskContainer: {
    backgroundColor: "#ffffff",
    width: deviceWidth,
    marginTop : 20,
    height: (deviceHeight / 6),
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
  },
  icon: {},
});

export default Index;
