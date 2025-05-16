import { FormikProps } from "formik";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ButtonProps = {
  buttonLabel: string;
  formik: FormikProps<any>;
};

export default function Button({ buttonLabel, formik }: ButtonProps) {
  return (
    <View style={styles.container}>
      <View style={styles.blurWrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => formik.handleSubmit()}
        >
          <Text style={styles.buttonText}>{buttonLabel}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  button: {
    justifyContent: "center",
    borderColor: "#fff",
    paddingHorizontal: 20,
    alignItems: "center",
    paddingVertical: 7,
    borderRadius: 40,
    borderWidth: 1,
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
