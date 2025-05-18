import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = 60;

export default function Age() {
  const router = useRouter();
  const [age, setAge] = useState<number>(28);
  const scrollRef = useRef<ScrollView>(null);
  const ageList = Array.from({ length: 100 }, (_, i) => i + 1);

  const scrollToAge = (selectedAge: number) => {
    const index = ageList.findIndex((a) => a === selectedAge);
    const offset = ITEM_WIDTH * index;
    scrollRef.current?.scrollTo({ x: offset, animated: true });
    setAge(selectedAge);
  };

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = event.nativeEvent.contentOffset.x;
    const index = Math.round(x / ITEM_WIDTH);
    const newAge = ageList[index];
    if (newAge !== age) setAge(newAge);
  };

  useEffect(() => {
    scrollToAge(age);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.heading}>How old are you?</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>

      <View style={styles.ageContainer}>
        <Text style={styles.age}>{age}</Text>
        <AntDesign name="caretup" size={30} color="#E2F163" />
      </View>

      <View style={styles.scrollWrapper}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScrollEnd}
          snapToInterval={ITEM_WIDTH}
          decelerationRate="fast"
          ref={scrollRef}
          bounces={false}
          horizontal
        >
          {ageList.map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => scrollToAge(item)}
              style={styles.ageItem}
            >
              <Text
                style={[styles.ageText, item === age && styles.selectedAgeText]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.borderLeft} />
        <View style={styles.borderRight} />
      </View>
      <View style={styles.blurWrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.navigate("/Preferences/Weight")}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232323",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 20,
  },
  info: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 12,
  },
  heading: {
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "900",
    fontSize: 28,
  },
  paragraph: {
    textAlign: "center",
    color: "#fff",
    fontSize: 14,
  },
  ageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  age: {
    textAlign: "center",
    fontWeight: "800",
    color: "#fff",
    fontSize: 50,
  },
  scrollWrapper: {
    backgroundColor: "#A18FFF",
    justifyContent: "center",
    position: "relative",
    width: "100%",
    height: 90,
  },
  scrollContainer: {
    paddingHorizontal: width / 2 - ITEM_WIDTH / 2,
    alignItems: "center",
  },
  ageItem: {
    width: ITEM_WIDTH,
    alignItems: "center",
  },
  ageText: {
    color: "#DADADA",
    fontWeight: "500",
    fontSize: 20,
  },
  selectedAgeText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 40,
  },
  borderLeft: {
    left: width / 2 - ITEM_WIDTH / 2,
    backgroundColor: "#fff",
    position: "absolute",
    height: "100%",
    width: 1.5,
  },
  borderRight: {
    right: width / 2 - ITEM_WIDTH / 2,
    backgroundColor: "#fff",
    position: "absolute",
    height: "100%",
    width: 1.5,
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
