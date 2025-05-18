import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Goal() {
  const router = useRouter();
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const goals = [
    { id: "1", goal: "Muscle Mass Gain" },
    { id: "2", goal: "Lose Weight" },
    { id: "3", goal: "Gain Weight" },
    { id: "4", goal: "Shape Body" },
    { id: "5", goal: "Other" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>What Is Your Goal?</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <View style={styles.fieldContainer}>
        {goals.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.goalItem,
              selectedGoal === item.id && styles.selectedGoalItem,
            ]}
            onPress={() => setSelectedGoal(item.id)}
          >
            <Text
              style={[
                styles.goalText,
                selectedGoal === item.id && styles.selectedGoalText,
              ]}
            >
              {item.goal}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.blurWrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (!selectedGoal) return;
            router.navigate("/Preferences/Activity");
          }}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1E1E",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap:20,
  },
  heading: {
    textAlign: "center",
    fontWeight: "900",
    marginBottom: 12,
    color: "#fff",
    fontSize: 24,
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
    color: "#ccc",
    fontSize: 13,
  },
  fieldContainer: {
    backgroundColor: "#896CFE",
    width: "100%",
    padding: 20,
    gap: 16,
  },
  goalItem: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 12,
  },
  selectedGoalItem: {
    backgroundColor: "#E2F163",
  },
  goalText: {
    fontSize: 16,
    color: "#1E1E1E",
    fontWeight: "600",
  },
  selectedGoalText: {
    fontWeight: "800",
  },
  button: {
    backgroundColor: "#232323",
    justifyContent: "center",
    borderColor: "#fff",
    alignItems: "center",
    paddingBottom: 3,
    borderRadius: 40,
    borderWidth: 1,
    marginTop: 10,
    height: 45,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 18,
  },
  blurWrapper: {
    alignSelf: "center",
    width: "50%",
  },
});
