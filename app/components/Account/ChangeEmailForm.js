import * as firebase from "firebase";

import { Button, Icon, Input } from "react-native-elements";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { reauthenticate } from "../../utils/api";
import { validateEmail } from "../../utils/validations";

const ChangeEmailForm = (props) => {
  const { email, setShowModal, toastRef, setReloadUserInfo } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(defaultValue);
  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = () => {
    setErrors({});
    if (!formData.email || email === formData.email) {
      setErrors({ email: "El email no ha cambiado" });
    } else if (!validateEmail(formData.email)) {
      setErrors({ email: "Email incorrecto" });
    } else if (!formData.password) {
      setErrors({ password: "Contraseña no puede estar vacia" });
    } else {
      setIsLoading(true);
      reauthenticate(formData.password)
        .then((response) => {
          firebase
            .auth()
            .currentUser.updateEmail(formData.email)
            .then(() => {
              setIsLoading(false);
              setReloadUserInfo(true);
              toastRef.current.show("Email actualizado correctamente");
              setShowModal(false);
            }).catch(()=>{

                setErrors({email:"Error al actualizar el email"});
                setIsLoading(false);
            });
        })
        .catch(() => {
          setIsLoading(false);
          setErrors({ password: "Contraseña incorrecta" });
        });
    }
  };

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  return (
    <View style={styles.view}>
      <Input
        placeholder="Correo Electronico"
        containerStyle={styles.input}
        rightIcon={<Icon type="material-community" name="at" color="#c2c2c2" />}
        defaultValue={email}
        onChange={(e) => onChange(e, "email")}
        errorMessage={errors.email}
      />
      <Input
        placeholder="Contraseña"
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
      <Button
        title="Cambiar email"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={onSubmit}
        loading={isLoading}
      />
    </View>
  );
};

export default ChangeEmailForm;

const defaultValue = () => {
  return {
    email: "",
    password: "",
  };
};

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  input: { marginBottom: 10 },
  btnContainer: { marginTop: 25, width: "95%" },
  btn: { backgroundColor: "#00a680" },
});
