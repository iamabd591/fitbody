import AuthFooter from "@/components/common/AuthFooter/AuthFooter";
import AuthHeader from "@/components/common/AuthHeader/AuthHeader";
import Button from "@/components/common/Button/Button";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
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

export default function SignIn() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Min 6 chars")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      router.navigate("/");
    },
  });

  return (
    <View style={styles.mainContainer}>
      <AuthHeader heading={"Sign In"} />

      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Welcome Back</Text>
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

        <View style={styles.field}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordWrapper}>
            <TextInput
              onChangeText={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              value={formik.values.password}
              style={styles.passwordInput}
            />
            <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
              <Feather
                name={showPassword ? "eye-off" : "eye"}
                style={{marginRight: 10}}
                color="#333"
                size={16}
              />
            </TouchableOpacity>
          </View>
          {formik.touched.password && formik.errors.password && (
            <Text style={styles.error}>{formik.errors.password}</Text>
          )}
        </View>

        <View style={styles.forgotpassword}>
          <TouchableOpacity onPress={() => router.replace("/auth/SendOTP")}>
            <Text style={styles.forgotlable}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Button buttonLabel={"Log In"} formik={formik} />
      </View>

      <View>
        <AuthFooter
          bottomText={"Don't have an account?"}
          text={"or sign in with"}
          link={"/auth/Signup"}
          label={"Sign Up"}
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
    height: 50,
  },
  passwordInput: {
    paddingRight: 10,
    flex: 1,
  },
});
