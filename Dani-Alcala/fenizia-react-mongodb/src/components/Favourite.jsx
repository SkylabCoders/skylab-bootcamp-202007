import React, { useState, useEffect } from "react";
import FavouriteList from "./FavouriteList";
import userStore from "../stores/userStore";
function Favourite({ favouriteList }) {
  const [favouriteListHook, setFavouriteListHook] = useState(userStore.getUser().favourites);
  const [count, setCount] = useState(0);
  useEffect(() => {
    userStore.addChangeListener(onChange);
    setFavouriteListHook(userStore.getUser().favourites);
    return () => {
      userStore.removeChangeListener(onChange);
    };
  }, [userStore.getUser().favourites]);
  function onChange() {
    setFavouriteListHook(userStore.getUser().favourites);
  }
  function toRender() {
    setCount(count + 1);
  }
  return (
    <>
      {favouriteListHook.map((element) => (
        <FavouriteList key={element} id={element} toRender={toRender}/>
      ))}
    </>
  );
}

export default Favourite;
