import React, { useState, useEffect } from 'react';
import teaStore from '../stores/teaStore';
import { getPrincipalTeas } from '../actions/teaActions';
import Loading from './Loading';
import BodyBoxPrincipalTea from './BodyBoxPrincipalTea';

function MainPage() {
  const [teaList, setTeaList] = useState(teaStore.getPrincipalTeas());

  useEffect(() => {
    teaStore.addChangeListener(onChange);

    if (teaList.length === 0) {
      getPrincipalTeas();
    }
    return () => teaStore.removeChangeListener(onChange);
  }, [teaList]);

  function onChange() {
    setTeaList(teaStore.getPrincipalTeas());
  }

  return (
    <>
      {teaList.length === 0 && <Loading />}
      {teaList.length > 0 &&
        teaList.map((tea) => (
          <BodyBoxPrincipalTea _id={tea._id} key={tea._id} />
        ))}
    </>
  );
}

export default MainPage;
