import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import logo from "../assets/images/SplashScreen/logo.png";
import FadeInWrapper from "../components/common/FadeInWrapper/FadeInWrapper";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const time = setTimeout(() => {
      router.replace("/onboarding/");
    }, 3000);
    return () => clearTimeout(time);
  });

  return (
    <FadeInWrapper>
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.heading}>
        <Text style={styles.spanStyle}>FIT</Text>Body
      </Text>
    </View>
    </FadeInWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232323",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 10,
  },
  logo: {
    width: 200,
  },
  heading: {
    textTransform: "uppercase",
    fontStyle: "italic",
    color: "#E2F163",
    fontSize: 40,
  },
  spanStyle: {
    fontWeight: "800",
  },
});
