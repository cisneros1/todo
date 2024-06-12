import { StyleSheet, View, Text } from "react-native";

const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const IndexHeading = () => {
  const date = new Date();
  const currentDay = dayList[date.getDay()];
  console.log(date);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Today</Text>
      <Text style={styles.currentDate}>{currentDay} :: June 2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 8,
    marginBottom: 0!,
    borderBottomColor: "black",
    // borderBottomWidth: 0.5,
  },
  heading: {
    fontSize: 24,
    padding: 5,
    fontWeight: "300",
    textAlign: "center",
    marginBottom: 12,
  },
  currentDate: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    marginBottom: 0!,
  },
});

export default IndexHeading;
