import { Stack } from "expo-router";
import * as SystemUI from "expo-system-ui";
import React, { useEffect } from "react";
import { Appearance } from "react-native";

export default function RootLayout(): React.ReactElement {
  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    const isDark = colorScheme === "dark";

    SystemUI.setBackgroundColorAsync(isDark ? "#000000" : "#ffffff");
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash" />
      <Stack.Screen name="onboarding" />
    </Stack>
  );
}
