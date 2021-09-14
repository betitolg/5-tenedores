import React, { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import AddRestaurantForm from "../../components/Restaurants/AddRestaurantForm";
import Loading from "../../components/Loading";
import Toast from "react-native-easy-toast";

const AddRestaurant = (props) => {
  const {navigation} = props;
  const [isLoading, setIsLoading] = useState(false);
  const toastRef = useRef();

  return (
    <View>
     <AddRestaurantForm  toastRef={toastRef} setIsLoading={setIsLoading} navigation={navigation}/>
      <Toast ref={toastRef} position="center" opacity={0.9} />
      <Loading isVisible={isLoading} text="Creando restaurante" />
    </View>
  );
};

export default AddRestaurant;

const styles = StyleSheet.create({});
