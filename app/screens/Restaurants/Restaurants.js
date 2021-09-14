import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Icon } from "react-native-elements";
import firebase from "firebase/app";
import { firebaseApp } from "../../utils/firebase";

const Restaurants = (props) => {

    const {navigation} = props; 
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      setUser(userInfo);
    });
  }, []);

  return (
    <View style={styles.viewBody}>
      <Text>Restaurants</Text>
      {user && (
        <Icon
          type="material-community"
          name="plus"
          color="#00a680"
          reverse
          containerStyle={styles.btnContainer}
          onPress={()=>navigation.navigate("add-restaurant")}
        />
      )}
    </View>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    backgroundColor: "#fff",
  },
  btnContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
  },
});
