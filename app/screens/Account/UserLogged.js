import * as firebase from "firebase";

import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import AccountOptions from "../../components/Account/AccountOptions";
import { Button } from "react-native-elements";
import InforUser from "../../components/Account/InforUser";
import Loading from "../../components/Loading";
import Toast from "react-native-easy-toast";

const UserLogged = () => {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const toastRef = useRef();
  const [userInfo, setUserInfo] = useState(null);
  const [reloadUserInfo, setReloadUserInfo] = useState(false)

  useEffect(() => {
    (async () => {
      const user = await firebase.auth().currentUser;

      setUserInfo(user);
    })();
    setReloadUserInfo(false);
  }, [reloadUserInfo]);
  return (
    <View style={styles.viewUserInfo}>
      {userInfo && (
        <InforUser
          userInfo={userInfo}
          toastRef={toastRef}
          setLoading={setLoading}
          setLoadingText={setLoadingText}
        />
      )}

    <AccountOptions userInfo={userInfo} toastRef={toastRef} setReloadUserInfo={setReloadUserInfo}/>
      <Button
        title="Cerrar sesión"
        onPress={() => firebase.auth().signOut()}
        buttonStyle={styles.btnCloseSession}
        titleStyle={styles.btnCloseSsionText}
      />
      <Toast ref={toastRef} position="center" opacity={0.9} />
      <Loading text={loadingText} isVisible={loading} />
    </View>
  );
};

export default UserLogged;

const styles = StyleSheet.create({
  viewUserInfo: {
    minHeight: "100%",
    backgroundColor: "#f2f2f2",
  },
  btnCloseSession: {
    marginTop: 30,
    borderRadius: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e3e3e3",
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
    paddingTop: 10,
    paddingBottom: 10,
  },
  btnCloseSsionText: {
    color: "#00a680",
  },
});
