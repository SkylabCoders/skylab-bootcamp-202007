import React, { useState, useEffect } from "react";
// import { getData } from "./src/_helpers/getData";
// import { loadUser } from "./src/actions/authActions";
import authStore from "./src/stores/authStore";
import LandingNavigation from "./src/navigation/LandingNavigation";
import AuthNavigation from "./src/navigation/AuthNavigation";

function App() {
  // const [user, setUser] = useState(authStore.getUser());
  const [token, setToken] = useState("");
  useEffect(() => {
    authStore.addChangeListener(onChange);
    return () => authStore.removeChangeListener(onChange);
  }, [token]);
  function onChange() {
    setToken(authStore.getToken());
  }

  // useEffect(() => {
  //   authStore.addChangeListener(onChange);
  //   if (!token) {
  //     (async () => {
  //       const isLogged = await getData();
  //       if (isLogged) {
  //         console.log("isLogged", isLogged);
  //         loadUser(isLogged);
  //         setToken(true);
  //       } else {
  //         setToken(false);
  //       }
  //     })();
  //   }
  //   return () => authStore.removeChangeListener(onChange);
  // }, []);

  // useEffect(() => {
  //   if (mounted) {
  //     (async () => {
  //       const isLogged = await getData();
  //       if (isLogged) {
  //         console.log("isLogged", isLogged);
  //         loadUser(isLogged);
  //         setToken(true);
  //       } else {
  //         setToken(false);
  //       }
  //     })();
  //   }
  //   return () => {
  //     mounted = false;
  //   };
  // }, []);

  return token ? <LandingNavigation /> : <AuthNavigation />;
}

export default App;

// Hint - hide header on Stack.Navigator
// screenOptions={{ headerShown: false,}}

// TODO -> Implementar pantallas según si el usuario está registrado o no
/* const authScreens = {
  SignIn,
  SignUp,
};

const userScreens = {
  Home,
  Profile,
  UserSettings,
  About,
};

<Stack.Navigator>
  {Object.entries({
    ...(isLoggedIn ? userScreens : authScreens),
  }).map(([name, component]) => (
    <Stack.Screen name={name} component={component} />
  ))}
</Stack.Navigator>; */

/* function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Navigation} />
    </Drawer.Navigator>
  );
} */
