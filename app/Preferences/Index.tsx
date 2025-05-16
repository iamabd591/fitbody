import { useRouter } from "expo-router";
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import backgroundImage from "../../assets/images/Preferences/background.png";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={backgroundImage}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.heading}>
          Consistency Is the Key To progress. Do not Give Up!
        </Text>
        <View style={styles.filedContainer}>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </Text>
        </View>
        <View style={styles.blurWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.navigate("/Preferences/Gender")}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232323",
    flex: 1,
  },
  backgroundImage: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: height * 0.6,
    overflow: "hidden",
    width: "100%",
  },

  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    textAlign: "center",
    color: "#E2F163",
    fontWeight: 600,
    fontSize: 35,
    padding: 5,
  },
  filedContainer: {
    backgroundColor: "#896CFE",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 100,
    padding: 14,
  },
  paragraph: {
    textAlign: "center",
    fontSize: 14,
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
