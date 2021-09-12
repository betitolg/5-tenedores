import Account from "../screens/Favorites";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="accounts"
        component={Account}
        options={{ title: "AccountP" }}
      />
    </Stack.Navigator>
  );
}
