import React, { useEffect, useState } from "react";
import authStore from "./src/stores/authStore";
import AuthNavigation from "./src/navigation/authNavigation";
import HomeNavigation from "./src/navigation/homeNavigation";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    authStore.addChangeListener(onChange);

    return () => authStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setToken(authStore.getToken());
  }

  return token ? <HomeNavigation /> : <AuthNavigation />;
}

export default App;
