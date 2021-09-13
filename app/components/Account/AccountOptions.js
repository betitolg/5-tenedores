import { Avatar, Icon, ListItem } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { color } from "react-native-elements/dist/helpers";
import { map } from "lodash";

const AccountOptions = (props) => {
  const { userInfo, toastRef } = props;

  const menuOptions = generateOptions();
  console.log(menuOptions);
  return (
    <View>
      {map(menuOptions, (menu, index) => (
        <ListItem key={index} >
          <Icon 
            name={menu.iconNameLeft}
            type={menu.iconType}
            color={menu.iconColorLeft}
            
          />
          <ListItem.Content>
            <ListItem.Title>{menu.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </View>
  );
};

export default AccountOptions;

const generateOptions = () => {
  return [
    {
      title: "Cambiar Nombre y Apellidos",
      iconType: "material-community",
      iconNameLeft: "account-circle",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
    },
    {
      title: "Cambiar Email",
      iconType: "material-community",
      iconNameLeft: "at",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
    },
    {
      title: "Cambiar Contraseña",
      iconType: "material-community",
      iconNameLeft: "lock-reset",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
    },
  ];
};

const styles = StyleSheet.create({});
