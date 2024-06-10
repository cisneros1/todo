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

const Separator = () => <View style={styles.separator} />;

const IndexHeading = () => {
  const date = new Date();
  const currentDay = dayList[date.getDay()];
  console.log(date);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Today</Text>
      <Text style={styles.currentDate}>{currentDay}</Text>

      <Separator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    padding: 20,
    marginBottom: 0,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  currentDate: {
    fontSize: 18,
    textAlign: "center",
  },
  separator: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default IndexHeading;
