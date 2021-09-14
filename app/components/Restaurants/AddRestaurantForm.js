import { Alert, Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Button, Icon, Image, Input } from "react-native-elements";

import React from "react";

const AddRestaurantForm = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <FormAdd />
    </ScrollView>
  );
};

const FormAdd = (props) => {
  return (
    <View style={styles.viewForm}>
      <Input
        placeholder="Nombre del restaurante"
        containerStyle={styles.input}
      />
      <Input placeholder="Dirección " containerStyle={styles.input} />
      <Input placeholder="Descripción"  inputContainerStyle={styles.textArea}  multiline={true }/>
    </View>
  );
};
export default AddRestaurantForm;

const styles = StyleSheet.create({
  scrollView: {
    height: "100%",
  },
  viewForm: {
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    marginBottom: 10,
  },
  textArea:{
      height:100,
      width:"100%",
      padding:0,
      margin:0
  }
});
