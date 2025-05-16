import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Gender() {
  const router = useRouter();
  const [selectedGender, setSelectedGender] = useState<
    "male" | "female" | null
  >(null);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>What&apos;s your Gender?</Text>

      <View style={styles.filedContainer}>
        <Text style={styles.paragraph}>
          Please select your gender to continue setting up your profile.
        </Text>
      </View>

      <View style={styles.genderOptions}>
        <TouchableOpacity
          style={[
            styles.genderCircle,
            selectedGender === "male" && styles.genderCircleSelected,
          ]}
          onPress={() => setSelectedGender("male")}
        >
          <MaterialCommunityIcons
            color={selectedGender === "male" ? "#000" : "#fff"}
            name="gender-male"
            size={36}
          />
        </TouchableOpacity>
        <Text style={styles.genderHeading}>Male</Text>

        <TouchableOpacity
          style={[
            styles.genderCircle,
            selectedGender === "female" && styles.genderCircleSelected,
          ]}
          onPress={() => setSelectedGender("female")}
        >
          <MaterialCommunityIcons
            color={selectedGender === "female" ? "#000" : "#fff"}
            name="gender-female"
            size={36}
          />
        </TouchableOpacity>
        <Text style={styles.genderHeading}>Female</Text>
      </View>

      <View style={styles.blurWrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.navigate("/Preferences/Age")}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232323",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 30,
  },
  heading: {
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "900",
    fontSize: 28,
  },
  filedContainer: {
    backgroundColor: "#896CFE",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 16,
    height: 100,
  },
  paragraph: {
    textAlign: "center",
    color: "#fff",
    fontSize: 15,
  },
  genderOptions: {
    flexDirection: "column",
    alignItems: "center",
    gap: 25,
  },
  genderCircle: {
    backgroundColor: "#444343",
    borderColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 2,
    height: 100,
    width: 100,
  },
  genderCircleSelected: {
    backgroundColor: "#E2F163",
    borderColor: "#E2F163",
  },
  genderHeading: {
    color: "#E2F163",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 24,
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
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
  },
  blurWrapper: {
    width: "50%",
  },
});
