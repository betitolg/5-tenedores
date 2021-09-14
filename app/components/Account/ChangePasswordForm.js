import * as firebase from "firebase";

import { Button, Icon, Input } from "react-native-elements";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { reauthenticate } from "../../utils/api";
import { size } from "lodash";

const ChangePasswordForm = (props) => {
  const { setShowModal, toastRef } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(defaultValue);
  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false);

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  const onSubmit = async () => {

    let isSetErrors = true;
    let errorsTemp = {};
    setErrors({});

    if (
      !formData.password ||
      !formData.newPassword ||
      !formData.repeatNewPassword
    ) {

    
      errorsTemp = {
        password: formData.password ? "La contraseña no puede estar vacía" : "",
        newPassword: formData.newPassword
          ? "La contraseña no puede estar vacía"
          : "",
        repeatNewPassword: formData.repeatNewPassword
          ? "La contraseña no puede estar vacía"
          : "",
      };
    } else if (formData.newPassword !== formData.repeatNewPassword) {
      errorsTemp = {
        newPassword: "Las contraseñas no son iguales",
        repeatNewPassword: "Las contraseñas no son iguales",
      };
    } else if (size(formData.newPassword) < 6) {
      errorsTemp = {
        newPassword: "La contraseña tiene que ser mayor a 5 carateres",
        repeatNewPassword: "La contraseña tiene que ser mayor a 5 carateres",
      };
    } else {
      setIsLoading(true);
      await reauthenticate(formData.password)
        .then(async () => {
          await firebase
            .auth()
            .currentUser.updatePassword(formdata.newPassword)
            .then(() => {

              isSetErrors = false;
              setIsLoading(false);
              setShowModal(false);
              firebase.auth().signOut();
            })
            .catch(() => {
              errorsTemp = {
                other: "Error al actualizar la contraseña",
              };
              setIsLoading(false);
            });
        })
        .catch((err) => {
          errorsTemp = {
            password: "La contraseña no es correcta",
          };

          setIsLoading(false);
        });
    }
    isSetErrors && setErrors(errorsTemp);
  };

  return (
    <View style={styles.view}>
      <Input
        placeholder="Contraseña Actual"
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            color="#c2c2c2"
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        onChange={(e) => onChange(e, "password")}
        errorMessage={errors.password}
      />
      <Input
        placeholder="Nueva Contraseña"
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            color="#c2c2c2"
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        onChange={(e) => onChange(e, "newPassword")}
        errorMessage={errors.newPassword}
      />
      <Input
        placeholder="Repetir Nueva Contraseña"
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            color="#c2c2c2"
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        onChange={(e) => onChange(e, "repeatNewPassword")}
        errorMessage={errors.repeatNewPassword}
      />
      <Button
        title="Cambiar contraseña"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={onSubmit}
        loading={isLoading}
      />
      <Text>{errors.other}</Text>
    </View>
  );
};

const defaultValue = () => {
  return {
    password: "",
    newPassword: "",
    repeatNewPassword: "",
  };
};

export default ChangePasswordForm;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  input: {
    marginBottom: 10,
  },
  btnContainer: {
    marginTop: 20,
    width: "95%",
  },
  btn: {
    backgroundColor: "#00a680",
  },
});
