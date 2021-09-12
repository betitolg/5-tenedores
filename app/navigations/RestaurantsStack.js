import React from "react";
import Restaurants from "../screens/Restaurants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function RestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="restaurantss"
        component={Restaurants}
        options={{ title: "Restaurantes" , headerShown: false }}
      />
      
    </Stack.Navigator>
  );
}
