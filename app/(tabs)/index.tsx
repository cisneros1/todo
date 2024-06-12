import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import IndexHeading from "@/components/IndexHedaing";
import ListView from "@/components/ListView";
import AddTaskMode from "@/components/AddTaskMode";
import AddTask from "@/components/AddTask";
import { useTaskMode } from "@/hooks/useTaskMode";

const Index = () => {
  const useMode = useTaskMode((state) => state.taskMode);

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <IndexHeading />
        <ListView />

        {useMode && <AddTaskMode />}
        <AddTask />
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fefdfc",
  },
  icon: {},
});

export default Index;
