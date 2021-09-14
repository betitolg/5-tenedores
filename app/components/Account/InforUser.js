import "firebase/storage";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-camera";

import { StyleSheet, Text, View } from "react-native";

import { Avatar } from "react-native-elements";
import React from "react";
import firebase from "firebase";

const InforUser = (props) => {
  const {
    userInfo: { photoURL, displayName, email, uid },
    toastRef,
    setLoading,
    setLoadingText,
  } = props;

  const changeAvatar = async () => {
    const resultPermission = await Permissions.requestPermissionsAsync();

    const resultPermissionCamera = resultPermission.status;

    if (resultPermissionCamera === "denied") {
      toastRef.current.show("Es necesario aceptar los permisos de la galeria");
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (result.cancelled) {
        toastRef.current.show("Has cerrado la selección de imagenes");
      } else {
        uploadImage(result.uri)
          .then(() => {
            updatePhotoURL();
          })
          .catch(() => toastRef.current.show("Error al actualizar el avatar"));
      }
    }
  };

  const uploadImage = async (uri) => {
    setLoadingText("Actualizando Avatar");
    setLoading(true);
    const response = await fetch(uri);

    const blob = await response.blob();

    const ref = firebase.storage().ref().child(`avatar/${uid}`);
    return ref.put(blob);
  };

  const updatePhotoURL = async () => {
    firebase
      .storage()
      .ref(`avatar/${uid}`)
      .getDownloadURL()
      .then(async (response) => {
        const update = {
          photoURL: response,
        };

        await firebase.auth().currentUser.updateProfile(update);
        setLoading(false);
      })
      .catch(() => {
        toastRef.current.show("Error al actualizar el avatar");
      });
  };

  return (
    <View style={styles.viewUserInfo}>
      <Avatar
        rounded
        size="large"
        containerStyle={styles.userInfoAvatar}
        showEditButton
        source={
          photoURL
            ? { uri: photoURL }
            : require("../../../assets/img/avatar-default.jpg")
        }
      >
        <Avatar.Accessory size={28} onPress={changeAvatar} />
      </Avatar>
      <View>
        <Text style={styles.displayName}>
          {displayName ? displayName : "Anónimo"}
        </Text>
        <Text>{email ? email : "Social Login"}</Text>
      </View>
    </View>
  );
};

export default InforUser;

const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    paddingTop: 30,
    paddingBottom: 30,
  },
  userInfoAvatar: {
    marginRight: 20,
    backgroundColor: "#e3e3e3",
  },
  displayName: {
    fontWeight: "bold",
    paddingBottom: 10,
  },
});
