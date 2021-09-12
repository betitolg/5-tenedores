import Favorites from '../screens/Favorites';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function FavoritesStack(){

return(

<Stack.Navigator>

    <Stack.Screen name="favorits" component={Favorites} options={{title:"Favoritos"}}/>
</Stack.Navigator>

);

}