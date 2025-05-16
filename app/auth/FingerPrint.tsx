import * as LocalAuthentication from "expo-local-authentication";
import React, { useEffect, useState } from "react";
import { Alert, Button, Text, View } from "react-native";

export default function FingerPrint() {
  const [isHardwareSupported, setIsHardwareSupported] = useState(false);
  const [isFingerprintEnrolled, setIsFingerprintEnrolled] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      const enrolled = await LocalAuthentication.isEnrolledAsync();
      setIsHardwareSupported(compatible);
      setIsFingerprintEnrolled(enrolled);
    })();
  }, []);

  const handleAuthentication = async () => {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate with fingerprint",
      fallbackLabel: "Enter passcode",
    });

    if (result.success) {
      setAuthenticated(true);
      Alert.alert("Success", "Authenticated successfully!");
    } else {
      Alert.alert("Failed", "Authentication failed!");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {authenticated ? (
        <Text style={{ fontSize: 18, color: "green" }}>Unlocked!</Text>
      ) : (
        <>
          <Text style={{ fontSize: 18, marginBottom: 20 }}>
            Fingerprint Auth Setup
          </Text>
          {isHardwareSupported && isFingerprintEnrolled ? (
            <Button title="Authenticate via Fingerprint" onPress={handleAuthentication} />
          ) : (
            <Text>Fingerprint not supported or not enrolled.</Text>
          )}
        </>
      )}
    </View>
  );
}
