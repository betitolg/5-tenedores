import * as firebase from "firebase";

import  {LogBox} from "react-native";
import Navigation from "./app/navigations/Navigation";
import React from "react";
import { firebaseApp } from "./app/utils/firebase";

LogBox.ignoreLogs(["Setting a timer"]);


const App = () => {


  return <Navigation />;
};

export default App;
