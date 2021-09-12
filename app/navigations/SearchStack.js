import React from "react";
import Search from "../screens/Search";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="searchs"
        component={Search}
        options={{ title: "searchhh" }}
      />
    </Stack.Navigator>
  );
}
