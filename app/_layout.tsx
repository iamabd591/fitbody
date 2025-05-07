import { Stack } from "expo-router";
import React from 'react';

export default function RootLayout(): React.ReactElement {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="splash" />
      <Stack.Screen name="onboarding" />
    </Stack>
  );
}
