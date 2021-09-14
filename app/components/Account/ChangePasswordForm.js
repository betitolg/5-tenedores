import { Button, Icon, Input } from "react-native-elements";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const ChangePasswordForm = (props) => {
  const { setShowModal, toastRef } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState("defaultValue");
  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false);

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
            onPress={()=>setShowPassword(!showPassword)}
          />
        }
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
            onPress={()=>setShowPassword(!showPassword)}
          />
        }
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
            onPress={()=>setShowPassword(!showPassword)}
          />
        }
      />
      <Button
        title="Cambiar contraseña"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
      />
    </View>
  );
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
