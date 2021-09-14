import AddRestaurant from "../screens/Restaurants/AddRestaurant";
import React from "react";
import Restaurants from "../screens/Restaurants/Restaurants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function RestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="restaurantss"
        component={Restaurants}
        options={{ title: "Restaurantes" , headerShown: true  }}
      />

      <Stack.Screen name="add-restaurant" 
      component={AddRestaurant}
      options={{title:"Añadir Restaurant"}}/>
      
    </Stack.Navigator>
  );
}
