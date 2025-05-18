import Ionicons from '@expo/vector-icons/Ionicons';
import * as ImagePicker from "expo-image-picker";
import { useRouter } from 'expo-router';
import { useState } from "react";
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function UploadProfile() {
    const router = useRouter();
  const [image, setImage] = useState<string | null>(null);
  const pickImage = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [1, 1],
    quality: 1,
  });

  if (!result.canceled) {
    setImage(result.assets[0].uri);
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Upload Profile</Text>
      <Text style={styles.description}>
        Choose a profile picture so your friends know it&apos;s you.
      </Text>

      <Pressable style={styles.imageWrapper} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <View style={styles.placeholder}>
            <Ionicons name="cloud-upload" size={24} color="#999" />
            <Text style={styles.placeholderText}>Upload</Text>
          </View>
        )}
      </Pressable>

      <TouchableOpacity style={styles.button} onPress={()=>router.navigate("/Home/Index")}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    gap: 24,
  },
  heading: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "900",
    textAlign: "center",
  },
  description: {
    color: "#aaa",
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 16,
  },
  imageWrapper: {
    shadowOffset: { width: 0, height: 4 },
    backgroundColor: "#2E2E2E",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    overflow: "hidden",
    borderRadius: 80,
    shadowRadius: 6,
    width: 160,
    height: 160,
    elevation: 8,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  placeholder: {
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  placeholderText: {
    color: "#999",
    fontSize: 13,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#E2F163",
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 40,
  },
  buttonText: {
    color: "#1E1E1E",
    fontWeight: "bold",
    fontSize: 16,
  },
});
