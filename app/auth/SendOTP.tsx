import AuthHeader from "@/components/common/AuthHeader/AuthHeader";
import Button from "@/components/common/Button/Button";
import { useRouter } from "expo-router";
import { useFormik } from "formik";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import * as Yup from "yup";

export default function SendOTP() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      router.navigate("/auth/VerifyOTP");
    },
  });
  return (
    <View style={styles.mainContainer}>
      <AuthHeader heading={"Verify Email"} />

      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Verify Your Email</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          eveniet.
        </Text>
      </View>

      <View style={styles.filedContainer}>
        <View style={styles.field}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            onChangeText={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            placeholder="Enter your email"
            value={formik.values.email}
            style={styles.input}
          />
          {formik.touched.email && formik.errors.email && (
            <Text style={styles.error}>{formik.errors.email}</Text>
          )}
        </View>
      </View>

      <View>
        <Button
          buttonLabel={"Continue"}
          formik={formik}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#232323",
    justifyContent: "center",
    flex: 1,
    gap: 40,
  },
  headingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "#ffffff",
    fontWeight: "400",
    fontSize: 30,
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
    padding: 10,
    height: 50,
  },
  error: {
    color: "red",
    marginTop: 4,
    fontSize: 16,
  },
});
