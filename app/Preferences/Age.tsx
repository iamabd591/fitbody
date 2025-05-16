import { StyleSheet, Text, View } from "react-native";

export default function Age() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Comming Soon</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232323",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  heading: {
    fontWeight: "900",
    color: "#fff",
    fontSize: 22,
  },
});
