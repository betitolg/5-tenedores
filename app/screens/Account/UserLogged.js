import  * as firebase from "firebase";

import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";

const UserLogged = () => {
  return (
    <View>
      <Text>User Logged</Text>
      <Button title="Cerrar sesión" onPress={()=>firebase.auth().signOut()}></Button>
    </View>
  );
};

export default UserLogged;

const styles = StyleSheet.create({});
