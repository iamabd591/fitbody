import { router } from "expo-router";
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FaceBook from "../../../assets/icons/Facebook Icon.png";
import Goolge from "../../../assets/icons/Gmail.png";
import Apple from "../../../assets/icons/apple.png";

type AuthFooterProps = {
  bottomText: string;
  text: string;
  link: string;
  label: string;
};

const linkList = [
  {
    id: "1",
    icon: Goolge,
    link: "https://www.google.com/",
  },
  {
    id: "2",
    icon: FaceBook,
    link: "https://www.facebook.com/",
  },
  {
    id: "3",
    icon: Apple,
    link: "https://www.apple.com/",
  },
];

export default function AuthFooter({
  text,
  bottomText,
  link,
  label,
}: AuthFooterProps) {
  return (
    <View style={styles.footer}>
      <View>
        <Text style={styles.heading}>{text}</Text>
      </View>
      <View style={styles.links}>
        {linkList.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.iconWrapper}
            onPress={() => Linking.openURL(item.link)}
          >
            <Image
              source={item.icon}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.bottomTextContainer} >
        <Text style={styles.bottomText}>
          {bottomText}
        </Text>
        <TouchableOpacity onPress={()=> router.replace(link)}>
            <Text style={styles.label}>{label}</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  footer: {
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "#ffffff",
    fontWeight: "400",
    fontSize: 18,
    padding:10,
  },
  bottomTextContainer:{
    justifyContent:"center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    gap:5,
  },
  bottomText: {
    color: "#ffffff",
    fontWeight: "400",
    fontSize: 16,
  },
  label: {
    color: "#E2F163",
    fontWeight: "600",
  },
  links: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 8,
    gap: 16,
  },
  iconWrapper: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
