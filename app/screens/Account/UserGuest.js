import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { Button } from "react-native-elements";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const UserGuest = () => {
  const navigation = useNavigation();

  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        source={require("../../../assets/img/museum.jpg")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>Consulta tu perfil de 5 tenedores</Text>
      <Text style={styles.description}>
        ¿Cómo describirías tu mejor restaurante? Busca y Visualiza los mejores
        Restaurantes de una forma sencilla, vota cual te ha gustado mas y
        comenta como ha sido su experiencia.
      </Text>
      <View style={styles.viewBtn}>
        <Button
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          title="Ver tu perfil"
          onPress={() => {
          
            navigation.navigate("login")}
          }
        />
      </View>
    </ScrollView>
  );
};

export default UserGuest;

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
  viewBtn: {
    flex: 1,
    alignItems: "center",
  },
  btnStyle: {
    backgroundColor: "#FF745C",
  },
  btnContainer: {
    width: "70%",
  },
});
