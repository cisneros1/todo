import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import IndexHeading from "@/components/IndexHedaing";
import ListView from "@/components/ListView";
import { View } from "react-native";

const Index = () => {
  return (
    <>
      <View style={styles.container}>
        <IndexHeading />
        <ListView />
        {/*<AddTask />*/}
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
