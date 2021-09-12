import React from "react";
import TopRestaurants from "../screens/TopRestaurants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function TopRestaurantsStack () {
  
 return ( <Stack.Navigator>
    <Stack.Screen
      name="top-restaurantss"
      component={TopRestaurants}
      options={{ title: "Los mejores restaurantes" }}
    />
  </Stack.Navigator>);
};
