import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { LoadAssets } from "./src/Components";
import { Onboarding } from "./src/Authentication";

import Welcome from "./src/Components/Welcome/Welcome";
import { Routes } from "./src/Components/Navigation";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const Stack = createStackNavigator<Routes>();
const Authentication = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};
export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <Authentication />
    </LoadAssets>
  );
}
