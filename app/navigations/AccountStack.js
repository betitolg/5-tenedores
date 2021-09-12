import Account from "../screens/Account/Account";
import Login from "../screens/Account/Login";
import React from "react";
import Register from "../screens/Account/Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="accounts"
        component={Account}
        options={{ title: "Mi Cuenta"}}
      />
      <Stack.Screen name="login"
      component={Login}
      options={{ title: "Iniciar sesión"}}
      />
       <Stack.Screen name="register"
      component={Register}
      options={{ title: "Registro"}}
      />
    </Stack.Navigator>
  );
}
