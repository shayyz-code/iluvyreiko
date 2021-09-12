import { useState, createContext, useEffect } from 'react';
import { ref, onValue } from '@firebase/database';
import { db } from '../firebase/Firebase';

export const GlobalStateContext = createContext();

export default function GlobalState({ children }) {
  const [censored, setCensored] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [data, setData] = useState({
    mydays: [],
    notes: [],
    properties: [],
    gallery: [],
    welcome: [],
  });

  function fetchData() {
    onValue(
      ref(db),
      snapshot => {
        snapshot.forEach(childSnapshot => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          if (!data[childKey].length) {
            setData({ ...data, [childKey]: childData });
          }
        });
      },
      {
        onlyOnce: true,
      }
    );
  }
  useEffect(() => {
    fetchData();
  });
  return (
    <GlobalStateContext.Provider
      value={{ censored, setCensored, showNav, setShowNav, data }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
}
