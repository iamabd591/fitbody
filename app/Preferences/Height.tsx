import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const ITEM_HEIGHT = 70;
const VISIBLE_ITEMS = 5;
const heightList = Array.from({ length: 201 }, (_, i) => i + 100); // 100cm to 300cm

export default function Height() {
  const router = useRouter();
  const [height, setHeight] = useState<number>(165);
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    const index = heightList.findIndex((h) => h === height);
    scrollRef.current?.scrollTo({ y: ITEM_HEIGHT * index, animated: false });
  }, []);

  const handleScrollEnd = (e: any) => {
    const index = Math.round(e.nativeEvent.contentOffset.y / ITEM_HEIGHT);
    setHeight(heightList[index]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>What Is Your Height?</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <Text style={styles.selectedHeight}>
        {height}
        <Text style={styles.unit}>cm</Text>
      </Text>

      <View style={styles.rulerWrapper}>
        <ScrollView
          ref={scrollRef}
          showsVerticalScrollIndicator={false}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          onMomentumScrollEnd={handleScrollEnd}
          contentContainerStyle={styles.scrollContent}
        >
          {heightList.map((val) => (
            <View key={val} style={styles.rulerItem}>
              <Text
                style={[
                  styles.rulerText,
                  val === height && styles.highlightedRulerText,
                ]}
              >
                {val}
              </Text>
              <View style={styles.tick} />
            </View>
          ))}
        </ScrollView>

        {/* Center Line + Icon */}
        <View style={styles.centerIndicator}>
          <View style={styles.centerLine} />
          <AntDesign name="caretleft" size={24} color="#E2F163" style={styles.icon} />
        </View>
      </View>

      <View style={styles.blurWrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (!height) return;
            router.navigate("/Preferences/Goal");
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
    backgroundColor: "#1E1E1E",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  heading: {
    textAlign: "center",
    fontWeight: "900",
    marginBottom: 12,
    color: "#fff",
    fontSize: 24,
  },
  description: {
    paddingHorizontal: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#ccc",
    fontSize: 13,
  },
  selectedHeight: {
    fontWeight: "900",
    color: "#fff",
    fontSize: 48,
  },
  unit: {
    color: "#ccc",
    marginLeft: 4,
    fontSize: 20,
  },
  rulerWrapper: {
    height: ITEM_HEIGHT * VISIBLE_ITEMS,
    backgroundColor: "#A58FFF",
    justifyContent: "center",
    position: "relative",
    alignItems: "center",
    marginVertical: 20,
    borderRadius: 8,
    width: 100,
  },
  scrollContent: {
    paddingVertical: ITEM_HEIGHT * 2,
    alignItems: "center",
  },
  rulerItem: {
    justifyContent: "center",
    height: ITEM_HEIGHT,
    alignItems: "center",
    width: "100%",
  },
  rulerText: {
    color: "#fff",
    fontSize: 20,
    opacity: 0.4,
  },
  highlightedRulerText: {
    fontWeight: "bold",
    fontSize: 24,
    opacity: 1,
  },
  tick: {
    backgroundColor: "#fff",
    marginTop: 2,
    opacity: 0.6,
    height: 2,
    width: 20,
  },
  centerIndicator: {
    position: "absolute",
    top: ITEM_HEIGHT * 2 - 1,
    left: 0,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  centerLine: {
    backgroundColor: "#E2F163",
    borderRadius: 2,
    width: "60%",
    height: 2,
  },
  icon: {
    position: "absolute",
    right: -26,
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
