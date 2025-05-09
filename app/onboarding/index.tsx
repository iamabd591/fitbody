import { BlurView } from 'expo-blur';
import { useRouter } from "expo-router";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import FadeInWrapper from "../..//components/common/FadeInWrapper/FadeInWrapper";
import image from "../../assets/images/onboarding/screen1.png";
import logo from "../../assets/images/SplashScreen/logo.png";



export default function OnboardingScreen() {
  const router = useRouter();
  return (
    <FadeInWrapper>
      <ImageBackground
        style={styles.background}
        source={image}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.content}>
            <Text style={styles.title}>Welcome to</Text>
            <Image source={logo} style={styles.logo} resizeMode="center" />
            <Text style={styles.heading}>
              <Text style={styles.spanStyle}>FIT</Text>Body
            </Text>
            <BlurView intensity={50} tint="prominent" style={styles.blurWrapper}>
              <View style={styles.blurContent}>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    router.push({
                      pathname: "/onboarding/[id]",
                      params: { id: "1" },
                    })
                  }
                >
                  <Text style={styles.buttonText}>{"Next"}</Text>
                </TouchableOpacity>
              </View>
            </BlurView>
          </View>
        </View>
      </ImageBackground>

    </FadeInWrapper>
  );
}

const styles = StyleSheet.create({
  background: {
    justifyContent: "center",
    height: "100%",
    width: "100%",
    flex: 1,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
  content: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    width: "100%",
    padding: 10,
    gap: 3,
    flex: 1,
  },
  icon: {
    marginBottom: 20,
    height: 100,
    width: 100,
  },
  description: {
    textAlign: "center",
    color: "#ffffff",
    marginBottom: 30,
    fontSize: 18,
  },
  button: {
    backgroundColor: "transparent",
    borderColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 7,
    cursor: "pointer",
    borderRadius: 30,
    borderWidth: 1,
    width: "100%",
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "800",
    fontSize: 18,
  },
  blurWrapper: {
    borderRadius: 30,
    marginTop: 10,
    width: '50%',
  },
  blurContent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 400,
  },
  heading: {
    textTransform: "uppercase",
    fontStyle: "italic",
    color: "#E2F163",
    fontSize: 50,
  },
  spanStyle: {
    fontWeight: "800",
  },
  title: {
    transform: "uppercase",
    color: "#E2F163",
    fontWeight: "500",
    paddingBottom: 10,
    fontSize: 25,
  }
});
