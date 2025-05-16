import AuthHeader from "@/components/common/AuthHeader/AuthHeader";
import { useRouter } from "expo-router";
import { useFormik } from "formik";
import React, { useRef } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import * as Yup from "yup";

export default function VerifyOTP() {
  const router = useRouter();
  const otpRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];
  const formik = useFormik({
    initialValues: {
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
    },
    validationSchema: Yup.object({
      otp1: Yup.string().length(1).required(" "),
      otp2: Yup.string().length(1).required(" "),
      otp3: Yup.string().length(1).required(" "),
      otp4: Yup.string().length(1).required(" "),
    }),
    onSubmit: (values) => {
      const otp = values.otp1 + values.otp2 + values.otp3 + values.otp4;
      console.log("Entered OTP:", otp);
      router.navigate("/auth/SetPassword");
    },
  });

  const handleChange = (text: string, field: string, index: number) => {
    formik.setFieldValue(field, text);
    if (text && index < 3) {
      otpRefs[index + 1].current?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <AuthHeader heading={"Verify OTP"} />
      <Text style={styles.paragraph}>
        Enter the OTP which was sent to your email
      </Text>
      <View style={styles.otpContainer}>
        {["otp1", "otp2", "otp3", "otp4"].map((field, index) => (
          <TextInput
            value={formik.values[field as keyof typeof formik.values]}
            onChangeText={(text) => handleChange(text, field, index)}
            keyboardType="numeric"
            ref={otpRefs[index]}
            style={styles.input}
            maxLength={1}
            key={field}
          />
        ))}
      </View>
      {formik.errors && Object.values(formik.errors).some(Boolean) && (
        <Text style={styles.error}>Please enter a valid 4-digit code</Text>
      )}
      <TouchableOpacity
        style={styles.submitBtn}
        onPress={() => formik.handleSubmit()}
      >
        <Text style={styles.submitText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232323",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    flex: 1,
  },
  paragraph: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    margin: 20,
  },
  otpContainer: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 10,
  },
  input: {
    backgroundColor: "#fff",
    textAlign: "center",
    borderRadius: 10,
    fontSize: 20,
    height: 50,
    width: 50,
  },
  error: {
    marginBottom: 10,
    color: "red",
  },
  submitBtn: {
    backgroundColor: "#896CFE",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 10,
  },
  submitText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 16,
  },
});
