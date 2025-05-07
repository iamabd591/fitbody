import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import FadeInWrapper from "../../components/common/FadeInWrapper/FadeInWrapper";

import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

type OnboardingScreenProps = {
  description: string;
  buttonLabel: string;
  id: number;
  image: any;
  icon: any;
};
export default function OnboardingScreen({
  buttonLabel,
  description,
  image,
  icon,
  id,
}: OnboardingScreenProps) {
  const router = useRouter();
  return (
    <FadeInWrapper>
      <ImageBackground
        imageStyle={{ resizeMode: "cover" }}
        style={styles.background}
        source={image}
      >
        <View style={styles.overlay}>
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => router.replace("/main/Home")}
          >
            <Text style={styles.skipText}>Skip <Text style={styles.skipArrow}>&#8594;</Text></Text>
          </TouchableOpacity>
          <View style={styles.content}>
            <Image source={icon} resizeMode="contain" style={styles.icon} />
            <Text style={styles.description}>{description}</Text>
          </View>
          <BlurView intensity={70} tint="prominent" style={styles.blurWrapper}>
            <View style={styles.blurContent}>
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  router.push({
                    pathname: "/onboarding/[id]",
                    params: { id: id },
                  })
                }
              >
                <Text style={styles.buttonText}>{buttonLabel}</Text>
              </TouchableOpacity>
            </View>
          </BlurView>
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
    backgroundColor: "#B3A0FF",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "20%",
    padding: 10,
    gap: 5,
  },
  icon: {
    width: "100%",
  },
  description: {
    textTransform: "capitalize",
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "900",
    marginTop: 20,
    fontSize: 24,
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
  skipButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  skipText: {
    color: '#E2F163',
    fontWeight: '700',
    fontSize: 18,
  },
  skipArrow: {
    fontSize: 18,
    color: '#E2F163',
    fontWeight: '700',
  },
});
