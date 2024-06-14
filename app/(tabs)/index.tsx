import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import IndexHeading from "@/components/IndexHedaing";
import ListView from "@/components/ListView";
import { View } from "react-native";
import { useTaskMode } from "@/hooks/useTaskMode";
import AddTask from "@/components/AddTask";

const Index = () => {
  const { taskMode } = useTaskMode();

  return (
    <>
      <View style={styles.container}>
        <IndexHeading />
        <ListView />
      </View>
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
