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
const ITEM_WIDTH = 50;

export default function Weight() {
  const router = useRouter();
  const [weight, setWeight] = useState<number>(0);
  const [unit, setUnit] = useState<string>("Kg");
  const scrollRef = useRef<ScrollView>(null);
  const weightList = Array.from({ length: 200 }, (_, i) => i + 1);

  const scrollToWeight = (value: number) => {
    const index = weightList.findIndex((w) => w === value);
    const offset = index * ITEM_WIDTH;
    scrollRef.current?.scrollTo({ x: offset, animated: true });
    setWeight(value);
  };

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = event.nativeEvent.contentOffset.x;
    const index = Math.round(x / ITEM_WIDTH);
    const newWeight = weightList[index];
    if (newWeight !== weight) setWeight(newWeight);
  };

  useEffect(() => {
    scrollToWeight(weight);
  }, []);

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>← Back</Text>
      </TouchableOpacity> */}

      <View style={styles.info}>
        <Text style={styles.heading}>What Is Your Weight?</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>

      <View style={styles.unitSwitcher}>
        <TouchableOpacity
          onPress={() => setUnit("Kg")}
          style={[styles.unitBtn, unit === "Kg" && styles.unitActive]}
        >
          <Text style={styles.unitText}>KG</Text>
        </TouchableOpacity>
        <View style={styles.unitDivider} />
        <TouchableOpacity
          onPress={() => setUnit("Lb")}
          style={[styles.unitBtn, unit === "Lb" && styles.unitActive]}
        >
          <Text style={styles.unitText}>LB</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.scrollSection}>
        <ScrollView
          ref={scrollRef}
          contentContainerStyle={styles.scrollContainer}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScrollEnd}
          snapToInterval={ITEM_WIDTH}
          decelerationRate="fast"
          horizontal
        >
          {weightList.map((item) => (
            <View key={item} style={styles.itemWrapper}>
              <Text
                style={[
                  styles.scrollItem,
                  item === weight && styles.scrollItemActive,
                ]}
              >
                {item}
              </Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.centerIndicatorLine} />
        <View style={styles.centerArrow}>
          <AntDesign name="caretdown" size={18} color="#E2F163" />
        </View>
      </View>

      <Text style={styles.selectedWeight}>
        {weight} <Text style={styles.unitDisplay}>{unit}</Text>
      </Text>

      <View style={styles.blurWrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (!weight) return;
            router.navigate("/Preferences/Height");
          }}
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
  back: {
    color: "#E2F163",
    fontSize: 16,
  },
  info: {
    justifyContent: "center",
    alignItems: "center",
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
  unitSwitcher: {
    backgroundColor: "#E2F163",
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 10,
    overflow: "hidden",
    borderRadius: 10,
    width: "80%",
    height: 50,
  },
  unitBtn: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  unitText: {
    fontWeight: "700",
    color: "#000",
    fontSize: 18,
  },
  unitActive: {
    backgroundColor: "#D1EC3C",
  },
  unitDivider: {
    width: 2,
    backgroundColor: "#000",
  },
  scrollSection: {
    backgroundColor: "#A18FFF",
    justifyContent: "center",
    position: "relative",
    height: 90,
  },
  scrollContainer: {
    paddingHorizontal: width / 2 - ITEM_WIDTH / 2,
    alignItems: "center",
  },
  itemWrapper: {
    width: ITEM_WIDTH,
    alignItems: "center",
  },
  scrollItem: {
    color: "#CFCFCF",
    fontSize: 22,
    fontWeight: "500",
  },
  scrollItemActive: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
  centerIndicatorLine: {
    backgroundColor: "#E2F163",
    position: "absolute",
    left: width / 2 - 1,
    height: "100%",
    width: 2,
  },
  centerArrow: {
    left: width / 2 - 10,
    position: "absolute",
    zIndex: 10,
    top: -10,
  },
  selectedWeight: {
    textAlign: "center",
    fontWeight: "800",
    color: "#fff",
    fontSize: 50,
  },
  unitDisplay: {
    color: "#cfcdcd",
    fontSize: 20,
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
    fontWeight: "600",
    fontSize: 18,
  },
  blurWrapper: {
    alignSelf: "center",
    width: "50%",
  },
});
