import AuthFooter from "@/components/common/AuthFooter/AuthFooter";
import AuthHeader from "@/components/common/AuthHeader/AuthHeader";
import Button from "@/components/common/Button/Button";
import Feather from "@expo/vector-icons/Feather";
import { useFormik } from "formik";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Yup from "yup";

export default function Signup() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfrimPassword, setShowConfrimPassword] =
    useState<boolean>(false);

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Fullname is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Min 8 chars")
      .required("Password is required"),
    confrimPassword: Yup.string()
      .min(8, "Min 8 chars")
      .required("Confrim Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      confrimPassword: "",
      phoneNumber: "",
      password: "",
      fullName: "",
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (values.password !== values.confrimPassword) {
        return alert("Password do not match");
      }
      console.log(values);
    },
  });
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled"
    >
      <AuthHeader heading={"Sign Up"} />
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>let&apos;s start!</Text>
      </View>
      <View style={styles.filedContainer}>
        <View style={styles.field}>
          <Text style={styles.label}>Fullname</Text>
          <TextInput
            onChangeText={formik.handleChange("fullName")}
            onBlur={formik.handleBlur("fullName")}
            placeholder="Enter your full name"
            value={formik.values.fullName}
            style={styles.input}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <Text style={styles.error}>{formik.errors.fullName}</Text>
          )}
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            onChangeText={formik.handleChange("phoneNumber")}
            onBlur={formik.handleBlur("phoneNumber")}
            placeholder="Enter your phone number"
            value={formik.values.phoneNumber}
            style={styles.input}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <Text style={styles.error}>{formik.errors.phoneNumber}</Text>
          )}
        </View>

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

      <View style={styles.conditions}>
        <Text style={styles.conditionsText}>
          By continuing, you agree to{" "}
          <Text style={styles.conditionsBold}> Terms of Use </Text> and{" "}
          <Text style={styles.conditionsBold}>Privacy Policy</Text>.
        </Text>
      </View>
      <View>
        <Button buttonLabel={"Sign Up"} formik={formik} />
      </View>

      <View>
        <AuthFooter
          bottomText={"Already have an account?"}
          text={"or sign up with"}
          link={"/auth/SignIn"}
          label={"Log In"}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#232323",
    flexGrow: 1,
    gap: 20,
    paddingVertical: 10,
  },
  headingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    textTransform: "capitalize",
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 30,
  },
  filedContainer: {
    backgroundColor: "#896CFE",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    width: "100%",
    padding: 20,
    gap: 20,
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
    outlineColor: "none",
    borderRadius: 10,
    width: "100%",
    padding: 10,
    height: 50,

  },
  error: {
    color: "red",
    marginTop: 4,
    fontSize: 16,
  },
  conditions: {
    justifyContent: "center",
    alignItems: "center",
  },
  conditionsText: {
    textAlign: "center",
    fontWeight: "400",
    color: "#ffffff",
    fontSize: 16,
  },
  conditionsBold: {
    color: "#E2F163",
    fontWeight: "500",
  },
  forgotpassword: {
    alignSelf: "flex-end",
    marginRight: 5,
    marginTop: 10,
  },
  forgotlable: {
    fontWeight: 600,
    fontSize: 16,
  },
  passwordWrapper: {
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    width:"100%",
    height: 50,
  },
  passwordInput: {
    width: "100%",
    height:"100%",
    flex: 1,
  },
});
