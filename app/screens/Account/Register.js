import { Image, StyleSheet, Text, View } from "react-native";
import React,{useRef} from "react";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RegisterForm from "../../components/Account/RegisterForm";
import Toast from "react-native-easy-toast";

const Register = () => {

const toastRef = useRef();

  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../assets/img/5-tenedores-letras-icono-logo.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <View styles={styles.viewForm}>
        <RegisterForm toastRef={toastRef}  />
      </View>
      <Toast ref={toastRef} position="center" opacity={0.9}/>
    </KeyboardAwareScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  viewForm: {
    marginRight: 40,
    marginLeft: 40,
   

  },
});
