import AuthHeader from "@/components/common/AuthHeader/AuthHeader";
import Button from "@/components/common/Button/Button";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import { useFormik } from "formik";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Yup from "yup";

export default function SetPassword() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfrimPassword, setShowConfrimPassword] =
    useState<boolean>(false);

  const formik = useFormik({
    initialValues: { password: "", confrimPassword: "" },
    validationSchema: Yup.object({
      password: Yup.string().required("Password is required"),
      confrimPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: (values) => {
      console.log(values);
      router.navigate("/Preferences/Index");
    },
  });
  return (
    <View style={styles.mainContainer}>
      <AuthHeader heading={"Set Password"} />
      <Text style={styles.paragraph}>Set your new password for the app </Text>
      <View style={styles.filedContainer}>
        <View style={styles.field}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordWrapper}>
            <TextInput
              onChangeText={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              value={formik.values.password}
              style={styles.input}
            />
            <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
              <Feather
                name={showPassword ? "eye-off" : "eye"}
                style={{ marginRight: 10 }}
                color="#333"
                size={16}
              />
            </TouchableOpacity>
          </View>
            {formik.touched.password && formik.errors.password && (
              <Text style={styles.error}>{formik.errors.password}</Text>
            )}
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Confrim Password</Text>
          <View style={styles.passwordWrapper}>
            <TextInput
              onChangeText={formik.handleChange("confrimPassword")}
              onBlur={formik.handleBlur("confrimPassword")}
              secureTextEntry={!showConfrimPassword}
              value={formik.values.confrimPassword}
              placeholder="Enter confrim password"
              style={styles.input}
            />
            <TouchableOpacity
              onPress={() => setShowConfrimPassword((prev) => !prev)}
            >
              <Feather
                name={showConfrimPassword ? "eye-off" : "eye"}
                style={{ marginRight: 10 }}
                color="#333"
                size={16}
              />
            </TouchableOpacity>
          </View>
            {formik.touched.confrimPassword &&
              formik.errors.confrimPassword && (
                <Text style={styles.error}>
                  {formik.errors.confrimPassword}
                </Text>
              )}
        </View>
      </View>

      <View>
        <Button buttonLabel={"Set Password"} formik={formik} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#232323",
    justifyContent: "center",
    flex: 1,
    gap: 20,
  },
  paragraph: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
  },
  filedContainer: {
    backgroundColor: "#896CFE",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    width: "100%",
    padding: 14,
    gap: 10,
  },
  field: {
    width: "100%",
  },
  label: {
    fontWeight: "600",
    marginBottom: 5,
    color: "#000",
    fontSize: 16,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    outline: "none",
    width: "100%",
    padding: 10,
    height: 50,

  },
  error: {
    color: "red",
    marginTop: 4,
    fontSize: 16,
  },
  passwordWrapper: {
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    height: 50,

  },
  passwordInput: {
    paddingRight: 10,
    flex: 1,
  },
});
