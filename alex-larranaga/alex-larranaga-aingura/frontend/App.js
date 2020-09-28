import React, { useState, useEffect } from "react";

import Navigation from "./src/navigation/Navigation";
import AuthStack from "./src/navigation/AuthStack";
import authStore from "./src/stores/authStore";
console.disableYellowBox = true;

export default function App() {
  const [token, setToken] = useState(false);
  useEffect(() => {
    authStore.addChangeListener(onChange);
    return () => {
      authStore.removeChangeListener(onChange);
    };
  }, []);

  function onChange() {
    setToken(authStore.getToken());
  }

  return token ? <Navigation></Navigation> : <AuthStack></AuthStack>;
}
