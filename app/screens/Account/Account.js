import React, { useEffect, useState } from "react";

import Loading from "../../components/Loading";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";
import firebase from "firebase";

const Account = () => {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) return <Loading isVisible={true} text="Cargando..." />;

  return login ? <UserLogged /> : <UserGuest />;
};

export default Account;


