import AccountStack from "./AccountStack";
import FavoritesStack from "./FavoritesStack";
import { Icon } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RestaurantsStack from "./RestaurantsStack";
import SearchStack from "./SearchStack";
import TopRestaurantsStack from "./TopRestaurantsStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="restaurants"
          component={RestaurantsStack}
          options={{ title: "Restaurantes" }}
        />
      
        <Tab.Screen
          name="top-restaurants"
          component={TopRestaurantsStack}
          options={{ title: "Top Restaurantes" }}
        />
        <Tab.Screen
          name="favorites"
          component={FavoritesStack}
          options={{ title: "Favoritos" }}
        />

        <Tab.Screen
          name="search"
          component={SearchStack}
          options={{ title: "Buscar" }}
        />
          <Tab.Screen
          name="account"
          component={AccountStack}
          options={{ title: "Cuenta" ,tabBarBadge:3 }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case "restaurants":
      iconName = "compass-outline";
      break;
    case "account":
      iconName = "account-outline";
      break;
    case "top-restaurants":
      iconName = "star-outline";
      break;
    case "favorites":
      iconName = "heart-outline";
      break;
    case "search":
      iconName = "magnify";
      break;
    default:
      break;
  }

  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
};

export default Navigation;
